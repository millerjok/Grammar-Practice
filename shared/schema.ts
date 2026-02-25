import { z } from "zod";

export const questionSchema = z.object({
  id: z.number(),
  english: z.string(),
  japanese: z.string(),
  kana: z.string(),
  romaji: z.string(),
  tip: z.string(),
});

export const grammarDataSchema = z.object({
  usage: z.string(),
  exercises: z.array(questionSchema),
});

export const grammarLevelSchema = z.object({
  level: z.string(),
  description: z.string(),
  sections: z.array(z.object({
    title: z.string(),
    items: z.array(z.string()),
  })),
});

export type Question = z.infer<typeof questionSchema>;
export type GrammarData = z.infer<typeof grammarDataSchema>;
export type GrammarLevel = z.infer<typeof grammarLevelSchema>;
