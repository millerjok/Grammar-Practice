import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  ArrowLeft, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  Printer,
  Copy,
  Sun,
  Moon,
  Languages,
  Layers3,
  Keyboard,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import type { GrammarLevel, GrammarData, Question } from '@shared/schema';
import { grammarLevels as staticGrammarLevels } from '../../server/data/grammarLevels';
import { grammarQuestions } from './data/grammarQuestions';

const TARGET_KANJI = "一二三四五六七八九十百千万本人回才円番春夏秋冬日月火水木金土曜年時分夕半午毎週間今先朝晩昼夜去目口耳手体上中下右左前後東西南北外学校英語文漢字勉強父母子家族兄弟姉妹友私男女大小好安高新古多少楽長近正広早明行来休出入生見思書言話読売買食飲知作住会使着発聞帰持待教乗働動歩終始泊洗立考習山川田島花海天雨雪牛魚馬犬京都市県州国町神寺駅店電車道旅赤青白黒色銀々何紙元気活社自物名方院所屋肉場飯洋和病次同仕事点";

const LEVEL_STYLES: Record<string, { accent: string; number: string }> = {
  "Level 1": { accent: "mac-level-coral", number: "01" },
  "Level 2": { accent: "mac-level-blue", number: "02" },
  "Level 3": { accent: "mac-level-mint", number: "03" },
  "Level 4": { accent: "mac-level-violet", number: "04" },
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
            className={isTarget ? "mac-kanji-highlight" : ""}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

const Header = ({ theme, toggleTheme }: { theme: 'dark' | 'light', toggleTheme: () => void }) => (
  <header className="mac-menubar no-print">
    <div className="mac-menubar-inner">
      <div className="flex items-center gap-3 min-w-0">
        <div className="mac-menu-logo"><Languages size={15} strokeWidth={2.5} /></div>
        <span data-testid="text-app-title" className="mac-menu-title">Japanese Grammar</span>
        <span className="mac-menu-divider" />
        <span className="mac-menu-context">Chiaki Education</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="mac-menu-status"><span className="mac-status-dot" /> Ready to practise</span>
        <button
          data-testid="button-toggle-theme"
          onClick={toggleTheme}
          className="mac-theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  </header>
);

const LevelCard = ({ level, onSelect }: { level: GrammarLevel, onSelect: (item: string, levelName: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = LEVEL_STYLES[level.level] || LEVEL_STYLES["Level 1"];

  return (
    <div className={`mac-level-shell ${style.accent} ${isOpen ? 'is-open' : ''}`}>
      <button 
        data-testid={`button-level-${level.level}`}
        onClick={() => setIsOpen(!isOpen)}
        className="mac-level-card"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="mac-level-icon">
            <span>{style.number}</span>
            <Layers3 size={17} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="mac-level-title">{level.level}</h2>
              <span className="mac-level-count">{level.sections.reduce((sum, section) => sum + section.items.length, 0)} topics</span>
            </div>
            <span className="mac-level-description">{level.description}</span>
        </div>
        </div>
        <ChevronDown 
          className={`mac-chevron ${isOpen ? 'rotate-180' : ''}`}
          size={18}
        />
      </button>

      {isOpen && (
        <div className="mac-level-content animate-in fade-in slide-in-from-top-1 duration-200">
          {level.sections.map((section, idx) => (
            <div key={idx} className="mac-section">
              {section.title !== "Core Expressions" && section.title !== "Basic Actions & Requests" && (
                <div className="mac-section-title">
                  <span />{section.title}
                </div>
              )}
              <div className="mac-topic-grid">
                {section.items.map((item: string, i: number) => (
                  <button
                    key={i}
                    data-testid={`button-grammar-${item}`}
                    onClick={() => onSelect(item, level.level)}
                    className="mac-grammar-item group"
                  >
                    <span>{item}</span>
                    <ChevronRight size={15} />
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

const PracticeView = ({ grammarPoint, level, onBack }: { grammarPoint: string, level: string, onBack: () => void }) => {
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
      const data: GrammarData = grammarQuestions[grammarPoint] || grammarQuestions["default"];
      
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
    <div className="mac-practice-page">
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
        className="mac-back-button no-print"
      >
        <span><ArrowLeft size={15} /></span>
        Grammar Library
      </button>

      <section className="mac-practice-hero no-print">
        <div className="mac-practice-orb"><BookOpen size={25} /></div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="mac-eyebrow"><Sparkles size={12} /> Practice session</span>
            <span className="mac-level-badge">{level}</span>
          </div>
          <h2 data-testid="text-grammar-point" className="mac-practice-title">{grammarPoint}</h2>
          <p className="mac-practice-subtitle">Translate each sentence into Japanese, then reveal the model response.</p>
        </div>

        <div className="mac-usage-panel">
          <span className="mac-usage-label">Structure</span>
          <div className="min-h-[1.75rem] flex items-center">
           {usage ? (
             <span data-testid="text-usage" className="mac-usage-rule">{usage}</span>
           ) : loading ? (
             <div className="h-5 w-48 rounded-md animate-pulse bg-current opacity-10"></div>
           ) : null}
          </div>
        </div>
      </section>

      <div className="mac-toolbar no-print">
        <div className="mac-toolbar-title">
          <Keyboard size={16} />
          <span>{questions.length || 5} exercises</span>
        </div>
        <div className="mac-toolbar-actions">
          <button 
            data-testid="button-print"
            onClick={handlePrint}
            disabled={loading || !!error || questions.length === 0}
            className="mac-toolbar-button"
          >
            <Printer size={15}/>
            <span>Print</span>
          </button>
          <button 
            data-testid="button-copy"
            onClick={handleCopy}
            disabled={loading || !!error || questions.length === 0}
            className="mac-toolbar-button"
          >
            <Copy size={15}/>
            <span>Copy</span>
          </button>
          <button 
            data-testid="button-toggle-all"
            onClick={toggleAll}
            disabled={loading || !!error}
            className="mac-toolbar-button"
          >
            {showAllAnswers ? <EyeOff size={15}/> : <Eye size={15}/>}
            {showAllAnswers ? "Hide All" : "Show All"}
          </button>
          <button 
            data-testid="button-regenerate"
            onClick={() => generateQuestions()}
            disabled={loading}
            className="mac-toolbar-button mac-primary-button"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
            New set
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-3 animate-pulse no-print">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-28 rounded-2xl mac-skeleton"></div>
          ))}
        </div>
      ) : error ? (
        <div className="mac-error-panel no-print">
          <p data-testid="text-error" className="mb-4">{error}</p>
          <button 
            data-testid="button-try-again"
            onClick={() => generateQuestions()}
            className="mac-toolbar-button mac-primary-button"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="space-y-3 no-print">
          {questions.map((q, index) => {
            const isRevealed = revealedIds.has(q.id);
            return (
              <div 
                key={q.id} 
                data-testid={`card-question-${q.id}`}
                onClick={() => toggleReveal(q.id)}
                className={`mac-question-card group ${isRevealed ? 'is-revealed' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleReveal(q.id);
                  }
                }}
              >
                <div className="mac-question-topline">
                  <div className="mac-question-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="mac-question-english">{q.english}</h3>
                    {!isRevealed && (
                      <p className="mac-reveal-hint">Select to reveal the model answer</p>
                    )}
                  </div>
                  <div className="mac-reveal-control">
                    {isRevealed ? <EyeOff size={17} /> : <Eye size={17} />}
                  </div>
                </div>

                <div className={`mac-answer-reveal ${isRevealed ? 'is-visible' : ''}`}>
                  <div className="mac-answer-panel">
                    <div className="mac-answer-check"><CheckCircle2 size={16} /></div>
                    <div className="flex-1 min-w-0">
                      <p className="mac-japanese-answer font-sans-jp">
                        <HighlightKanji text={q.japanese} />
                      </p>
                      <p className="mac-kana-answer">{q.kana}</p>
                      <div className="mac-answer-meta">
                        <p>{q.romaji}</p>
                        <span><Sparkles size={11} /> {q.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
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
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = window.localStorage.getItem('grammar-studio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    setGrammarLevels(staticGrammarLevels);
    setLevelsLoading(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('grammar-studio-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

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
    <div className={`mac-desktop ${theme} print:bg-white print:text-black`}>
      <div className="mac-wallpaper-shape mac-wallpaper-shape-one" />
      <div className="mac-wallpaper-shape mac-wallpaper-shape-two" />
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="mac-window-wrap no-print-shell">
        <div className="mac-window">
          <div className="mac-window-titlebar no-print">
            <div className="mac-traffic-lights" aria-hidden="true">
              <span className="mac-light-red" />
              <span className="mac-light-yellow" />
              <span className="mac-light-green" />
            </div>
            <div className="mac-window-title">
              <Languages size={14} />
              <span>Grammar Studio</span>
            </div>
            <div className="mac-window-chip">日本語</div>
          </div>

          <main className="mac-window-content">
            {!selectedGrammar ? (
              <div className="mac-library-page">
                <section className="mac-hero">
                  <div className="mac-hero-copy">
                    <span className="mac-eyebrow"><Sparkles size={12} /> Japanese learning studio</span>
                    <h2>Build stronger sentences,<br/><span>one pattern at a time.</span></h2>
                    <p>Choose a grammar level, practise with clear examples, and reveal each answer when you are ready.</p>
                  </div>
                  <div className="mac-hero-stats" aria-label="Course overview">
                    <div><strong>4</strong><span>Learning levels</span></div>
                    <div><strong>{grammarLevels.reduce((sum, level) => sum + level.sections.reduce((sectionSum, section) => sectionSum + section.items.length, 0), 0) || '—'}</strong><span>Grammar topics</span></div>
                    <div><strong>5</strong><span>Examples per set</span></div>
                  </div>
                </section>

                <div className="mac-library-heading">
                  <div>
                    <span className="mac-section-kicker">Grammar library</span>
                    <h3>Select your level</h3>
                  </div>
                  <p>Open a level to browse its grammar patterns.</p>
                </div>

                {levelsLoading ? (
                  <div className="space-y-3 animate-pulse">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-24 rounded-2xl mac-skeleton"></div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {grammarLevels.map((level, idx) => (
                      <LevelCard key={idx} level={level} onSelect={handleSelect} />
                    ))}
                  </div>
                )}

                <footer className="mac-footer">
                  <div><CheckCircle2 size={14} /> Beginner-friendly vocabulary throughout</div>
                  <a href="mailto:soullennon41@gmail.com">Need help? Contact support</a>
                </footer>
              </div>
            ) : (
              <PracticeView
                grammarPoint={selectedGrammar}
                level={selectedLevel!}
                onBack={handleBack}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
