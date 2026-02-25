import { grammarLevels } from "./data/grammarLevels.js";
import { grammarQuestions } from "./data/grammarQuestions.js";
import type { GrammarData, GrammarLevel } from "@shared/schema";

export interface IStorage {
  getGrammarLevels(): GrammarLevel[];
  getGrammarQuestions(grammarPoint: string): GrammarData;
}

export class MemStorage implements IStorage {
  getGrammarLevels(): GrammarLevel[] {
    return grammarLevels;
  }

  getGrammarQuestions(grammarPoint: string): GrammarData {
    return grammarQuestions[grammarPoint] || grammarQuestions["default"];
  }
}

export const storage = new MemStorage();
