import { GrammarData } from './types.js';

export const level4Questions: Record<string, GrammarData> = {
  // Passive / Causative
  "受け身：Vられる (Passive)": {
    usage: "Verb (passive form: a-nai stem + reru / rareru)",
    exercises: [
      { id: 1, english: "I was praised by the teacher.", japanese: "先生に褒められました。", kana: "せんせいにほめられました。", romaji: "Sensei ni homeraremashita.", tip: "Direct passive. The actor is marked with に." },
      { id: 2, english: "My foot was stepped on by someone.", japanese: "誰かに足を踏まれました。", kana: "だれかにあしをふまれました。", romaji: "Dareka ni ashi o fumaremashita.", tip: "Indirect/adversative passive." },
      { id: 3, english: "This book was written last year.", japanese: "この本は去年に書かれました。", kana: "このほんはきょねんにかかれました。", romaji: "Kono hon wa kyonen ni kakaremashita.", tip: "Passive without a specific actor." },
      { id: 4, english: "My bag was stolen.", japanese: "かばんを盗まれました。", kana: "かばんをぬすまれました。", romaji: "Kaban o nusumaremashita.", tip: "Suffering passive." },
      { id: 5, english: "I was invited by a friend.", japanese: "友達に招待されました。", kana: "ともだちにしょうたいされました。", romaji: "Tomodachi ni shoutai saremashita.", tip: "Group 3 verb する becomes される." }
    ]
  },
  "使役：Vせる／させる (Causative)": {
    usage: "Verb (causative form: a-nai stem + seru / saseru)",
    exercises: [
      { id: 1, english: "The mother made the child study.", japanese: "母は子供に勉強させました。", kana: "はははこどもにべんきょうさせました。", romaji: "Haha wa kodomo ni benkyou sasemashita.", tip: "Making someone do an action." },
      { id: 2, english: "The teacher let the students go home early.", japanese: "先生は学生を早く帰らせました。", kana: "せんせいはがくせいをはやくかえらせました。", romaji: "Sensei wa gakusei o hayaku kaerasemashita.", tip: "Letting/allowing someone to do an action." },
      { id: 3, english: "Please let me rest today.", japanese: "今日は休ませてください。", kana: "きょうはやすませてください。", romaji: "Kyou wa yasumasete kudasai.", tip: "Polite request to be allowed to do something." },
      { id: 4, english: "I made him wait.", japanese: "彼を待たせました。", kana: "かれをまたせました。", romaji: "Kare o matasemashita.", tip: "Group 1 verb ends in a-seru." },
      { id: 5, english: "I will make my sister help.", japanese: "妹に手伝わせます。", kana: "いもうとにてつだわせます。", romaji: "Imouto ni tetsudawasemasu.", tip: "Using に for the person doing the action." }
    ]
  },
  "使役受け身：～させられる (Causative Passive)": {
    usage: "Verb (causative-passive form: a-nai stem + sareru / saserareru)",
    exercises: [
      { id: 1, english: "I was forced to drink alcohol by my boss.", japanese: "部長にお酒を飲まされました。", kana: "ぶちょうにおさけをのまされました。", romaji: "Buchou ni osake o nomasaremashita.", tip: "Shorter form of causative passive." },
      { id: 2, english: "I was made to wait for an hour.", japanese: "一時間待たされました。", kana: "いちじかんまたされました。", romaji: "Ichijikan matasaremashita.", tip: "Expresses annoyance at being forced." },
      { id: 3, english: "I was forced to eat vegetables.", japanese: "野菜を食べさせられました。", kana: "やさいをたべさせられました。", romaji: "Yasai o tabesaseraremashita.", tip: "Group 2 verbs always use -saserareru." },
      { id: 4, english: "I was made to sing a song.", japanese: "歌を歌わされました。", kana: "うたをうたわされました。", romaji: "Uta o utawasaremashita.", tip: "Group 1 shortening to -asareru." },
      { id: 5, english: "I was forced to go.", japanese: "行かされました。", kana: "いかされました。", romaji: "Ikasaremashita.", tip: "From causative 行かせる." }
    ]
  },

  // Partial Negation
  "～わけではない (doesn’t necessarily mean…)": {
    usage: "Plain form + わけではない",
    exercises: [
      { id: 1, english: "It doesn't mean I dislike it.", japanese: "嫌いなわけではありません。", kana: "きらいなわけではありません。", romaji: "Kirai na wake dewa arimasen.", tip: "Na-adjective requires な." },
      { id: 2, english: "It's not that I can't go, but I'm busy.", japanese: "行けないわけではないですが、忙しいです。", kana: "いけないわけではないですが、いそがしいです。", romaji: "Ikenai wake dewa nai desu ga, isogashii desu.", tip: "Partial denial of a situation." },
      { id: 3, english: "I don't necessarily know everything.", japanese: "全部知っているわけではない。", kana: "ぜんぶしっているわけではない。", romaji: "Zenbu shitte iru wake dewa nai.", tip: "Softening a statement." },
      { id: 4, english: "It doesn't mean I don't want it.", japanese: "ほしくないわけではありません。", kana: "ほしくないわけではありません。", romaji: "Hoshikunai wake dewa arimasen.", tip: "I-adj." },
      { id: 5, english: "It doesn't mean I am angry.", japanese: "怒っているわけじゃない。", kana: "おこっているわけじゃない。", romaji: "Okotte iru wake janai.", tip: "Casual spoken form." }
    ]
  },
  "～とはかぎらない (not necessarily…)": {
    usage: "Plain form + とは限らない",
    exercises: [
      { id: 1, english: "Expensive things are not necessarily good.", japanese: "高い物がいいとは限りません。", kana: "たかいものがいいとはかぎりません。", romaji: "Takai mono ga ii to wa kagirimasen.", tip: "Denies a general assumption." },
      { id: 2, english: "Just because it is Japanese, it doesn't mean it's delicious.", japanese: "日本食だからといって、おいしいとは限りません。", kana: "にほんしょくだからといって、おいしいとはかぎりません。", romaji: "Nihonshoku dakara to itte, oishii to wa kagirimasen.", tip: "Often paired with からといって." },
      { id: 3, english: "He doesn't necessarily know.", japanese: "彼が知っているとは限りません。", kana: "かれがしっているとはかぎりません。", romaji: "Kare ga shitte iru to wa kagirimasen.", tip: "Expressing uncertainty about an assumption." },
      { id: 4, english: "It won't necessarily rain.", japanese: "雨が降るとは限らない。", kana: "あめがふるとはかぎらない。", romaji: "Ame ga furu to wa kagiranai.", tip: "Casual form." },
      { id: 5, english: "It is not necessarily safe.", japanese: "安全だとは限らない。", kana: "あんぜんだとはかぎらない。", romaji: "Anzen da to wa kagiranai.", tip: "Na-adj requires だ." }
    ]
  },
  "～からといって (just because...)": {
    usage: "Plain form + からといって",
    exercises: [
      { id: 1, english: "Just because you are rich, it doesn't mean you are happy.", japanese: "お金持ちだからといって、幸せだとは限りません。", kana: "おかねもちだからといって、しあわせだとはかぎりません。", romaji: "Okanemochi dakara to itte, shiawase da to wa kagirimasen.", tip: "Usually followed by a partial negation." },
      { id: 2, english: "Just because it's cheap, you shouldn't buy too much.", japanese: "安いからといって、買いすぎてはいけません。", kana: "やすいからといって、かいすぎてはいけません。", romaji: "Yasui kara to itte, kaisugite wa ikemasen.", tip: "Giving advice against a quick judgment." },
      { id: 3, english: "Just because I'm a student, don't treat me lightly.", japanese: "学生だからといって、甘く見ないでください。", kana: "がくせいだからといって、あまくみないでください。", romaji: "Gakusei dakara to itte, amaku minai de kudasai.", tip: "Often used when complaining or advising." },
      { id: 4, english: "Just because he is Japanese, he doesn't know everything.", japanese: "日本人だからといって、何でも知っているわけではない。", kana: "にほんじんだからといって、なんでもしっているわけではない。", romaji: "Nihonjin dakara to itte, nandemo shitte iru wake dewa nai.", tip: "With wake dewa nai." },
      { id: 5, english: "Just because it's difficult, you shouldn't quit.", japanese: "難しいからといって、やめてはだめだ。", kana: "むずかしいからといって、やめてはだめだ。", romaji: "Muzukashii kara to itte, yamete wa dame da.", tip: "With dame da." }
    ]
  },

  // Formal / Academic Grammar
  "～によって (depending on)": {
    usage: "Noun + によって",
    exercises: [
      { id: 1, english: "Culture differs depending on the country.", japanese: "国によって文化が違います。", kana: "くにによってぶんかがちがいます。", romaji: "Kuni ni yotte bunka ga chigaimasu.", tip: "Shows variation or difference based on the noun." },
      { id: 2, english: "Depending on the person, opinions are different.", japanese: "人によって意見が異なります。", kana: "ひとによっていけんがことなります。", romaji: "Hito ni yotte iken ga kotonarimasu.", tip: "Variation among individuals." },
      { id: 3, english: "The price changes depending on the season.", japanese: "季節によって値段が変わります。", kana: "きせつによってねだんがかわります。", romaji: "Kisetsu ni yotte nedan ga kawarimasu.", tip: "Change due to an external factor." },
      { id: 4, english: "Greeting differs depending on the time.", japanese: "時間によって挨拶が違う。", kana: "じかんによってあいさつがちがう。", romaji: "Jikan ni yotte aisatsu ga chigau.", tip: "Noun." },
      { id: 5, english: "It was discovered by him.", japanese: "彼によって発見されました。", kana: "かれによってはっけんされました。", romaji: "Kare ni yotte hakken saremashita.", tip: "Can also mean 'by' in passive sentences." }
    ]
  },
  "～に対して (towards/contrasting)": {
    usage: "Noun + に対して",
    exercises: [
      { id: 1, english: "He is strict towards students.", japanese: "彼は学生に対して厳しいです。", kana: "かれはがくせいにたいしてきびしいです。", romaji: "Kare wa gakusei ni taishite kibishii desu.", tip: "Attitude directed toward a target." },
      { id: 2, english: "My brother is quiet, whereas I talk a lot.", japanese: "兄が静かなのに対して、私はよく話します。", kana: "あにがしずかなのにたいして、わたしはよくはなします。", romaji: "Ani ga shizuka na no ni taishite, watashi wa yoku hanashimasu.", tip: "Contrasting two situations." },
      { id: 3, english: "Questions directed to the teacher.", japanese: "先生に対する質問。", kana: "せんせいにたいするしつもん。", romaji: "Sensei ni taisuru shitsumon.", tip: "Modifying a noun requires に対する." },
      { id: 4, english: "She is kind to everyone.", japanese: "彼女は誰に対しても親切です。", kana: "かのじょはだれにたいしてもしんせつです。", romaji: "Kanojo wa dare ni taishite mo shinsetsu desu.", tip: "Target of action." },
      { id: 5, english: "Sales increased compared to last year.", japanese: "去年にたいして売り上げが増えた。", kana: "きょねんにたいしてうりあげがふえた。", romaji: "Kyonen ni taishite uriage ga fueta.", tip: "Comparison context." }
    ]
  },
  "～から見ると (from the perspective of…)": {
    usage: "Noun + から見ると / から見れば",
    exercises: [
      { id: 1, english: "From the perspective of a child, it is big.", japanese: "子供から見ると、それは大きいです。", kana: "こどもからみると、それはおおきいです。", romaji: "Kodomo kara miru to, sore wa ookii desu.", tip: "Viewing from a certain standpoint." },
      { id: 2, english: "From a foreigner's perspective, Japanese is hard.", japanese: "外国人から見れば、日本語は難しい。", kana: "がいこくじんからみれば、にほんごはむずかしい。", romaji: "Gaikokujin kara mireba, nihongo wa muzukashii.", tip: "から見れば means the same thing." },
      { id: 3, english: "From the data, the economy is recovering.", japanese: "データから見ると、経済は回復しています。", kana: "でーたからみると、けいざいはかいふくしています。", romaji: "Deeta kara miru to, keizai wa kaifuku shite imasu.", tip: "Based on objective information." },
      { id: 4, english: "From the teacher's perspective, it's easy.", japanese: "先生から見ると、簡単でしょう。", kana: "せんせいからみると、かんたんでしょう。", romaji: "Sensei kara miru to, kantan deshou.", tip: "Predicting someone's thought." },
      { id: 5, english: "From the past records, it's clear.", japanese: "過去の記録から見ると明らかです。", kana: "かこのきろくからみるとあきらかです。", romaji: "Kako no kiroku kara miru to akiraka desu.", tip: "Judging from evidence." }
    ]
  },
  "おもに (mainly/primarily)": {
    usage: "Adverb おもに + Sentence",
    exercises: [
      { id: 1, english: "I mainly study at night.", japanese: "おもに夜勉強します。", kana: "おもに夜勉強します。", romaji: "Omo ni yoru benkyou shimasu.", tip: "Indicates the primary time." },
      { id: 2, english: "This class is mainly for beginners.", japanese: "このクラスはおもに初心者向けです。", kana: "このくらすはおもにしょしんしゃむけです。", romaji: "Kono kurasu wa omo ni shoshinsha muke desu.", tip: "Indicates target." },
      { id: 3, english: "I mainly eat vegetables.", japanese: "おもに野菜を食べます。", kana: "おもにやさいをたべます。", romaji: "Omo ni yasai o tabemasu.", tip: "Indicates majority of habit." },
      { id: 4, english: "The problem is mainly the cost.", japanese: "問題はおもに費用です。", kana: "もんだいはおもにひようです。", romaji: "Mondai wa omo ni hiyou desu.", tip: "Core reason." },
      { id: 5, english: "Our customers are mainly students.", japanese: "お客さんはおもに学生です。", kana: "おきゃくさんはおもにがくせいです。", romaji: "Okyakusan wa omo ni gakusei desu.", tip: "Majority demographic." }
    ]
  },

  // Idiomatic / Natural Expressions
  "～ことが多い (often happens)": {
    usage: "Verb (dictionary/nai form) + ことが多い",
    exercises: [
      { id: 1, english: "It often happens that it rains in the afternoon.", japanese: "午後は雨が降ることが多いです。", kana: "ごごはあめがふることがおおいです。", romaji: "Gogo wa ame ga furu koto ga ooi desu.", tip: "Expresses frequency of an occurrence." },
      { id: 2, english: "I often eat bread for breakfast.", japanese: "朝ごはんはパンを食べることが多いです。", kana: "あさごはんはぱんをたべることがおおいです。", romaji: "Asagohan wa pan o taberu koto ga ooi desu.", tip: "Describes a common personal habit." },
      { id: 3, english: "I don't often watch TV.", japanese: "テレビを見ないことが多いです。", kana: "てれびをみないことがおおいです。", romaji: "Terebi o minai koto ga ooi desu.", tip: "With negative verbs, means 'often do not'." },
      { id: 4, english: "He often forgets things.", japanese: "彼は忘れることが多いです。", kana: "かれはわすれることがおおいです。", romaji: "Kare wa wasureru koto ga ooi desu.", tip: "Habitual action." },
      { id: 5, english: "I often sleep late on weekends.", japanese: "週末は遅く起きることが多い。", kana: "しゅうまつはおそくおきることがおおい。", romaji: "Shuumatsu wa osoku okiru koto ga ooi.", tip: "Dictionary form." }
    ]
  },
  "～ような気がする (have a feeling that)": {
    usage: "Plain form / Noun (+の/な) + ような気がする",
    exercises: [
      { id: 1, english: "I have a feeling he won't come.", japanese: "彼は来ないような気がします。", kana: "かれはこないようなきがします。", romaji: "Kare wa konai you na ki ga shimasu.", tip: "A subjective intuition or hunch." },
      { id: 2, english: "I feel like I've seen this before.", japanese: "これを見たような気がします。", kana: "これをみたようなきがします。", romaji: "Kore o mita you na ki ga shimasu.", tip: "Ta-form verb." },
      { id: 3, english: "I have a feeling it will be expensive.", japanese: "高いような気がします。", kana: "たかいようなきがします。", romaji: "Takai you na ki ga shimasu.", tip: "I-adj connects directly." },
      { id: 4, english: "I feel like it's a lie.", japanese: "うそのような気がする。", kana: "うそのようなきがする。", romaji: "Uso no you na ki ga suru.", tip: "Noun + の." },
      { id: 5, english: "I feel like it was quiet.", japanese: "静かだったような気がする。", kana: "しずかだったようなきがする。", romaji: "Shizuka datta you na ki ga suru.", tip: "Na-adj past." }
    ]
  },
  "～と言われている (it is said that)": {
    usage: "Plain form + と言われている",
    exercises: [
      { id: 1, english: "It is said that Japanese is difficult.", japanese: "日本語は難しいと言われています。", kana: "にほんごはむずかしいといわれています。", romaji: "Nihongo wa muzukashii to iwarete imasu.", tip: "General belief or rumor." },
      { id: 2, english: "It is said that this tea is good for health.", japanese: "このお茶は体にいいと言われています。", kana: "このおちゃはからだにいいといわれています。", romaji: "Kono ocha wa karada ni ii to iwarete imasu.", tip: "Commonly held knowledge." },
      { id: 3, english: "He is said to be a genius.", japanese: "彼は天才だと言われています。", kana: "かれはてんさいだといわれています。", romaji: "Kare wa tensai da to iwarete imasu.", tip: "Noun + だ." },
      { id: 4, english: "It's said that prices will go up.", japanese: "値段が上がると言われています。", kana: "ねだんがあがるといわれています。", romaji: "Nedan ga agaru to iwarete imasu.", tip: "Future trend." },
      { id: 5, english: "It is said there are many accidents here.", japanese: "ここは事故が多いと言われている。", kana: "ここはじこがおおいといわれている。", romaji: "Koko wa jiko ga ooi to iwarete iru.", tip: "I-adj." }
    ]
  },
  "～てばかりいる (doing nothing but...)": {
    usage: "Verb (te-form) + ばかりいる",
    exercises: [
      { id: 1, english: "He is doing nothing but playing games.", japanese: "彼はゲームをしてばかりいます。", kana: "かれはげーむをしてばかりいます。", romaji: "Kare wa geemu o shite bakari imasu.", tip: "Often carries a critical or negative tone." },
      { id: 2, english: "You shouldn't just be sleeping.", japanese: "寝てばかりいてはいけません。", kana: "ねてばかりいてはいけません。", romaji: "Nete bakari ite wa ikemasen.", tip: "Advice against an excessive habit." },
      { id: 3, english: "She is doing nothing but crying.", japanese: "彼女は泣いてばかりいる。", kana: "かのじょはないてばかりいる。", romaji: "Kanojo wa naite bakari iru.", tip: "Focuses on the repetition of an action." },
      { id: 4, english: "Stop just drinking alcohol.", japanese: "お酒を飲んでばかりいないで。", kana: "おさけをのんでばかりいないで。", romaji: "Osake o nonde bakari inai de.", tip: "Negative command." },
      { id: 5, english: "He is always playing around.", japanese: "彼は遊んでばかりいる。", kana: "かれはあそんでばかりいる。", romaji: "Kare wa asonde bakari iru.", tip: "Casual form." }
    ]
  },

  // Advanced Phrasing
  "～ば～ほど (the more… the more)": {
    usage: "Verb(ba form) + Verb(dict) + ほど / Adj(kereba) + Adj(i) + ほど",
    exercises: [
      { id: 1, english: "The more I study, the more interesting it gets.", japanese: "勉強すれば勉強するほど、面白くなります。", kana: "べんきょうすればべんきょうするほど、おもしろくなります。", romaji: "Benkyou sureba benkyou suru hodo, omoshiroku narimasu.", tip: "The verb is repeated in ba-form and dictionary form." },
      { id: 2, english: "The cheaper it is, the better.", japanese: "安ければ安いほどいいです。", kana: "やすければやすいほどいいです。", romaji: "Yasukereba yasui hodo ii desu.", tip: "I-adjectives repeat the stem." },
      { id: 3, english: "The more you read, the more you understand.", japanese: "読めば読むほど、わかります。", kana: "よめばよむほど、わかります。", romaji: "Yomeba yomu hodo, wakarimasu.", tip: "Verb 読む becomes 読めば 読むほど." },
      { id: 4, english: "The more convenient, the better.", japanese: "便利なら便利なほどいいです。", kana: "べんりならべんりなほどいいです。", romaji: "Benri nara benri na hodo ii desu.", tip: "Na-adj uses なら." },
      { id: 5, english: "The more I practice, the better I get.", japanese: "練習すれば練習するほど、上手になります。", kana: "れんしゅうすればれんしゅうするほど、じょうずになります。", romaji: "Renshuu sureba renshuu suru hodo, jouzu ni narimasu.", tip: "Group 3 verb する." }
    ]
  },
  "と言っても過言ではない (it's no exaggeration to say that)": {
    usage: "Sentence + と言っても過言ではない",
    exercises: [
      { id: 1, english: "It's no exaggeration to say it's the best.", japanese: "一番いいと言っても過言ではありません。", kana: "いちばんいいといってもかごんではありません。", romaji: "Ichiban ii to itte mo kagon dewa arimasen.", tip: "Emphasizes a strong point." },
      { id: 2, english: "It's no exaggeration to say everyone knows it.", japanese: "誰もが知っていると言っても過言ではない。", kana: "だれもがしっているといってもかごんではない。", romaji: "Daremo ga shitte iru to itte mo kagon dewa nai.", tip: "Common phrasing in essays." },
      { id: 3, english: "It's no exaggeration to say it's perfect.", japanese: "完璧だと言っても過言ではない。", kana: "かんぺきだといってもかごんではない。", romaji: "Kanpeki da to itte mo kagon dewa nai.", tip: "Noun + だ." },
      { id: 4, english: "It's no exaggeration to call him a genius.", japanese: "彼は天才と言っても過言ではない。", kana: "かれはてんさいといってもかごんではない。", romaji: "Kare wa tensai to itte mo kagon dewa nai.", tip: "Strong praise." },
      { id: 5, english: "It's no exaggeration to say it changed my life.", japanese: "人生が変わったと言っても過言ではない。", kana: "じんせいがかわったといってもかごんではない。", romaji: "Jinsei ga kawatta to itte mo kagon dewa nai.", tip: "Verb ta-form." }
    ]
  },
  "～ことで、…できる (by doing…, one can…)": {
    usage: "Verb (dictionary form) + ことで + Potential result",
    exercises: [
      { id: 1, english: "By reading this book, you can understand Japanese history.", japanese: "この本を読むことで、日本の歴史がわかります。", kana: "このほんをよむことで、にほんのれきしがわかります。", romaji: "Kono hon o yomu koto de, nihon no rekishi ga wakarimasu.", tip: "Expresses means or method to achieve a result." },
      { id: 2, english: "By practicing every day, you can become good.", japanese: "毎日練習することで、上手になります。", kana: "まいにちれんしゅうすることで、じょうずになります。", romaji: "Mainichi renshuu suru koto de, jouzu ni narimasu.", tip: "Focuses on action as a tool." },
      { id: 3, english: "By waking up early, time can be used effectively.", japanese: "早く起きることで、時間を有効に使えます。", kana: "はやくおきることで、じかんをゆうこうにつかえます。", romaji: "Hayaku okiru koto de, jikan o yuukou ni tsukaemasu.", tip: "Formal and logical." },
      { id: 4, english: "By using the internet, we can learn anything.", japanese: "ネットを使うことで、何でも学べます。", kana: "ねっとをつかうことで、なんでもまなべます。", romaji: "Netto o tsukau koto de, nandemo manabemasu.", tip: "Action -> Result." },
      { id: 5, english: "By talking, we can solve the problem.", japanese: "話すことで、問題が解決できます。", kana: "はなすことで、もんだいがかいけつできます。", romaji: "Hanasu koto de, mondai ga kaiketsu dekimasu.", tip: "Solution-focused." }
    ]
  }
};
