export interface Question {
  id: number;
  english: string;
  japanese: string;
  kana: string;
  romaji: string;
  tip: string;
}

export interface GrammarData {
  usage: string;
  exercises: Question[];
}

export interface GrammarLevel {
  level: string;
  description: string;
  sections: {
    title: string;
    items: string[];
  }[];
}
