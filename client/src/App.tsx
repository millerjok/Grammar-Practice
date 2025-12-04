import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  ArrowLeft, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  Sparkles,
  School,
  Printer
} from 'lucide-react';

// --- Configuration & Data ---

// Use environment variable or fallback to empty string
// You can set this in the Secrets tool as VITE_GEMINI_API_KEY
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ""; 

// Kanji to highlight
const TARGET_KANJI = "一二三四五六七八九十百千万本人回才円番春夏秋冬日月火水木金土曜年時分夕半午毎週間今先朝晩昼夜去目口耳手体上中下右左前後東西南北外学校英語文漢字勉強父母子家族兄弟姉妹友私男女大小好安高新古多少楽長近正広早明行来休出入生見思書言話読売買食飲知作住会使着発聞帰持待教乗働動歩終始泊洗立考習山川田島花海天雨雪牛魚馬犬京都市県州国町神寺駅店電車道旅赤青白黒色銀々何紙元気活社自物名方院所屋肉場飯洋和病次同仕事点";

const GRAMMAR_DATA = [
  {
    level: "Level 1",
    description: "Foundational Grammar",
    color: "bg-red-900/30 text-red-200 border-red-800/50",
    sections: [
      {
        title: "Basic Actions & Requests",
        items: [
          "～ましょう (let’s)",
          "～てください (please do)",
          "～ている (ongoing action/state)"
        ]
      },
      {
        title: "Time & Sequence",
        items: [
          "～とき (when...)",
          "～前に (before...)",
          "～てから (after)",
          "～た後で (after doing…)",
          "～ながら (while)"
        ]
      },
      {
        title: "Reason, Purpose & Conjunctions",
        items: [
          "～から (because - subjective)",
          "～ので (because - objective)",
          "～が (but)",
          "～けど／けれど／けれども (but - casual/polite)",
          "～ても／でも (even if)",
          "Place へ Verb Stem に行く・来る (purpose)"
        ]
      },
      {
        title: "Ability, Preference & Definition",
        items: [
          "～ことができる (can do)",
          "～が好き／きらい／上手／下手 (likes/dislikes/skills)",
          "～について (about)",
          "～という (called/that says)"
        ]
      },
      {
        title: "Desire & Intention",
        items: [
          "～たい (want to do)",
          "～がほしい (want - object)",
          "～てほしい (want someone to…)",
          "～つもりだ (intend to)"
        ]
      },
      {
        title: "Probability / Guess",
        items: [
          "～と思う (I think)",
          "～でしょう (probably)",
          "～かもしれない (maybe)"
        ]
      }
    ]
  },
  {
    level: "Level 2",
    description: "Common & Essential Grammar",
    color: "bg-blue-900/30 text-blue-200 border-blue-800/50",
    sections: [
      {
        title: "Essential Conditionals",
        items: [
          "～たら (if/when…)",
          "～と (natural consequence)",
          "～ば (if…)",
          "～なら (if [contextual]…)"
        ]
      },
      {
        title: "Hearsay & Conjecture",
        items: [
          "～によると…～そうだ (According to… I heard)",
          "～らしい (apparently)",
          "～ようだ／みたいだ (seems / looks like)"
        ]
      },
      {
        title: "Ease, Excess & Methods",
        items: [
          "～やすい／にくい (easy to/hard to)",
          "～すぎる (too much)",
          "～方 (way of doing)"
        ]
      },
      {
        title: "Change & Completion",
        items: [
          "～ようになる (become able to / habit)",
          "い-adj → ～くなる / な-adj → ～になる (to become…)",
          "～てしまう (completely/regret)"
        ]
      },
      {
        title: "Requests, Advice & Obligations",
        items: [
          "～てもいい (may)",
          "～てはいけない (must not)",
          "～なければならない / ～なければいけない (must)",
          "～なくてもいい (don't have to)",
          "～た・ないほうがいい (had better/better not)",
          "～てはだめだ (must not - casual)"
        ]
      },
      {
        title: "Experiences & Giving",
        items: [
          "～たことがある (have done before)",
          "～てみる (try)",
          "～てあげる／くれる／もらう (giving/receiving favors)"
        ]
      },
      {
        title: "Comparison, Contrast & Limits",
        items: [
          "AよりBのほうが… (B is more… than A)",
          "AはBほど～ない (A is not as… as B)",
          "～の中で一番… (the most… among)",
          "～のに (although)",
          "～だけ (only)",
          "～しか～ない (only [negative])",
          "～ほかに (in addition to/except for)"
        ]
      },
      {
        title: "Sequence & Listing",
        items: [
          "～たり～たりする (listing)",
          "～し～し (reasons/items)"
        ]
      },
      {
        title: "Nominalisation",
        items: [
          "こと／の (nominaliser)"
        ]
      },
      {
        title: "Intention",
        items: [
          "～（よう）と思う (I think I will…)"
        ]
      },
      {
        title: "Ability & Potential",
        items: [
          "Verb (Potential Form) (can do)"
        ]
      }
    ]
  },
  {
    level: "Level 3",
    description: "Advanced Connectors & Nuance",
    color: "bg-emerald-900/30 text-emerald-200 border-emerald-800/50",
    sections: [
      {
        title: "Time & Timing",
        items: [
          "～うちに (before change / while)",
          "～間に (during / while)",
          "～ところ (when/about to do)"
        ]
      },
      {
        title: "Purpose, Decisions & Logic",
        items: [
          "～ために (in order to)",
          "～ように (so that / purpose)",
          "～ことにする (I decide to…)",
          "～ことになる (it has been decided…)",
          "～わけだ (that’s why / means…)"
        ]
      },
      {
        title: "Advanced Relations",
        items: [
          "～だけでなく／～ばかりでなく (not only..., but also...)",
          "～に比べて… (compared to…)",
          "～かわりに (instead of…)",
          "～にとって (for/to…)"
        ]
      },
      {
        title: "Complex Causes",
        items: [
          "～せいで (because, negative)",
          "～おかげで (thanks to)",
          "～結果（けっか） (as a result)"
        ]
      },
      {
        title: "Expectation & Necessity",
        items: [
          "～はずだ／はずがない (expected to/cannot be)",
          "～べきだ／べきではない (should/should not)",
          "～必要がある (necessary to)",
          "～ことをおすすめします (I recommend…)"
        ]
      },
      {
        title: "Nuance & Uncertainty",
        items: [
          "～かどうか (whether or not)",
          "～ばかり (nothing but)"
        ]
      }
    ]
  },
  {
    level: "Level 4",
    description: "Idioms & Advanced Phrasing",
    color: "bg-violet-900/30 text-violet-200 border-violet-800/50",
    sections: [
      {
        title: "Passive / Causative (Core VCE)",
        items: [
          "受け身：Vられる (Passive)",
          "使役：Vせる／させる (Causative)",
          "使役受け身：～させられる (Causative Passive)"
        ]
      },
      {
        title: "Partial Negation",
        items: [
          "～わけではない (doesn’t necessarily mean…)",
          "～とは限らない (not always…)"
        ]
      },
      {
        title: "Formal / Academic Grammar",
        items: [
          "～によって (depending on)",
          "～に対して (towards/contrasting)",
          "～から見ると (from the perspective of…)",
          "おもに (mainly/primarily)"
        ]
      },
      {
        title: "Idiomatic / Natural Expressions",
        items: [
          "～ことが多い (often happens)",
          "～ような気がする (have a feeling that)",
          "～と言われている (it is said that)"
        ]
      },
      {
        title: "Advanced Phrasing",
        items: [
          "～ば～ほど (the more… the more)",
          "と言っても過言ではない (it's no exaggeration to say that)",
          "～ことで、…できる (by doing…, one can…)"
        ]
      }
    ]
  }
];

// --- Components ---

const HighlightKanji = ({ text }: { text: string }) => {
  if (!text) return null;
  return (
    <span>
      {text.split('').map((char: string, index: number) => {
        const isTarget = TARGET_KANJI.includes(char);
        return (
          <span 
            key={index} 
            className={isTarget ? "text-yellow-400 font-bold" : ""}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

const Header = () => (
  <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
    <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-red-600 text-white p-2 rounded-lg">
          <School size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-100">Japanese Grammar</h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide">AI PRACTICE DOJO</p>
        </div>
      </div>
    </div>
  </header>
);

const LevelCard = ({ level, onSelect }: { level: any, onSelect: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-4 flex justify-between items-center border transition-all duration-200 cursor-pointer ${level.color} ${isOpen ? 'rounded-t-xl border-b-0' : 'rounded-xl hover:brightness-110'}`}
      >
        <div>
          <h2 className="text-xl font-bold">{level.level}</h2>
          <span className="text-sm font-medium opacity-80">{level.description}</span>
        </div>
        <ChevronDown 
          className={`transition-transform duration-200 text-slate-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>

      {isOpen && (
        <div className="bg-slate-800 border border-slate-700 rounded-b-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          {level.sections.map((section: any, idx: number) => (
            <div key={idx} className="border-b last:border-0 border-slate-700">
              {section.title !== "Core Expressions" && section.title !== "Basic Actions & Requests" && (
                <div className="px-6 py-2 bg-slate-900/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {section.title}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {section.items.map((item: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => onSelect(item, level.level)}
                    className="text-left px-6 py-4 hover:bg-slate-700 transition-colors duration-200 border-r border-slate-700 last:border-r-0 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-slate-300 font-medium group-hover:text-red-400">{item}</span>
                    <ChevronRight size={16} className="text-slate-600 group-hover:text-red-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PracticeView = ({ grammarPoint, level, onBack }: { grammarPoint: any, level: any, onBack: any }) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [usage, setUsage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [revealedIds, setRevealedIds] = useState(new Set());

  const generateQuestions = async (retryCount = 0) => {
    setLoading(true);
    setError(null);
    setQuestions([]);
    setUsage(null);
    setRevealedIds(new Set());
    setShowAllAnswers(false);

    try {
      if (!apiKey) {
        throw new Error("API Key is missing. Please add VITE_GEMINI_API_KEY to your secrets.");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are an expert Japanese teacher. Create a JSON response containing a usage rule and 10 translation exercises (English to Japanese) specifically practicing the grammar point: "${grammarPoint}".
                
                STRICT CONSTRAINTS:
                1. Vocabulary MUST be limited to JLPT N5 and N4 levels (VCE SL Japanese level). Do not use advanced nouns or verbs.
                2. The focus is on the correct usage of the grammar structure.
                3. The "usage" field MUST be a brief explanation in ENGLISH (e.g. "Verb (te-form) + しまう"). Do not use Japanese for the explanation text.
                4. If the grammar point title specifies a word order (e.g. "Place へ Verb Stem に..."), the Japanese sentences MUST strictly follow that order.
                5. The output must be valid JSON.
                
                Output Schema:
                {
                  "usage": "The grammar formation rule in English (e.g., Verb (te-form) + しまう)",
                  "exercises": [
                    {
                      "id": 1,
                      "english": "English sentence here",
                      "japanese": "Japanese sentence with Kanji",
                      "kana": "Reading in Hiragana/Katakana",
                      "romaji": "Romaji reading",
                      "tip": "Brief grammar note explaining the usage in this context"
                    }
                  ]
                }`
              }]
            }]
          })
        }
      );

      if (!response.ok) throw new Error("API call failed. Check your API key.");

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      // Clean up markdown code blocks if present
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(jsonStr);
      
      if (parsed.exercises && Array.isArray(parsed.exercises)) {
        setQuestions(parsed.exercises);
        if (parsed.usage) setUsage(parsed.usage);
      } else {
        throw new Error("Invalid format received");
      }
    } catch (err: any) {
      console.error(err);
      if (retryCount < 2 && apiKey) {
        setTimeout(() => generateQuestions(retryCount + 1), 1500);
      } else {
        setError(err.message || "Failed to generate questions. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateQuestions();
  }, [grammarPoint]);

  const toggleReveal = (id: any) => {
    const newSet = new Set(revealedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setRevealedIds(newSet);
  };

  const toggleAll = () => {
    const newState = !showAllAnswers;
    setShowAllAnswers(newState);
    if (newState) {
      const allIds = new Set(questions.map(q => q.id));
      setRevealedIds(allIds);
    } else {
      setRevealedIds(new Set());
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Print-only View */}
      <div className="print-only">
        <div className="mb-8">
          <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Japanese Grammar Worksheet</h1>
              <p className="text-sm text-black">わたしのなまえ：＿＿＿＿＿＿＿＿＿</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{level}</p>
              <p className="text-sm text-black">{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="mb-8 bg-white p-6 rounded-xl border border-black">
            <h2 className="text-xl font-bold mb-3">Grammar Point: {grammarPoint}</h2>
            {usage && (
              <div className="mb-2">
                <span className="font-bold text-sm uppercase tracking-wider text-black">Usage Rule:</span>
                <p className="text-lg font-medium mt-1 text-black">{usage}</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-black pb-2 mb-4">Exercises: Translate to Japanese</h3>
            {questions.map((q, i) => (
              <div key={q.id} className="mb-6 break-inside-avoid">
                <div className="flex items-baseline mb-2">
                  <span className="font-bold mr-3 text-black">{i + 1}.</span>
                  <p className="text-lg text-black">{q.english}</p>
                </div>
                <div className="h-24 border-b border-black border-dashed mt-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Answer Key Page */}
        <div className="print-break-before">
          <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
            <h1 className="text-2xl font-bold">Answer Key</h1>
            <p className="text-sm text-black">{grammarPoint}</p>
          </div>

          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={q.id} className="mb-6 p-4 bg-white rounded-lg border border-black break-inside-avoid">
                <div className="flex items-baseline mb-2">
                  <span className="font-bold mr-3 text-black">{i + 1}.</span>
                  <p className="font-medium text-black">{q.english}</p>
                </div>
                <div className="ml-6 space-y-1">
                  <p className="text-xl font-bold mt-1 text-black">{q.japanese}</p>
                  <p className="text-sm text-black">{q.kana}</p>
                  <p className="text-xs text-black italic mt-1">{q.romaji}</p>
                  <div className="mt-2 text-xs border border-black inline-block px-2 py-1 rounded text-black">
                    Tip: {q.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen View Navigation & Header */}
      <button 
        onClick={onBack} 
        className="flex items-center text-slate-400 hover:text-slate-200 mb-6 transition-colors no-print"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Grammar List
      </button>

      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 mb-8 text-center relative overflow-hidden no-print">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-pink-600"></div>
        <span className="inline-block px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-xs font-bold tracking-wider mb-3">
          {level}
        </span>
        <h2 className="text-3xl font-bold text-slate-100 mb-2">{grammarPoint}</h2>
        
        {/* Usage Display */}
        <div className="min-h-[2rem] mb-3 flex justify-center">
           {usage ? (
             <div className="inline-block bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-600 backdrop-blur-sm shadow-inner">
               <span className="text-indigo-300 font-mono text-sm font-medium tracking-wide">{usage}</span>
             </div>
           ) : loading ? (
             <div className="h-8 w-64 bg-slate-700/50 rounded-lg animate-pulse"></div>
           ) : null}
        </div>

        <p className="text-slate-400">Translate the sentences below into Japanese.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 no-print">
        <div className="flex items-center space-x-2">
          <Sparkles size={18} className="text-yellow-500" />
          <span className="text-sm font-medium text-slate-400">
            AI-Generated Exercises (N5-N4 Vocabulary)
          </span>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={handlePrint}
            disabled={loading || !!error || questions.length === 0}
            className="flex items-center px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors shadow-sm disabled:opacity-50"
          >
            <Printer size={16} className="mr-2"/>
            Print Worksheet
          </button>
          <button 
            onClick={toggleAll}
            disabled={loading || !!error}
            className="flex items-center px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors shadow-sm"
          >
            {showAllAnswers ? <EyeOff size={16} className="mr-2"/> : <Eye size={16} className="mr-2"/>}
            {showAllAnswers ? "Hide All" : "Show All"}
          </button>
          <button 
            onClick={() => generateQuestions()}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Regenerate
          </button>
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="space-y-4 animate-pulse no-print">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-slate-800 border border-slate-700 rounded-xl"></div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-red-900/20 rounded-xl border border-red-800/50 no-print">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => generateQuestions()}
            className="text-red-400 font-bold hover:underline"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="space-y-4 no-print">
          {questions.map((q) => {
            const isRevealed = revealedIds.has(q.id);
            return (
              <div 
                key={q.id} 
                onClick={() => toggleReveal(q.id)}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6 cursor-pointer hover:border-indigo-500 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-slate-200 pr-8">{q.english}</h3>
                  <div className={`p-2 rounded-full ${isRevealed ? 'bg-indigo-900/50 text-indigo-400' : 'bg-slate-700 text-slate-500 group-hover:bg-indigo-900/30 group-hover:text-indigo-400'}`}>
                    {isRevealed ? <EyeOff size={18} /> : <BookOpen size={18} />}
                  </div>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${isRevealed ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-slate-700 mt-2 space-y-1">
                    <p className="text-xl text-indigo-400 font-bold font-sans-jp">
                      <HighlightKanji text={q.japanese} />
                    </p>
                    <p className="text-sm text-slate-400">{q.kana}</p>
                    <div className="flex justify-between items-end mt-2">
                       <p className="text-xs text-slate-500 italic">{q.romaji}</p>
                       <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded">
                         Tip: {q.tip}
                       </span>
                    </div>
                  </div>
                </div>
                
                {!isRevealed && (
                   <p className="text-sm text-slate-600 italic mt-2">Click to reveal translation</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedGrammar, setSelectedGrammar] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleSelect = (item: string, levelName: string) => {
    setSelectedGrammar(item);
    setSelectedLevel(levelName);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedGrammar(null);
    setSelectedLevel(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100 print:bg-white print:text-black">
      <Header />
      
      <main className="py-8">
        {!selectedGrammar ? (
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-100 mb-3">Select a Grammar Point</h2>
              <p className="text-slate-400">Choose a topic below to generate practice exercises.</p>
            </div>
            
            {GRAMMAR_DATA.map((level, idx) => (
              <LevelCard key={idx} level={level} onSelect={handleSelect} />
            ))}
            
            {/* Footer / Instructions */}
            <div className="mt-12 text-center text-sm text-slate-600 pb-8">
              <p>Vocabulary Limited to Japanese Beginners for Practice Clarity</p>
              <p className="mt-2">Created by Wong Sensei</p>
            </div>
          </div>
        ) : (
          <PracticeView 
            grammarPoint={selectedGrammar} 
            level={selectedLevel} 
            onBack={handleBack} 
          />
        )}
      </main>
    </div>
  );
}
