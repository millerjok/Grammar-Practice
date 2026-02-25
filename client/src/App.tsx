import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  ArrowLeft, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  School,
  Printer,
  Copy,
  Sun,
  Moon
} from 'lucide-react';
import type { GrammarLevel, GrammarData, Question } from '@shared/schema';

const TARGET_KANJI = "一二三四五六七八九十百千万本人回才円番春夏秋冬日月火水木金土曜年時分夕半午毎週間今先朝晩昼夜去目口耳手体上中下右左前後東西南北外学校英語文漢字勉強父母子家族兄弟姉妹友私男女大小好安高新古多少楽長近正広早明行来休出入生見思書言話読売買食飲知作住会使着発聞帰持待教乗働動歩終始泊洗立考習山川田島花海天雨雪牛魚馬犬京都市県州国町神寺駅店電車道旅赤青白黒色銀々何紙元気活社自物名方院所屋肉場飯洋和病次同仕事点";

const LEVEL_STYLES: Record<string, { color: string; textDark: string; textLight: string }> = {
  "Level 1": { color: "bg-red-900/30 border-red-800/50", textDark: "text-red-200", textLight: "text-red-700" },
  "Level 2": { color: "bg-blue-900/30 border-blue-800/50", textDark: "text-blue-200", textLight: "text-blue-700" },
  "Level 3": { color: "bg-emerald-900/30 border-emerald-800/50", textDark: "text-emerald-200", textLight: "text-emerald-700" },
  "Level 4": { color: "bg-violet-900/30 border-violet-800/50", textDark: "text-violet-200", textLight: "text-violet-700" },
};

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

const Header = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => (
  <header className={`${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border-b sticky top-0 z-10 transition-colors duration-200`}>
    <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-red-600 text-white p-2 rounded-lg">
          <School size={24} />
        </div>
        <div>
          <h1 data-testid="text-app-title" className={`text-xl font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>Japanese Grammar</h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide">Chiaki Education</p>
        </div>
      </div>
      <button
        data-testid="button-toggle-theme"
        onClick={toggleTheme}
        className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </header>
);

const LevelCard = ({ level, onSelect, theme }: { level: GrammarLevel, onSelect: (item: string, levelName: string) => void, theme: 'dark' | 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = LEVEL_STYLES[level.level] || LEVEL_STYLES["Level 1"];

  return (
    <div className="mb-4">
      <button 
        data-testid={`button-level-${level.level}`}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-4 flex justify-between items-center border transition-all duration-200 cursor-pointer ${style.color} ${theme === 'dark' ? style.textDark : style.textLight} ${isOpen ? 'rounded-t-xl border-b-0' : 'rounded-xl hover:brightness-110'}`}
      >
        <div>
          <h2 className="text-xl font-bold">{level.level}</h2>
          <span className="text-sm font-medium opacity-80">{level.description}</span>
        </div>
        <ChevronDown 
          className={`transition-transform duration-200 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'} ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>

      {isOpen && (
        <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-b-xl shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200`}>
          {level.sections.map((section, idx) => (
            <div key={idx} className={`border-b last:border-0 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-100'}`}>
              {section.title !== "Core Expressions" && section.title !== "Basic Actions & Requests" && (
                <div className={`px-6 py-2 text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'bg-slate-900/50 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                  {section.title}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {section.items.map((item: string, i: number) => (
                  <button
                    key={i}
                    data-testid={`button-grammar-${item}`}
                    onClick={() => onSelect(item, level.level)}
                    className={`text-left px-6 py-4 transition-colors duration-200 border-r last:border-r-0 flex items-center justify-between group cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-700 border-slate-700' : 'hover:bg-slate-50 border-slate-100'}`}
                  >
                    <span className={`font-medium group-hover:text-red-400 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                    <ChevronRight size={16} className={`group-hover:text-red-400 ${theme === 'dark' ? 'text-slate-600' : 'text-slate-300'}`} />
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

const PracticeView = ({ grammarPoint, level, onBack, theme }: { grammarPoint: string, level: string, onBack: () => void, theme: 'dark' | 'light' }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [usage, setUsage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [revealedIds, setRevealedIds] = useState(new Set<number>());

  const generateQuestions = async () => {
    setLoading(true);
    setError(null);
    setQuestions([]);
    setUsage(null);
    setRevealedIds(new Set());
    setShowAllAnswers(false);

    try {
      const response = await fetch(`/api/grammar/questions/${encodeURIComponent(grammarPoint)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch questions from server");
      }
      const data: GrammarData = await response.json();
      
      if (data && data.exercises) {
        setQuestions(data.exercises);
        setUsage(data.usage);
      } else {
        throw new Error("Invalid format received from server");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to load questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateQuestions();
  }, [grammarPoint]);

  const toggleReveal = (id: number) => {
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

  const handleCopy = () => {
    if (questions.length === 0) return;

    const questionsText = `Japanese Grammar Practice: ${grammarPoint}\n${usage ? `Usage: ${usage}\n` : ''}\n` +
      `Exercises: Translate to Japanese\n` +
      questions.map((q, i) => 
        `${i + 1}. ${q.english}`
      ).join('\n\n');
      
    const answersText = `\n\n--- ANSWER KEY ---\n\n` +
      questions.map((q, i) => 
        `${i + 1}. ${q.english}\n   Answer: ${q.japanese} (${q.kana})\n   Tip: ${q.tip}`
      ).join('\n\n');

    navigator.clipboard.writeText(questionsText + answersText);
    alert("Questions copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
              <div key={q.id} className="mb-3 break-inside-avoid">
                <div className="flex items-baseline mb-1">
                  <span className="font-bold mr-3 text-black">{i + 1}.</span>
                  <p className="text-base text-black">{q.english}</p>
                </div>
                <div className="h-16 border-b border-black border-dashed mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="print-break-before">
          <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
            <h1 className="text-2xl font-bold">Answer Key</h1>
            <p className="text-sm text-black">{grammarPoint}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {questions.map((q, i) => (
              <div key={q.id} className="p-3 bg-white rounded-lg border border-black break-inside-avoid">
                <div className="flex items-baseline mb-1">
                  <span className="font-bold mr-2 text-black">{i + 1}.</span>
                  <p className="font-medium text-black text-sm">{q.english}</p>
                </div>
                <div className="ml-5 space-y-0.5">
                  <p className="text-lg font-bold text-black">{q.japanese}</p>
                  <p className="text-xs text-black">{q.kana}</p>
                  <p className="text-[10px] text-black italic">{q.romaji}</p>
                  <div className="mt-1 text-[10px] border border-black inline-block px-1.5 py-0.5 rounded text-black">
                    Tip: {q.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        data-testid="button-back"
        onClick={onBack} 
        className={`flex items-center mb-6 transition-colors no-print ${theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'}`}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Grammar List
      </button>

      <div className={`rounded-2xl p-8 shadow-lg border mb-8 text-center relative overflow-hidden no-print ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-pink-600"></div>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3 ${theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
          {level}
        </span>
        <h2 data-testid="text-grammar-point" className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>{grammarPoint}</h2>
        
        <div className="min-h-[2rem] mb-3 flex justify-center">
           {usage ? (
             <div className={`inline-block px-4 py-2 rounded-lg border backdrop-blur-sm shadow-inner ${theme === 'dark' ? 'bg-slate-900/50 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
               <span data-testid="text-usage" className={`font-mono text-sm font-medium tracking-wide ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>{usage}</span>
             </div>
           ) : loading ? (
             <div className={`h-8 w-64 rounded-lg animate-pulse ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-200'}`}></div>
           ) : null}
        </div>

        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Translate the sentences below into Japanese.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 no-print">
        <div className="flex items-center space-x-2">
        </div>
        <div className="flex space-x-3">
          <button 
            data-testid="button-print"
            onClick={handlePrint}
            disabled={loading || !!error || questions.length === 0}
            className={`flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors shadow-sm disabled:opacity-50 ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
          >
            <Printer size={16} className="mr-2"/>
            Print Worksheet
          </button>
          <button 
            data-testid="button-copy"
            onClick={handleCopy}
            disabled={loading || !!error || questions.length === 0}
            className={`flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors shadow-sm disabled:opacity-50 ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
          >
            <Copy size={16} className="mr-2"/>
            Copy Questions
          </button>
          <button 
            data-testid="button-toggle-all"
            onClick={toggleAll}
            disabled={loading || !!error}
            className={`flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors shadow-sm ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
          >
            {showAllAnswers ? <EyeOff size={16} className="mr-2"/> : <Eye size={16} className="mr-2"/>}
            {showAllAnswers ? "Hide All" : "Show All"}
          </button>
          <button 
            data-testid="button-regenerate"
            onClick={() => generateQuestions()}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Regenerate
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse no-print">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-32 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}></div>
          ))}
        </div>
      ) : error ? (
        <div className={`text-center py-12 rounded-xl border no-print ${theme === 'dark' ? 'bg-red-900/20 border-red-800/50' : 'bg-red-50 border-red-200'}`}>
          <p data-testid="text-error" className={`mb-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
          <button 
            data-testid="button-try-again"
            onClick={() => generateQuestions()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
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
                data-testid={`card-question-${q.id}`}
                onClick={() => toggleReveal(q.id)}
                className={`rounded-xl border p-6 cursor-pointer transition-all duration-200 group ${
                  theme === 'dark' 
                    ? 'bg-slate-800 border-slate-700 hover:border-indigo-500 hover:shadow-lg' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-medium pr-8 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>{q.english}</h3>
                  <div className={`p-2 rounded-full ${
                    isRevealed 
                      ? (theme === 'dark' ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-50 text-indigo-600') 
                      : (theme === 'dark' ? 'bg-slate-700 text-slate-500 group-hover:bg-indigo-900/30 group-hover:text-indigo-400' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500')
                  }`}>
                    {isRevealed ? <EyeOff size={18} /> : <BookOpen size={18} />}
                  </div>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${isRevealed ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`pt-4 border-t mt-2 space-y-1 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-100'}`}>
                    <p className={`text-xl font-bold font-sans-jp ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      <HighlightKanji text={q.japanese} />
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{q.kana}</p>
                    <div className="flex justify-between items-end mt-2">
                       <p className={`text-xs italic ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{q.romaji}</p>
                       <span className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-50 text-indigo-700'}`}>
                         Tip: {q.tip}
                       </span>
                    </div>
                  </div>
                </div>
                
                {!isRevealed && (
                   <p className={`text-sm italic mt-2 ${theme === 'dark' ? 'text-slate-600' : 'text-slate-400'}`}>Click to reveal translation</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [grammarLevels, setGrammarLevels] = useState<GrammarLevel[]>([]);
  const [levelsLoading, setLevelsLoading] = useState(true);
  const [selectedGrammar, setSelectedGrammar] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    fetch('/api/grammar/levels')
      .then(res => res.json())
      .then(data => {
        setGrammarLevels(data);
        setLevelsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load grammar levels:', err);
        setLevelsLoading(false);
      });
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
    <div className={`min-h-screen font-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'} print:bg-white print:text-black`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="py-8">
        {!selectedGrammar ? (
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>Select a Grammar Point</h2>
              <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Choose a topic below to generate practice exercises.</p>
            </div>
            
            {levelsLoading ? (
              <div className="space-y-4 animate-pulse">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`h-20 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}></div>
                ))}
              </div>
            ) : (
              grammarLevels.map((level, idx) => (
                <LevelCard key={idx} level={level} onSelect={handleSelect} theme={theme} />
              ))
            )}
            
            <div className="mt-12 text-center text-sm text-slate-600 pb-8">
              <p>Vocabulary Limited to Japanese Beginners for Practice Clarity</p>
              <p className="mt-2">For troubleshooting, please email: soullennon41@gmail.com</p>
            </div>
          </div>
        ) : (
          <PracticeView 
            grammarPoint={selectedGrammar} 
            level={selectedLevel!} 
            onBack={handleBack} 
            theme={theme}
          />
        )}
      </main>
    </div>
  );
}
