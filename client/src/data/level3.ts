import { GrammarData } from './types';

export const level3Questions: Record<string, GrammarData> = {
  "～ために (in order to)": {
    usage: "Verb (dictionary form) / Noun + の + ために",
    exercises: [
      { id: 1, english: "I am studying Japanese in order to go to Japan.", japanese: "日本へ行くために、日本語を勉強しています。", kana: "にほんへいくために、にほんごをべんきょうしています。", romaji: "Nihon e iku tame ni, nihongo o benkyou shite imasu.", tip: "Shows a clear, achievable purpose." },
      { id: 2, english: "He works hard for his family.", japanese: "彼は家族のために、よく働きます。", kana: "かれはかぞくのために、よくはたらきます。", romaji: "Kare wa kazoku no tame ni, yoku hatarakimasu.", tip: "Noun + の + ために means 'for the sake of'." },
      { id: 3, english: "I save money to buy a house.", japanese: "家を買うために、お金を貯めます。", kana: "いえをかうために、おかねをためます。", romaji: "Ie o kau tame ni, okane o tamemasu.", tip: "Usually used with volitional verbs." }
    ]
  },
  "～ように (so that / purpose)": {
    usage: "Verb (potential / nai-form) + ように",
    exercises: [
      { id: 1, english: "Please speak loudly so everyone can hear.", japanese: "みんなに聞こえるように、大きく話してください。", kana: "みんなにきこえるように、おおきくはなしてください。", romaji: "Minna ni kikoeru you ni, ookiku hanashite kudasai.", tip: "Focuses on a state to be achieved." },
      { id: 2, english: "I wrote it down so I won't forget.", japanese: "忘れないように、メモしました。", kana: "わすれないように、めもしました。", romaji: "Wasurenai you ni, memo shimashita.", tip: "Often used with negative verbs." },
      { id: 3, english: "Please close the window so the cat doesn't go out.", japanese: "猫が出ないように、窓を閉めてください。", kana: "ねこがでないように、まどをしめてください。", romaji: "Neko ga denai you ni, mado o shimete kudasai.", tip: "Non-volitional action." }
    ]
  },
  "～ことにする (I decide to…)": {
    usage: "Verb (dictionary form / nai-form) + ことにする",
    exercises: [
      { id: 1, english: "I decided to go to Japan next year.", japanese: "来年、日本へ行くことにしました。", kana: "らいねん、にほんへいくことにしました。", romaji: "Rainen, nihon e iku koto ni shimashita.", tip: "A decision made by the speaker." },
      { id: 2, english: "I decided not to eat sweets.", japanese: "甘い物を食べないことにします。", kana: "あまいものをたべないことにします。", romaji: "Amai mono o tabenai koto ni shimasu.", tip: "Decision using negative form." },
      { id: 3, english: "I decided to wake up early every day.", japanese: "毎日、早く起きることにしました。", kana: "まいにち、はやくおきることにしました。", romaji: "Mainichi, hayaku okiru koto ni shimashita.", tip: "Past tense used for a resolved decision." }
    ]
  },
  "～ことになる (it has been decided…)": {
    usage: "Verb (dictionary form / nai-form) + ことになる",
    exercises: [
      { id: 1, english: "It has been decided that I will transfer to Tokyo.", japanese: "東京に転勤することになりました。", kana: "とうきょうにてんきんすることになりました。", romaji: "Toukyou ni tenkin suru koto ni narimashita.", tip: "A decision made by external factors." },
      { id: 2, english: "The meeting will be held tomorrow.", japanese: "明日は会議をすることになりました。", kana: "あしたはかいぎをすることになりました。", romaji: "Ashita wa kaigi o suru koto ni narimashita.", tip: "An arranged plan or schedule." },
      { id: 3, english: "It was decided that the trip will be cancelled.", japanese: "旅行は中止になることになりました。", kana: "りょこうはちゅうしになることになりました。", romaji: "Ryokou wa chuushi ni naru koto ni narimashita.", tip: "Beyond the speaker's direct control." }
    ]
  },
  "～だけでなく／～ばかりでなく (not only..., but also...)": {
    usage: "Noun / Plain form + だけでなく",
    exercises: [
      { id: 1, english: "Not only meat, but I also eat vegetables.", japanese: "肉だけでなく、野菜も食べます。", kana: "にくだけでなく、やさいもたべます。", romaji: "Niku dake denaku, yasai mo tabemasu.", tip: "Connecting two items." },
      { id: 2, english: "He can speak not only English but also Japanese.", japanese: "彼は英語だけでなく、日本語も話せます。", kana: "かれはえいごだけでなく、にほんごもはなせます。", romaji: "Kare wa eigo dake denaku, nihongo mo hanasemasu.", tip: "Noun + だけでなく." },
      { id: 3, string: "This book is not only interesting but also useful.", japanese: "この本は面白いだけでなく、役に立ちます。", kana: "このほんはおもしろいだけでなく、やくにたちます。", romaji: "Kono hon wa omoshiroi dake denaku, yaku ni tachimasu.", tip: "I-adjective + だけでなく." }
    ]
  },
  "～に比べて… (compared to…)": {
    usage: "Noun + に比べて",
    exercises: [
      { id: 1, english: "Compared to Tokyo, Kyoto is quiet.", japanese: "東京に比べて、京都は静かです。", kana: "とうきょうにくらべて、きょうとはしずかです。", romaji: "Toukyou ni kurabete, kyouto wa shizuka desu.", tip: "Contrasting two items directly." },
      { id: 2, english: "Compared to last year, it's hot this year.", japanese: "去年に比べて、今年は暑いです。", kana: "きょねんにくらべて、ことしはあついです。", romaji: "Kyonen ni kurabete, kotoshi wa atsui desu.", tip: "Comparing timeframes." },
      { id: 3, english: "Compared to my older brother, my younger brother is tall.", japanese: "兄に比べて、弟は背が高いです。", kana: "あににくらべて、おとうとはせがたかいです。", romaji: "Ani ni kurabete, otouto wa se ga takai desu.", tip: "Contrasting people." }
    ]
  },
  "～にとって (for/to…)": {
    usage: "Noun + にとって",
    exercises: [
      { id: 1, english: "For me, family is the most important.", japanese: "私にとって、家族が一番大切です。", kana: "わたしにとって、かぞくがいちばんたいせつです。", romaji: "Watashi ni totte, kazoku ga ichiban taisetsu desu.", tip: "From someone's perspective or standpoint." },
      { id: 2, english: "To a student, studying is a duty.", japanese: "学生にとって、勉強は義務です。", kana: "がくせいにとって、べんきょうはぎむです。", romaji: "Gakusei ni totte, benkyou wa gimu desu.", tip: "Expressing value or importance." },
      { id: 3, english: "For him, this job is difficult.", japanese: "彼にとって、この仕事は難しいです。", kana: "かれにとって、このしごとはむずかしいです。", romaji: "Kare ni totte, kono shigoto wa muzukashii desu.", tip: "Evaluating difficulty." }
    ]
  },
  "～はずだ／はずがない (expected to/cannot be)": {
    usage: "Plain form / Noun + の + はずだ",
    exercises: [
      { id: 1, english: "He should arrive soon.", japanese: "彼はもうすぐ着くはずです。", kana: "かれはもうすぐつくはずです。", romaji: "Kare wa mousugu tsuku hazu desu.", tip: "A strong expectation based on objective facts." },
      { id: 2, english: "That cannot be true.", japanese: "そんなはずがありません。", kana: "そんなはずがありません。", romaji: "Sonna hazu ga arimasen.", tip: "Strong denial of possibility." },
      { id: 3, english: "The test should be easy.", japanese: "テストは簡単なはずです。", kana: "てすとはかんたんなはずです。", romaji: "Tesuto wa kantan na hazu desu.", tip: "Na-adjective + な + はずだ." }
    ]
  },
  "～べきだ／べきではない (should/should not)": {
    usage: "Verb (dictionary form) + べきだ",
    exercises: [
      { id: 1, english: "You should keep promises.", japanese: "約束は守るべきです。", kana: "やくそくはまもるべきです。", romaji: "Yakusoku wa mamoru beki desu.", tip: "Strong moral obligation or advice." },
      { id: 2, english: "You should not drink alcohol.", japanese: "お酒を飲むべきではありません。", kana: "おさけをのむべきではありません。", romaji: "Osake o nomu beki dewa arimasen.", tip: "Negative is べきではない." },
      { id: 3, english: "Students should study.", japanese: "学生は勉強すべきです。", kana: "がくせいはべんきょうすべきです。", romaji: "Gakusei wa benkyou subeki desu.", tip: "する + べき becomes すべき or するべき." }
    ]
  },
  "～かどうか (whether or not)": {
    usage: "Plain form + かどうか",
    exercises: [
      { id: 1, english: "I don't know whether he will come or not.", japanese: "彼が来るかどうか分かりません。", kana: "かれがくるかどうかわかりません。", romaji: "Kare ga kuru ka dou ka wakarimasen.", tip: "Embedded yes/no question." },
      { id: 2, english: "Please check whether it is correct.", japanese: "正しいかどうか確認してください。", kana: "ただしいかどうかかくにんしてください。", romaji: "Tadashii ka dou ka kakunin shite kudasai.", tip: "I-adjective directly connects." },
      { id: 3, english: "I will ask whether we can go or not.", japanese: "行けるかどうか聞いてみます。", kana: "いけるかどうかきいてみます。", romaji: "Ikeru ka dou ka kiite mimasu.", tip: "Used with potential form." }
    ]
  }
};
