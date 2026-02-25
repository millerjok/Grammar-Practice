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

// Map grammar point titles (exactly as they appear in the UI) to their questions
export const grammarQuestions: Record<string, GrammarData> = {
  "～たら (if/when…)": {
    usage: "Verb (ta-form) + ら / I-adj (katta) + ら / Na-adj/Noun (datta) + ら",
    exercises: [
      {
        id: 1,
        english: "If I have money, I will buy a car.",
        japanese: "お金があったら、車を買います。",
        kana: "おかねがあったら、くるまをかいます。",
        romaji: "Okane ga attara, kuruma o kaimasu.",
        tip: "Indicates a condition that must be met."
      },
      {
        id: 2,
        english: "When I go to Japan, I want to eat sushi.",
        japanese: "日本へ行ったら、寿司を食べたいです。",
        kana: "にほんへいったら、すしをたべたいです。",
        romaji: "Nihon e ittara, sushi o tabetai desu.",
        tip: "Can also mean 'when/after' an action is completed."
      },
      {
        id: 3,
        english: "If it's cheap, I will buy it.",
        japanese: "安かったら、買います。",
        kana: "やすかったら、かいます。",
        romaji: "Yasukattara, kaimasu.",
        tip: "I-adjective past tense + ら"
      },
      {
        id: 4,
        english: "If I have time tomorrow, let's watch a movie.",
        japanese: "明日暇だったら、映画を見ましょう。",
        kana: "あしたひまだったら、えいがをみましょう。",
        romaji: "Ashita hima dattara, eiga o mimashou.",
        tip: "Na-adjective past tense + ら"
      },
      {
        id: 5,
        english: "If it rains, we won't play tennis.",
        japanese: "雨だったら、テニスをしません。",
        kana: "あめだったら、てにすをしません。",
        romaji: "Ame dattara, tenisu o shimasen.",
        tip: "Noun past tense + ら"
      }
    ]
  },
  "～と思う (I think)": {
    usage: "Plain form + と思います",
    exercises: [
      {
        id: 1,
        english: "I think it will be hot tomorrow.",
        japanese: "明日は暑いと思います。",
        kana: "あしたはあついとおもいます。",
        romaji: "Ashita wa atsui to omoimasu.",
        tip: "Expressing an opinion or guess."
      },
      {
        id: 2,
        english: "I think Mr. Tanaka will come to the party.",
        japanese: "田中さんはパーティーに来ると思います。",
        kana: "たなかさんはぱーてぃーにくるとおもいます。",
        romaji: "Tanaka-san wa paatii ni kuru to omoimasu.",
        tip: "Used with verb plain form."
      },
      {
        id: 3,
        english: "I don't think this book is interesting.",
        japanese: "この本は面白くないと思います。",
        kana: "このほんはおもしろくないとおもいます。",
        romaji: "Kono hon wa omoshirokunai to omoimasu.",
        tip: "Negative is usually applied to the adjective/verb, not 思う."
      },
      {
        id: 4,
        english: "I think Japanese is difficult.",
        japanese: "日本語は難しいと思います。",
        kana: "にほんごはむずかしいとおもいます。",
        romaji: "Nihongo wa muzukashii to omoimasu.",
        tip: "Expressing an opinion about a fact."
      },
      {
        id: 5,
        english: "I think she is a student.",
        japanese: "彼女は学生だと思います。",
        kana: "かのじょはがくせいだとおもいます。",
        romaji: "Kanojo wa gakusei da to omoimasu.",
        tip: "Nouns require 'da' before 'to omoimasu'."
      }
    ]
  },
  "default": {
    usage: "Pre-set questions not yet added for this grammar point.",
    exercises: [
      {
        id: 1,
        english: "This is a placeholder exercise.",
        japanese: "これはプレースホルダーの練習です。",
        kana: "これはぷれーすほるだーのれんしゅうです。",
        romaji: "Kore wa pureesuhorudaa no renshuu desu.",
        tip: "Add actual questions to client/src/data/grammarQuestions.ts"
      },
      {
        id: 2,
        english: "You can add up to 10 questions per grammar point.",
        japanese: "文法ごとに10問まで追加できます。",
        kana: "ぶんぽうごとに１０もんまでついかできます。",
        romaji: "Bunpou goto ni 10 mon made tsuika dekimasu.",
        tip: "Check the data file to populate this section."
      }
    ]
  }
};
