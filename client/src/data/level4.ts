import { GrammarData } from './types';

export const level4Questions: Record<string, GrammarData> = {
  "受け身：Vられる (Passive)": {
    usage: "Verb (passive form: a-nai stem + reru / rareru)",
    exercises: [
      { id: 1, english: "I was praised by the teacher.", japanese: "先生に褒められました。", kana: "せんせいにほめられました。", romaji: "Sensei ni homeraremashita.", tip: "Direct passive. The actor is marked with に." },
      { id: 2, english: "My foot was stepped on by someone.", japanese: "誰かに足を踏まれました。", kana: "だれかにあしをふまれました。", romaji: "Dareka ni ashi o fumaremashita.", tip: "Indirect/adversative passive." },
      { id: 3, english: "This book was written last year.", japanese: "この本は去年に書かれました。", kana: "このほんはきょねんにかかれました。", romaji: "Kono hon wa kyonen ni kakaremashita.", tip: "Passive without a specific actor." }
    ]
  },
  "使役：Vせる／させる (Causative)": {
    usage: "Verb (causative form: a-nai stem + seru / saseru)",
    exercises: [
      { id: 1, english: "The mother made the child study.", japanese: "母は子供に勉強させました。", kana: "はははこどもにべんきょうさせました。", romaji: "Haha wa kodomo ni benkyou sasemashita.", tip: "Making someone do an action." },
      { id: 2, english: "The teacher let the students go home early.", japanese: "先生は学生を早く帰らせました。", kana: "せんせいはがくせいをはやくかえらせました。", romaji: "Sensei wa gakusei o hayaku kaerasemashita.", tip: "Letting/allowing someone to do an action." },
      { id: 3, english: "Please let me rest today.", japanese: "今日は休ませてください。", kana: "きょうはやすませてください。", romaji: "Kyou wa yasumasete kudasai.", tip: "Polite request to be allowed to do something." }
    ]
  },
  "使役受け身：～させられる (Causative Passive)": {
    usage: "Verb (causative-passive form: a-nai stem + sareru / saserareru)",
    exercises: [
      { id: 1, english: "I was forced to drink alcohol by my boss.", japanese: "部長にお酒を飲まされました。", kana: "ぶちょうにおさけをのまされました。", romaji: "Buchou ni osake o nomasaremashita.", tip: "Shorter form of causative passive (nomu -> nomaserareru -> nomasareru)." },
      { id: 2, english: "I was made to wait for an hour.", japanese: "一時間待たされました。", kana: "いちじかんまたされました。", romaji: "Ichijikan matasaremashita.", tip: "Expresses annoyance at being forced." },
      { id: 3, english: "I was forced to eat vegetables.", japanese: "野菜を食べさせられました。", kana: "やさいをたべさせられました。", romaji: "Yasai o tabesaseraremashita.", tip: "Group 2 verbs always use -saserareru." }
    ]
  },
  "～わけではない (doesn’t necessarily mean…)": {
    usage: "Plain form + わけではない",
    exercises: [
      { id: 1, english: "It doesn't mean I dislike it.", japanese: "嫌いなわけではありません。", kana: "きらいなわけではありません。", romaji: "Kirai na wake dewa arimasen.", tip: "Na-adjective requires な." },
      { id: 2, english: "It's not that I can't go, but I'm busy.", japanese: "行けないわけではないですが、忙しいです。", kana: "いけないわけではないですが、いそがしいです。", romaji: "Ikenai wake dewa nai desu ga, isogashii desu.", tip: "Partial denial of a situation." },
      { id: 3, english: "I don't necessarily know everything.", japanese: "全部知っているわけではない。", kana: "ぜんぶしっているわけではない。", romaji: "Zenbu shitte iru wake dewa nai.", tip: "Softening a statement." }
    ]
  },
  "～とはかぎらない (not necessarily…)": {
    usage: "Plain form + とは限らない",
    exercises: [
      { id: 1, english: "Expensive things are not necessarily good.", japanese: "高い物がいいとは限りません。", kana: "たかいものかいいとはかぎりません。", romaji: "Takai mono ga ii to wa kagarimasen.", tip: "Denies a general assumption." },
      { id: 2, english: "Just because it is Japanese, it doesn't mean it's delicious.", japanese: "日本食だからといって、おいしいとは限りません。", kana: "にほんしょくだからといって、おいしいとはかぎりません。", romaji: "Nihonshoku dakara to itte, oishii to wa kagirimasen.", tip: "Often paired with からといって." },
      { id: 3, english: "He doesn't necessarily know.", japanese: "彼が知っているとは限りません。", kana: "かれがしっているとはかぎりません。", romaji: "Kare ga shitte iru to wa kagirimasen.", tip: "Expressing uncertainty about an assumption." }
    ]
  },
  "～からといって (just because...)": {
    usage: "Plain form + からといって",
    exercises: [
      { id: 1, english: "Just because you are rich, it doesn't mean you are happy.", japanese: "お金持ちだからといって、幸せだとは限りません。", kana: "おかねもちだからといって、しあわせだとはかぎりません。", romaji: "Okanemochi dakara to itte, shiawase da to wa kagirimasen.", tip: "Usually followed by a partial negation." },
      { id: 2, english: "Just because it's cheap, you shouldn't buy too much.", japanese: "安いからといって、買いすぎてはいけません。", kana: "やすいからといって、かいすぎてはいけません。", romaji: "Yasui kara to itte, kaisugite wa ikemasen.", tip: "Giving advice against a quick judgment." },
      { id: 3, english: "Just because I'm a student, don't treat me lightly.", japanese: "学生だからといって、甘く見ないでください。", kana: "がくせいだからといって、あまくみないでください。", romaji: "Gakusei dakara to itte, amaku minai de kudasai.", tip: "Often used when complaining or advising." }
    ]
  },
  "～によって (depending on)": {
    usage: "Noun + によって",
    exercises: [
      { id: 1, english: "Culture differs depending on the country.", japanese: "国によって文化が違います。", kana: "くにによってぶんかがちがいます。", romaji: "Kuni ni yotte bunka ga chigaimasu.", tip: "Shows variation or difference based on the noun." },
      { id: 2, english: "Depending on the person, opinions are different.", japanese: "人によって意見が異なります。", kana: "ひとによっていけんがことなります。", romaji: "Hito ni yotte iken ga kotonarimasu.", tip: "Variation among individuals." },
      { id: 3, english: "The price changes depending on the season.", japanese: "季節によって値段が変わります。", kana: "きせつによってねだんがかわります。", romaji: "Kisetsu ni yotte nedan ga kawarimasu.", tip: "Change due to an external factor." }
    ]
  },
  "～てばかりいる (doing nothing but...)": {
    usage: "Verb (te-form) + ばかりいる",
    exercises: [
      { id: 1, english: "He is doing nothing but playing games.", japanese: "彼はゲームをしてばかりいます。", kana: "かれはげーむをしてばかりいます。", romaji: "Kare wa geemu o shite bakari imasu.", tip: "Often carries a critical or negative tone." },
      { id: 2, english: "You shouldn't just be sleeping.", japanese: "寝てばかりいてはいけません。", kana: "ねてばかりいてはいけません。", romaji: "Nete bakari ite wa ikemasen.", tip: "Advice against an excessive habit." },
      { id: 3, english: "She is doing nothing but crying.", japanese: "彼女は泣いてばかりいる。", kana: "かのじょはないてばかりいる。", romaji: "Kanojo wa naite bakari iru.", tip: "Focuses on the repetition of an action." }
    ]
  },
  "～ことが多い (often happens)": {
    usage: "Verb (dictionary/nai form) + ことが多い",
    exercises: [
      { id: 1, english: "It often happens that it rains in the afternoon.", japanese: "午後は雨が降ることが多いです。", kana: "ごごはあめがふることがおおいです。", romaji: "Gogo wa ame ga furu koto ga ooi desu.", tip: "Expresses frequency of an occurrence." },
      { id: 2, english: "I often eat bread for breakfast.", japanese: "朝ごはんはパンを食べることが多いです。", kana: "あさごはんはぱんをたべることがおおいです。", romaji: "Asagohan wa pan o taberu koto ga ooi desu.", tip: "Describes a common personal habit." },
      { id: 3, english: "I don't often watch TV.", japanese: "テレビを見ないことが多いです。", kana: "てれびをみないことがおおいです。", romaji: "Terebi o minai koto ga ooi desu.", tip: "With negative verbs, means 'often do not'." }
    ]
  }
};
