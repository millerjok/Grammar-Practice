import { Question, GrammarData } from './types.js';
import { level1Questions } from './level1.js';
import { level2Questions } from './level2.js';
import { level3Questions } from './level3.js';
import { level4Questions } from './level4.js';

export const grammarQuestions: Record<string, GrammarData> = {
  // Level 1: Basic Actions & Requests
  "～ましょう (let’s)": {
    usage: "Verb (stem) + ましょう",
    exercises: [
      { id: 1, english: "Let's eat lunch together.", japanese: "一緒にお昼ご飯を食べましょう。", kana: "いっしょにおひるごはんをたべましょう。", romaji: "Issho ni ohirugohan o tabemashou.", tip: "Polite suggestion to do something together." },
      { id: 2, english: "Let's go to the park tomorrow.", japanese: "明日、公園に行きましょう。", kana: "あした、こうえんにいきましょう。", romaji: "Ashita, kouen ni ikimashou.", tip: "Stem of 行く (iki) + ましょう." },
      { id: 3, english: "Let's rest a little.", japanese: "少し休みましょう。", kana: "すこしやすみましょう。", romaji: "Sukoshi yasumimashou.", tip: "Suggesting a break." },
      { id: 4, english: "Let's drink tea.", japanese: "お茶を飲みましょう。", kana: "おちゃをのみましょう。", romaji: "Ocha o nomimashou.", tip: "Stem of 飲む (nomi) + ましょう." }
    ]
  },
  "～てください (please do)": {
    usage: "Verb (te-form) + ください",
    exercises: [
      { id: 1, english: "Please write your name here.", japanese: "ここに名前を書いてください。", kana: "ここになまえをかいてください。", romaji: "Koko ni namae o kaite kudasai.", tip: "Polite request." },
      { id: 2, english: "Please read this book.", japanese: "この本を読んでください。", kana: "このほんをよんでください。", romaji: "Kono hon o yonde kudasai.", tip: "Te-form of 読む is 読んで." },
      { id: 3, english: "Please listen to the teacher.", japanese: "先生の話を聞いてください。", kana: "せんせいのはなしをきいてください。", romaji: "Sensei no hanashi o kiite kudasai.", tip: "Asking someone to pay attention." },
      { id: 4, english: "Please wait a moment.", japanese: "ちょっと待ってください。", kana: "ちょっとまってください。", romaji: "Chotto matte kudasai.", tip: "Te-form of 待つ is 待って." }
    ]
  },
  "～ている (ongoing action/state)": {
    usage: "Verb (te-form) + いる/います",
    exercises: [
      { id: 1, english: "I am reading a book now.", japanese: "今、本を読んでいます。", kana: "いま、ほんをよんでいます。", romaji: "Ima, hon o yonde imasu.", tip: "Indicates an action currently in progress." },
      { id: 2, english: "It is raining outside.", japanese: "外は雨が降っています。", kana: "そとはあめがふっています。", romaji: "Soto wa ame ga futte imasu.", tip: "Ongoing state of weather." },
      { id: 3, english: "I live in Tokyo.", japanese: "私は京都に住んでいます。", kana: "わたしはきょうとにすんでいます。", romaji: "Watashi wa kyouto ni sunde imasu.", tip: "Indicates a continuing state (living somewhere)." },
      { id: 4, english: "Do you know Mr. Tanaka?", japanese: "田中さんを知っていますか。", kana: "たなかさんをしっていますか。", romaji: "Tanaka-san o shitte imasu ka.", tip: "Knowing someone is a continuous state." }
    ]
  },

  // Level 1: Time & Sequence
  "～とき (when...)": {
    usage: "Plain verb / I-adj / Na-adj (+な) / Noun (+の) + とき",
    exercises: [
      { id: 1, english: "When I was a child, I played outside.", japanese: "子供のとき、外で遊びました。", kana: "こどものとき、そとであそびました。", romaji: "Kodomo no toki, soto de asobimashita.", tip: "Noun + の + とき." },
      { id: 2, english: "When I go to Japan, I will buy a camera.", japanese: "日本へ行くとき、カメラを買います。", kana: "にほんへいくとき、かめらをかいます。", romaji: "Nihon e iku toki, kamera o kaimasu.", tip: "Dictionary form + とき (action hasn't happened yet)." },
      { id: 3, english: "When it's quiet, I study.", japanese: "静かなとき、勉強します。", kana: "しずかなとき、べんきょうします。", romaji: "Shizuka na toki, benkyou shimasu.", tip: "Na-adjective requires な." },
      { id: 4, english: "When I am busy, I don't watch TV.", japanese: "忙しいとき、テレビを見ません。", kana: "いそがしいとき、てれびをみません。", romaji: "Isogashii toki, terebi o mimasen.", tip: "I-adjective directly connects to とき." }
    ]
  },
  "～前に (before...)": {
    usage: "Verb (dictionary form) / Noun (+の) + 前に",
    exercises: [
      { id: 1, english: "I wash my hands before eating.", japanese: "食べる前に、手を洗います。", kana: "たべるまえに、てをあらいます。", romaji: "Taberu mae ni, te o araimasu.", tip: "Verb dictionary form + 前に." },
      { id: 2, english: "I will study before the test.", japanese: "テストの前に、勉強します。", kana: "てすとのまえに、べんきょうします。", romaji: "Tesuto no mae ni, benkyou shimasu.", tip: "Noun + の + 前に." },
      { id: 3, english: "I bought a ticket before going to the movie.", japanese: "映画に行く前に、チケットを買いました。", kana: "えいがにいくまえに、ちけっとをかいました。", romaji: "Eiga ni iku mae ni, chiketto o kaimashita.", tip: "The verb before 前に is always in present/dictionary form." }
    ]
  },
  "～てから (after)": {
    usage: "Verb (te-form) + から",
    exercises: [
      { id: 1, english: "After I wash my hands, I will eat.", japanese: "手を洗ってから、食べます。", kana: "てをあらってから、たべます。", romaji: "Te o aratte kara, tabemasu.", tip: "Focuses on the sequence of actions." },
      { id: 2, english: "After finishing work, I will go home.", japanese: "仕事が終わってから、帰ります。", kana: "しごとがおわってから、かえります。", romaji: "Shigoto ga owatte kara, kaerimasu.", tip: "Action 1 must complete before Action 2." },
      { id: 3, english: "Let's decide after thinking about it.", japanese: "考えてから決めましょう。", kana: "かんがえてからきめましょう。", romaji: "Kangaete kara kimemashou.", tip: "Te-form of 考える is 考えて." }
    ]
  },

  // Level 1: Reason, Purpose & Conjunctions
  "～から (because - subjective)": {
    usage: "Reason + から, Result",
    exercises: [
      { id: 1, english: "Because I have no money, I can't buy it.", japanese: "お金がないから、買えません。", kana: "おかねがないから、かえません。", romaji: "Okane ga nai kara, kaemasen.", tip: "Subjective reason. Can follow polite or plain form." },
      { id: 2, english: "Because it's hot, I will open the window.", japanese: "暑いから、窓を開けます。", kana: "あついから、まどをあけます。", romaji: "Atsui kara, mado o akemasu.", tip: "I-adjective + から." },
      { id: 3, english: "Because I am a student, I study every day.", japanese: "学生ですから、毎日勉強します。", kana: "がくせいだから、まいにちべんきょうします。", romaji: "Gakusei desu kara, mainichi benkyou shimasu.", tip: "Noun + だ/です + から." }
    ]
  },
  "Place へ Verb Stem に行く・来る (purpose)": {
    usage: "Destination へ + Verb (stem) / Noun + に行く/来る",
    exercises: [
      { id: 1, english: "I went to town to buy clothes.", japanese: "町へ服を買いに行きました。", kana: "まちへふくをかいにいきました。", romaji: "Machi e fuku o kai ni ikimashita.", tip: "買い is the stem of 買う." },
      { id: 2, english: "He came to Japan to study.", japanese: "彼は日本へ勉強に来ました。", kana: "かれはにほんへべんきょうにきました。", romaji: "Kare wa Nihon e benkyou ni kimashita.", tip: "Noun (study) + に + 来る." },
      { id: 3, english: "I am going to the library to read a book.", japanese: "図書館へ本を読みにいきます。", kana: "としょかんへほんをよみにいきます。", romaji: "Toshokan e hon o yomi ni ikimasu.", tip: "Expresses purpose of movement." }
    ]
  },

  // Level 1: Ability, Preference & Definition
  "～ことができる (can do)": {
    usage: "Verb (dictionary form) + ことができる",
    exercises: [
      { id: 1, english: "I can speak Japanese.", japanese: "日本語を話すことができます。", kana: "にほんごをはなすことができます。", romaji: "Nihongo o hanasu koto ga dekimasu.", tip: "Dictionary form + ことができる expresses ability." },
      { id: 2, english: "I can't eat natto.", japanese: "納豆を食べるこができません。", kana: "なっとうをたべることができません。", romaji: "Nattou o taberu koto ga dekimasen.", tip: "Negative form: ことができません." },
      { id: 3, english: "Can you ride a bicycle?", japanese: "自転車に乗ることができますか。", kana: "じてんしゃにのることができますか。", romaji: "Jitensha ni noru koto ga dekimasu ka.", tip: "Dictionary form of 乗る (to ride)." }
    ]
  },
  "～が好き／きらい／上手／下手 (likes/dislikes/skills)": {
    usage: "Noun + が + 好き/嫌い/上手/下手",
    exercises: [
      { id: 1, english: "I like dogs.", japanese: "私は犬が好きです。", kana: "わたしはいぬがすきです。", romaji: "Watashi wa inu ga suki desu.", tip: "Use the particle が with 好き." },
      { id: 2, english: "He is good at tennis.", japanese: "彼はテニスが上手です。", kana: "かれはてにすがじょうずです。", romaji: "Kare wa tenisu ga jouzu desu.", tip: "Use the particle が with 上手 (good at)." },
      { id: 3, english: "I dislike fish.", japanese: "私は魚が嫌いです。", kana: "わたしはさかながきらいです。", romaji: "Watashi wa sakana ga kirai desu.", tip: "嫌い (kirai) means to dislike." }
    ]
  },

  // Level 1: Desire & Intention
  "～たい (want to do)": {
    usage: "Verb (stem) + たいです",
    exercises: [
      { id: 1, english: "I want to eat sushi.", japanese: "寿司を食べたいです。", kana: "すしをたべたいです。", romaji: "Sushi o tabetai desu.", tip: "Stem of 食べる (tabe) + たい." },
      { id: 2, english: "I don't want to go today.", japanese: "今日は行きたくないです。", kana: "きょうはいきたくないです。", romaji: "Kyou wa ikitakunai desu.", tip: "Negative of たい is たくない." },
      { id: 3, english: "I want to watch a movie.", japanese: "映画を見たいです。", kana: "えいがをみたいです。", romaji: "Eiga o mitai desu.", tip: "The particle can be を or が." }
    ]
  },
  "～つもりだ (intend to)": {
    usage: "Verb (dictionary form / nai form) + つもりだ",
    exercises: [
      { id: 1, english: "I intend to go to university next year.", japanese: "来年、大学に行くつもりです。", kana: "らいねん、だいがくに行くつもりです。", romaji: "Rainen, daigaku ni iku tsumori desu.", tip: "Dictionary form + つもり shows intention." },
      { id: 2, english: "I don't intend to buy a car.", japanese: "車を買わないつもりです。", kana: "くるまをかわないつもりです。", romaji: "Kuruma o kawanai tsumori desu.", tip: "Nai form + つもり means 'intend NOT to'." },
      { id: 3, english: "I intended to study, but I slept.", japanese: "勉強するつもりでしたが、寝ました。", kana: "べんきょうするつもりでしたが、ねました。", romaji: "Benkyou suru tsumori deshita ga, nemashita.", tip: "Past tense つもりでした means a past intention." }
    ]
  },

  // Level 1: Probability / Guess
  "～と思う (I think)": {
    usage: "Plain form + と思います",
    exercises: [
      { id: 1, english: "I think it will be hot tomorrow.", japanese: "明日は暑いと思います。", kana: "あしたはあついとおもいます。", romaji: "Ashita wa atsui to omoimasu.", tip: "Expressing an opinion or guess." },
      { id: 2, english: "I think Mr. Tanaka will come.", japanese: "田中さんは来ると思います。", kana: "たなかさんはくるとおもいます。", romaji: "Tanaka-san wa kuru to omoimasu.", tip: "Used with verb plain form." },
      { id: 3, english: "I don't think it is interesting.", japanese: "面白くないと思います。", kana: "おもしろくないとおもいます。", romaji: "Omoshirokunai to omoimasu.", tip: "Negative is usually applied to the adjective/verb." }
    ]
  },
  "～でしょう (probably)": {
    usage: "Plain form / Noun / Na-adj (without だ) + でしょう",
    exercises: [
      { id: 1, english: "It will probably rain tomorrow.", japanese: "明日は雨が降るでしょう。", kana: "あしたはあめがふるでしょう。", romaji: "Ashita wa ame ga furu deshou.", tip: "Used for predictions or probability." },
      { id: 2, english: "This book is probably interesting.", japanese: "この本は面白いでしょう。", kana: "このほんはおもしろいでしょう。", romaji: "Kono hon wa omoshiroi deshou.", tip: "I-adjective directly connects to でしょう." },
      { id: 3, english: "Mr. Tanaka is probably a student.", japanese: "田中さんは学生でしょう。", kana: "たなかさんはがくせいでしょう。", romaji: "Tanaka-san wa gakusei deshou.", tip: "Noun drops だ before でしょう." }
    ]
  },

  // Level 2: Essential Conditionals
  "～たら (if/when…)": {
    usage: "Verb (ta-form) + ら / I-adj (katta) + ら / Na-adj/Noun (datta) + ら",
    exercises: [
      { id: 1, english: "If I have money, I will buy a car.", japanese: "お金があったら、車を買います。", kana: "おかねがあったら、くるまをかいます。", romaji: "Okane ga attara, kuruma o kaimasu.", tip: "Indicates a condition." },
      { id: 2, english: "When I arrive at the station, I will call.", japanese: "駅に着いたら、電話します。", kana: "えきについたら、でんわします。", romaji: "Eki ni tsuitara, denwa shimasu.", tip: "Can also mean 'after' an action is completed." },
      { id: 3, english: "If it's cheap, I will buy it.", japanese: "安かったら、買います。", kana: "やすかったら、かいます。", romaji: "Yasukattara, kaimasu.", tip: "I-adjective past tense + ら." }
    ]
  },
  "～と (natural consequence)": {
    usage: "Verb (dictionary form) + と",
    exercises: [
      { id: 1, english: "If you push this button, water comes out.", japanese: "このボタンを押すと、水が出ます。", kana: "このぼたんをおすと、みずがでます。", romaji: "Kono botan o osu to, mizu ga demasu.", tip: "Shows a natural, inevitable consequence." },
      { id: 2, english: "If you go straight, there is a bank.", japanese: "まっすぐ行くと、銀行があります。", kana: "まっすぐいくと、ぎんこうがあります。", romaji: "Massugu iku to, ginkou ga arimasu.", tip: "Commonly used for giving directions." },
      { id: 3, english: "When spring comes, flowers bloom.", japanese: "春になると、花が咲きます。", kana: "はるになると、はながさきます。", romaji: "Haru ni naru to, hana ga sakimasu.", tip: "Natural facts or habits." }
    ]
  },
  
  // Level 2: Comparison, Contrast & Limits
  "AよりBのほうが… (B is more… than A)": {
    usage: "AよりBのほうが + Adjective",
    exercises: [
      { id: 1, english: "Trains are faster than buses.", japanese: "バスより電車のほうが速いです。", kana: "ばすよりでんしゃのほうがはやいです。", romaji: "Basu yori densha no hou ga hayai desu.", tip: "B (Train) is more (fast) than A (Bus)." },
      { id: 2, english: "Meat is more delicious than fish.", japanese: "魚より肉のほうがおいしいです。", kana: "さかなよりにくのほうがおいしいです。", romaji: "Sakana yori niku no hou ga oishii desu.", tip: "Comparing two items directly." },
      { id: 3, english: "Today is hotter than yesterday.", japanese: "昨日より今日のほうが暑いです。", kana: "きのうよりきょうのほうがあついです。", romaji: "Kinou yori kyou no hou ga atsui desu.", tip: "Comparing days." }
    ]
  },

  // Level 3: Time & Timing
  "～うちに (before change / while)": {
    usage: "Verb (dictionary/nai/te-iru) / I-adj / Na-adj (+な) / Noun (+の) + うちに",
    exercises: [
      { id: 1, english: "Let's go home before it rains.", japanese: "雨が降らないうちに、帰りましょう。", kana: "あめがふらないうちに、かえりましょう。", romaji: "Ame ga furanai uchi ni, kaerimashou.", tip: "Do something before the state changes." },
      { id: 2, english: "Please eat while it's warm.", japanese: "温かいうちに食べてください。", kana: "あたたかいうちにたべてください。", romaji: "Atatakai uchi ni tabete kudasai.", tip: "While a certain state holds true." },
      { id: 3, english: "While I was sleeping, my friend came.", japanese: "寝ているうちに、友達が来ました。", kana: "ねているうちに、ともだちがきました。", romaji: "Nete iru uchi ni, tomodachi ga kimashita.", tip: "An event happens within a timeframe." }
    ]
  },

  // Level 4: Partial Negation
  "～わけではない (doesn’t necessarily mean…)": {
    usage: "Plain form + わけではない",
    exercises: [
      { id: 1, english: "It doesn't mean I dislike it.", japanese: "嫌いなわけではありません。", kana: "きらいなわけではありません。", romaji: "Kirai na wake dewa arimasen.", tip: "Na-adjective requires な." },
      { id: 2, english: "It's not that I can't go, but I'm busy.", japanese: "行けないわけではないですが、忙しいです。", kana: "いけないわけではないですが、いそがしいです。", romaji: "Ikenai wake dewa nai desu ga, isogashii desu.", tip: "Partial denial of a situation." },
      { id: 3, english: "I don't necessarily know everything.", japanese: "全部知っているわけではない。", kana: "ぜんぶしっているわけではない。", romaji: "Zenbu shitte iru wake dewa nai.", tip: "Softening a statement." }
    ]
  },

  ...level1Questions,
  ...level2Questions,
  ...level3Questions,
  ...level4Questions,

  "default": {
    usage: "Pre-set questions not yet added for this grammar point.",
    exercises: [
      {
        id: 1,
        english: "This is a placeholder exercise.",
        japanese: "これはプレースホルダーの練習です。",
        kana: "これはぷれーすほるだーのれんしゅうです。",
        romaji: "Kore wa pureesuhorudaa no renshuu desu.",
        tip: "More grammar questions will be added soon."
      }
    ]
  }
};