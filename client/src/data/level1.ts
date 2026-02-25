import { GrammarData } from './types';

export const level1Questions: Record<string, GrammarData> = {
  // Basic Actions & Requests
  "～ましょう (let’s)": {
    usage: "Verb (stem) + ましょう",
    exercises: [
      { id: 1, english: "Let's eat lunch together.", japanese: "一緒にお昼ご飯を食べましょう。", kana: "いっしょにおひるごはんをたべましょう。", romaji: "Issho ni ohirugohan o tabemashou.", tip: "Polite suggestion to do something together." },
      { id: 2, english: "Let's go to the park tomorrow.", japanese: "明日、公園に行きましょう。", kana: "あした、こうえんにいきましょう。", romaji: "Ashita, kouen ni ikimashou.", tip: "Stem of 行く (iki) + ましょう." },
      { id: 3, english: "Let's rest a little.", japanese: "少し休みましょう。", kana: "すこしやすみましょう。", romaji: "Sukoshi yasumimashou.", tip: "Suggesting a break." },
      { id: 4, english: "Let's drink tea.", japanese: "お茶を飲みましょう。", kana: "おちゃをのみましょう。", romaji: "Ocha o nomimashou.", tip: "Stem of 飲む (nomi) + ましょう." },
      { id: 5, english: "Let's study Japanese.", japanese: "日本語を勉強しましょう。", kana: "にほんごをべんきょうしましょう。", romaji: "Nihongo o benkyou shimashou.", tip: "Stem of 勉強する is 勉強し." }
    ]
  },
  "～てください (please do)": {
    usage: "Verb (te-form) + ください",
    exercises: [
      { id: 1, english: "Please write your name here.", japanese: "ここに名前を書いてください。", kana: "ここになまえをかいてください。", romaji: "Koko ni namae o kaite kudasai.", tip: "Polite request." },
      { id: 2, english: "Please read this book.", japanese: "この本を読んでください。", kana: "このほんをよんでください。", romaji: "Kono hon o yonde kudasai.", tip: "Te-form of 読む is 読んで." },
      { id: 3, english: "Please listen to the teacher.", japanese: "先生の話を聞いてください。", kana: "せんせいのはなしをきいてください。", romaji: "Sensei no hanashi o kiite kudasai.", tip: "Asking someone to pay attention." },
      { id: 4, english: "Please wait a moment.", japanese: "ちょっと待ってください。", kana: "ちょっとまってください。", romaji: "Chotto matte kudasai.", tip: "Te-form of 待つ is 待って." },
      { id: 5, english: "Please open the window.", japanese: "窓を開けてください。", kana: "まどをあけてください。", romaji: "Mado o akete kudasai.", tip: "Te-form of 開ける is 開けて." }
    ]
  },
  "～ている (ongoing action/state)": {
    usage: "Verb (te-form) + いる/います",
    exercises: [
      { id: 1, english: "I am reading a book now.", japanese: "今、本を読んでいます。", kana: "いま、ほんをよんでいます。", romaji: "Ima, hon o yonde imasu.", tip: "Indicates an action currently in progress." },
      { id: 2, english: "It is raining outside.", japanese: "外は雨が降っています。", kana: "そとはあめがふっています。", romaji: "Soto wa ame ga futte imasu.", tip: "Ongoing state of weather." },
      { id: 3, english: "I live in Tokyo.", japanese: "私は京都に住んでいます。", kana: "わたしはきょうとにすんでいます。", romaji: "Watashi wa kyouto ni sunde imasu.", tip: "Indicates a continuing state (living somewhere)." },
      { id: 4, english: "Do you know Mr. Tanaka?", japanese: "田中さんを知っていますか。", kana: "たなかさんをしっていますか。", romaji: "Tanaka-san o shitte imasu ka.", tip: "Knowing someone is a continuous state." },
      { id: 5, english: "My father is working right now.", japanese: "父は今働いています。", kana: "ちちはいまはたらいています。", romaji: "Chichi wa ima hataraite imasu.", tip: "Action in progress." }
    ]
  },

  // Time & Sequence
  "～とき (when...)": {
    usage: "Plain verb / I-adj / Na-adj (+な) / Noun (+の) + とき",
    exercises: [
      { id: 1, english: "When I was a child, I played outside.", japanese: "子供のとき、外で遊びました。", kana: "こどものとき、そとであそびました。", romaji: "Kodomo no toki, soto de asobimashita.", tip: "Noun + の + とき." },
      { id: 2, english: "When I go to Japan, I will buy a camera.", japanese: "日本へ行くとき、カメラを買います。", kana: "にほんへいくとき、かめらをかいます。", romaji: "Nihon e iku toki, kamera o kaimasu.", tip: "Dictionary form + とき (action hasn't happened yet)." },
      { id: 3, english: "When it's quiet, I study.", japanese: "静かなとき、勉強します。", kana: "しずかなとき、べんきょうします。", romaji: "Shizuka na toki, benkyou shimasu.", tip: "Na-adjective requires な." },
      { id: 4, english: "When I am busy, I don't watch TV.", japanese: "忙しいとき、テレビを見ません。", kana: "いそがしいとき、てれびをみません。", romaji: "Isogashii toki, terebi o mimasen.", tip: "I-adjective directly connects to とき." },
      { id: 5, english: "When I eat, I watch TV.", japanese: "食べるとき、テレビを見ます。", kana: "たべるとき、てれびをみます。", romaji: "Taberu toki, terebi o mimasu.", tip: "Dictionary form before an ongoing habit." }
    ]
  },
  "～前に (before...)": {
    usage: "Verb (dictionary form) / Noun (+の) + 前に",
    exercises: [
      { id: 1, english: "I wash my hands before eating.", japanese: "食べる前に、手を洗います。", kana: "たべるまえに、てをあらいます。", romaji: "Taberu mae ni, te o araimasu.", tip: "Verb dictionary form + 前に." },
      { id: 2, english: "I will study before the test.", japanese: "テストの前に、勉強します。", kana: "てすとのまえに、べんきょうします。", romaji: "Tesuto no mae ni, benkyou shimasu.", tip: "Noun + の + 前に." },
      { id: 3, english: "I bought a ticket before going to the movie.", japanese: "映画に行く前に、チケットを買いました。", kana: "えいがにいくまえに、ちけっとをかいました。", romaji: "Eiga ni iku mae ni, chiketto o kaimashita.", tip: "The verb before 前に is always in present/dictionary form." },
      { id: 4, english: "Let's go home before it gets dark.", japanese: "暗くなる前に、帰りましょう。", kana: "くらくなるまえに、かえりましょう。", romaji: "Kuraku naru mae ni, kaerimashou.", tip: "Dictionary form indicates the action hasn't happened yet." },
      { id: 5, english: "Please call before you come.", japanese: "来る前に、電話してください。", kana: "くるまえに、でんわしてください。", romaji: "Kuru mae ni, denwa shite kudasai.", tip: "Polite request for an action before another." }
    ]
  },
  "～てから (after)": {
    usage: "Verb (te-form) + から",
    exercises: [
      { id: 1, english: "After I wash my hands, I will eat.", japanese: "手を洗ってから、食べます。", kana: "てをあらってから、たべます。", romaji: "Te o aratte kara, tabemasu.", tip: "Focuses on the sequence of actions." },
      { id: 2, english: "After finishing work, I will go home.", japanese: "仕事が終わってから、帰ります。", kana: "しごとがおわってから、かえります。", romaji: "Shigoto ga owatte kara, kaerimasu.", tip: "Action 1 must complete before Action 2." },
      { id: 3, english: "Let's decide after thinking about it.", japanese: "考えてから決めましょう。", kana: "かんがえてからきめましょう。", romaji: "Kangaete kara kimemashou.", tip: "Te-form of 考える is 考えて." },
      { id: 4, english: "After I read the book, I went to sleep.", japanese: "本を読んでから、寝ました。", kana: "ほんをよんでから、ねました。", romaji: "Hon o yonde kara, nemashita.", tip: "Past tense goes at the end of the sentence." },
      { id: 5, english: "Please speak after listening.", japanese: "聞いてから話してください。", kana: "きいてからはなしてください。", romaji: "Kiite kara hanashite kudasai.", tip: "Sequence command." }
    ]
  },
  "～た後で (after doing…)": {
    usage: "Verb (ta-form) / Noun (+の) + 後で (あとで)",
    exercises: [
      { id: 1, english: "I will study after eating dinner.", japanese: "晩ご飯を食べた後で、勉強します。", kana: "ばんごはんをたべたあとで、べんきょうします。", romaji: "Bangohan o tabeta ato de, benkyou shimasu.", tip: "Ta-form verb + 後で." },
      { id: 2, english: "After the movie, let's go drink tea.", japanese: "映画の後で、お茶を飲みに行きましょう。", kana: "えいがのあとで、おちゃをのみにいきましょう。", romaji: "Eiga no ato de, ocha o nomi ni ikimashou.", tip: "Noun + の + 後で." },
      { id: 3, english: "I bought a shirt after reading the magazine.", japanese: "雑誌を読んだ後で、シャツを買いました。", kana: "ざっしをよんだあとで、しゃつをかいました。", romaji: "Zasshi o yonda ato de, shatsu o kaimashita.", tip: "Past action." },
      { id: 4, english: "Let's play tennis after class.", japanese: "授業の後で、テニスをしましょう。", kana: "じゅぎょうのあとで、てにすをしましょう。", romaji: "Jugyou no ato de, tenisu o shimashou.", tip: "Noun class." },
      { id: 5, english: "I went home after I met my friend.", japanese: "友達に会った後で、帰りました。", kana: "ともだちにあったあとで、かえりました。", romaji: "Tomodachi ni atta ato de, kaerimashita.", tip: "Meeting someone uses particle に." }
    ]
  },
  "～ながら (while)": {
    usage: "Verb (stem) + ながら",
    exercises: [
      { id: 1, english: "I watch TV while eating dinner.", japanese: "晩ご飯を食べながら、テレビを見ます。", kana: "ばんごはんをたべながら、てれびをみます。", romaji: "Bangohan o tabenagara, terebi o mimasu.", tip: "The main action comes last (watching TV)." },
      { id: 2, english: "I listen to music while studying.", japanese: "音楽を聞きながら、勉強します。", kana: "おんがくをききながら、べんきょうします。", romaji: "Ongaku o kikinagara, benkyou shimasu.", tip: "Stem of 聞く is 聞き." },
      { id: 3, english: "Let's talk while drinking tea.", japanese: "お茶を飲みながら、話しましょう。", kana: "おちゃをのみながら、はなしましょう。", romaji: "Ocha o nominagara, hanashimashou.", tip: "Polite suggestion while doing something else." },
      { id: 4, english: "I work while going to school.", japanese: "学校に行きながら、働いています。", kana: "がっこうにいきながら、はたらいています。", romaji: "Gakkou ni ikinagara, hataraite imasu.", tip: "Can be used for broader life habits." },
      { id: 5, english: "He drives while singing.", japanese: "彼は歌いながら、運転します。", kana: "かれはうたいながら、うんてんします。", romaji: "Kare wa utainagara, unten shimasu.", tip: "Stem of 歌う is 歌い." }
    ]
  },

  // Reason, Purpose & Conjunctions
  "～から (because - subjective)": {
    usage: "Reason + から, Result",
    exercises: [
      { id: 1, english: "Because I have no money, I can't buy it.", japanese: "お金がないから、買えません。", kana: "おかねがないから、かえません。", romaji: "Okane ga nai kara, kaemasen.", tip: "Subjective reason. Can follow polite or plain form." },
      { id: 2, english: "Because it's hot, I will open the window.", japanese: "暑いから、窓を開けます。", kana: "あついから、まどをあけます。", romaji: "Atsui kara, mado o akemasu.", tip: "I-adjective + から." },
      { id: 3, english: "Because I am a student, I study every day.", japanese: "学生ですから、毎日勉強します。", kana: "がくせいだから、まいにちべんきょうします。", romaji: "Gakusei desu kara, mainichi benkyou shimasu.", tip: "Noun + だ/です + から." },
      { id: 4, english: "I'm busy today, so I won't go.", japanese: "今日は忙しいから、行きません。", kana: "きょうはいそがしいから、いきません。", romaji: "Kyou wa isogashii kara, ikimasen.", tip: "Reason comes first in Japanese." },
      { id: 5, english: "I like meat, so I eat it often.", japanese: "肉が好きだから、よく食べます。", kana: "にくがすきだから、よくたべます。", romaji: "Niku ga suki dakara, yoku tabemasu.", tip: "Na-adjective requires だ before から." }
    ]
  },
  "～ので (because - objective)": {
    usage: "Plain form / Noun (+な) / Na-adj (+な) + ので",
    exercises: [
      { id: 1, english: "Because it is raining, I won't go out.", japanese: "雨が降っているので、出かけません。", kana: "あめがふっているので、でかけません。", romaji: "Ame ga futte iru node, dekakemasen.", tip: "Objective reason, softer than から." },
      { id: 2, english: "Since I have a cold, I will rest.", japanese: "風邪なので、休みます。", kana: "かぜなので、やすみます。", romaji: "Kaze na node, yasumimasu.", tip: "Noun + なので." },
      { id: 3, english: "Since it is quiet, it is good.", japanese: "静かなので、いいです。", kana: "しずかなので、いいです。", romaji: "Shizuka na node, ii desu.", tip: "Na-adj + なので." },
      { id: 4, english: "Because I didn't have time, I didn't eat.", japanese: "時間がなかったので、食べませんでした。", kana: "じかんがなかったので、たべませんでした。", romaji: "Jikan ga nakatta node, tabemasen deshita.", tip: "Past plain form." },
      { id: 5, english: "Since it is expensive, I can't buy it.", japanese: "高いので、買えません。", kana: "たかいので、かえません。", romaji: "Takai node, kaemasen.", tip: "I-adj + ので." }
    ]
  },
  "～が (but)": {
    usage: "Clause 1 + が, Clause 2",
    exercises: [
      { id: 1, english: "Japanese is difficult, but it's interesting.", japanese: "日本語は難しいですが、面白いです。", kana: "にほんごはむずかしいですが、おもしろいです。", romaji: "Nihongo wa muzukashii desu ga, omoshiroi desu.", tip: "Connects two contrasting polite sentences." },
      { id: 2, english: "I bought it, but I didn't use it.", japanese: "買いましたが、使いませんでした。", kana: "かいましたが、つかいませんでした。", romaji: "Kaimashita ga, tsukaimasen deshita.", tip: "Contrasting actions." },
      { id: 3, english: "It's small, but it's expensive.", japanese: "小さいですが、高いです。", kana: "ちいさいですが、たかいです。", romaji: "Chiisai desu ga, takai desu.", tip: "Contrasting adjectives." },
      { id: 4, english: "I like meat, but I don't like fish.", japanese: "肉は好きですが、魚は好きじゃないです。", kana: "にくはすきですが、さかなはすきじゃないです。", romaji: "Niku wa suki desu ga, sakana wa suki janai desu.", tip: "Contrasting preferences." },
      { id: 5, english: "I went, but nobody was there.", japanese: "行きましたが、誰もいませんでした。", kana: "いきましたが、だれもいませんでした。", romaji: "Ikimashita ga, dare mo imasen deshita.", tip: "Expectation vs reality." }
    ]
  },
  "～けど／けれど／けれども (but - casual/polite)": {
    usage: "Plain form / Polite form + けど",
    exercises: [
      { id: 1, english: "I want to go, but I have no money.", japanese: "行きたいけど、お金がありません。", kana: "いきたいけど、おかねがありません。", romaji: "Ikitai kedo, okane ga arimasen.", tip: "Casual spoken version of が." },
      { id: 2, english: "It's cheap, but it's not delicious.", japanese: "安いけど、おいしくないです。", kana: "やすいけど、おいしくないです。", romaji: "Yasui kedo, oishikunai desu.", tip: "I-adj + けど." },
      { id: 3, english: "I'm a student, but I work a lot.", japanese: "学生だけど、よく働きます。", kana: "がくせいだけど、よくはたらきます。", romaji: "Gakusei da kedo, yoku hatarakimasu.", tip: "Noun + だ + けど." },
      { id: 4, english: "I called, but he didn't answer.", japanese: "電話したけれど、出ませんでした。", kana: "でんわしたけれど、でませんでした。", romaji: "Denwa shita keredo, demasen deshita.", tip: "けれど is slightly more polite than けど." },
      { id: 5, english: "It is quiet, but it is far.", japanese: "静かだけれども、遠いです。", kana: "しずかだけれども、とおいです。", romaji: "Shizuka da keredomo, tooi desu.", tip: "けれども is the most formal of the three." }
    ]
  },
  "～ても／でも (even if)": {
    usage: "Verb (te-form) + も / Noun/Na-adj + でも / I-adj (drop i) + くても",
    exercises: [
      { id: 1, english: "Even if it rains, I will go.", japanese: "雨が降っても、行きます。", kana: "あめがふっても、いきます。", romaji: "Ame ga futte mo, ikimasu.", tip: "Verb te-form + も." },
      { id: 2, english: "Even if it is expensive, I will buy it.", japanese: "高くても、買います。", kana: "たかくても、かいます。", romaji: "Takakute mo, kaimasu.", tip: "I-adj drops i + くても." },
      { id: 3, english: "Even if it's Sunday, I work.", japanese: "日曜日でも、働きます。", kana: "にちようびでも、はたらきます。", romaji: "Nichiyoubi demo, hatarakimasu.", tip: "Noun + でも." },
      { id: 4, english: "Even if it's quiet, I can't sleep.", japanese: "静かでも、寝られません。", kana: "しずかでも、ねられません。", romaji: "Shizuka demo, neraremasen.", tip: "Na-adj drops na + でも." },
      { id: 5, english: "Even if I think about it, I don't understand.", japanese: "考えても、わかりません。", kana: "かんがえても、わかりません。", romaji: "Kangaete mo, wakarimasen.", tip: "Action without the expected result." }
    ]
  },
  "Place へ Verb Stem に行く・来る (purpose)": {
    usage: "Destination へ + Verb (stem) / Noun + に行く/来る",
    exercises: [
      { id: 1, english: "I went to town to buy clothes.", japanese: "町へ服を買いに行きました。", kana: "まちへふくをかいにいきました。", romaji: "Machi e fuku o kai ni ikimashita.", tip: "買い is the stem of 買う." },
      { id: 2, english: "He came to Japan to study.", japanese: "彼は日本へ勉強に来ました。", kana: "かれはにほんへべんきょうにきました。", romaji: "Kare wa Nihon e benkyou ni kimashita.", tip: "Noun (study) + に + 来る." },
      { id: 3, english: "I am going to the library to read a book.", japanese: "図書館へ本を読みにいきます。", kana: "としょかんへほんをよみにいきます。", romaji: "Toshokan e hon o yomi ni ikimasu.", tip: "Expresses purpose of movement." },
      { id: 4, english: "I went to the park to play.", japanese: "公園へ遊びに行きました。", kana: "こうえんへあそびにいきました。", romaji: "Kouen e asobi ni ikimashita.", tip: "Stem of 遊ぶ is 遊び." },
      { id: 5, english: "My friend came to my house to eat.", japanese: "友達が家へご飯を食べに来ました。", kana: "ともだちがいえへごはんをたべにきました。", romaji: "Tomodachi ga ie e gohan o tabe ni kimashita.", tip: "Destination is 家 (house)." }
    ]
  },

  // Ability, Preference & Definition
  "～ことができる (can do)": {
    usage: "Verb (dictionary form) + ことができる",
    exercises: [
      { id: 1, english: "I can speak Japanese.", japanese: "日本語を話すことができます。", kana: "にほんごをはなすことができます。", romaji: "Nihongo o hanasu koto ga dekimasu.", tip: "Dictionary form + ことができる expresses ability." },
      { id: 2, english: "I can't eat natto.", japanese: "納豆を食べることができません。", kana: "なっとうをたべることができません。", romaji: "Nattou o taberu koto ga dekimasen.", tip: "Negative form: ことができません." },
      { id: 3, english: "Can you ride a bicycle?", japanese: "自転車に乗ることができますか。", kana: "じてんしゃにのることができますか。", romaji: "Jitensha ni noru koto ga dekimasu ka.", tip: "Dictionary form of 乗る (to ride)." },
      { id: 4, english: "I can write 100 kanji.", japanese: "漢字を百書くことができます。", kana: "かんじをひゃくかくことができます。", romaji: "Kanji o hyaku kaku koto ga dekimasu.", tip: "Ability with a quantity." },
      { id: 5, english: "I couldn't sleep yesterday.", japanese: "昨日は寝ることができませんでした。", kana: "きのうはねることができませんでした。", romaji: "Kinou wa neru koto ga dekimasen deshita.", tip: "Past negative." }
    ]
  },
  "～ことが好き／きらい／上手／下手 だ": {
    usage: "Noun + が + 好き/嫌い/上手/下手",
    exercises: [
      { id: 1, english: "I like dogs.", japanese: "私は犬が好きです。", kana: "わたしはいぬがすきです。", romaji: "Watashi wa inu ga suki desu.", tip: "Use the particle が with 好き." },
      { id: 2, english: "He is good at tennis.", japanese: "彼はテニスが上手です。", kana: "かれはてにすがじょうずです。", romaji: "Kare wa tenisu ga jouzu desu.", tip: "Use the particle が with 上手 (good at)." },
      { id: 3, english: "I dislike fish.", japanese: "私は魚が嫌いです。", kana: "わたしはさかながきらいです。", romaji: "Watashi wa sakana ga kirai desu.", tip: "嫌い (kirai) means to dislike." },
      { id: 4, english: "My mother is bad at singing.", japanese: "母は歌が下手です。", kana: "はははうたがへたです。", romaji: "Haha wa uta ga heta desu.", tip: "下手 (heta) means bad at." },
      { id: 5, english: "I don't like vegetables very much.", japanese: "野菜はあまり好きじゃありません。", kana: "やさいはあまりすきじゃありません。", romaji: "Yasai wa amari suki ja arimasen.", tip: "Negative preference." }
    ]
  },
  "～について (about)": {
    usage: "Noun + について",
    exercises: [
      { id: 1, english: "I wrote a report about Japan.", japanese: "日本についてレポートを書きました。", kana: "にほんについてれぽーとをかきました。", romaji: "Nihon ni tsuite repooto o kakimashita.", tip: "Denotes the subject matter." },
      { id: 2, english: "Let's think about this problem.", japanese: "この問題について考えましょう。", kana: "このもんだいについてかんがえましょう。", romaji: "Kono mondai ni tsuite kangaemashou.", tip: "Frequently used with verbs like think, talk, write." },
      { id: 3, english: "I want to ask about the test.", japanese: "テストについて聞きたいです。", kana: "てすとについてききたいです。", romaji: "Tesuto ni tsuite kikitai desu.", tip: "Asking a question regarding a topic." },
      { id: 4, english: "He talked about his family.", japanese: "彼は家族について話しました。", kana: "かれはかぞくについてはなしました。", romaji: "Kare wa kazoku ni tsuite hanashimashita.", tip: "Speaking about something." },
      { id: 5, english: "This is a book about history.", japanese: "これは歴史についての本です。", kana: "これはれきしについてのほんです。", romaji: "Kore wa rekishi ni tsuite no hon desu.", tip: "When modifying a noun, use についての." }
    ]
  },
  "～という (called/that says)": {
    usage: "Name/Phrase + という + Noun",
    exercises: [
      { id: 1, english: "There is a restaurant called 'Sakura'.", japanese: "さくらというレストランがあります。", kana: "さくらというれすとらんがあります。", romaji: "Sakura to iu resutoran ga arimasu.", tip: "Naming a specific place or thing." },
      { id: 2, english: "Do you know a person called Mr. Tanaka?", japanese: "田中さんという人を知っていますか。", kana: "たなかさんというひとをしっていますか。", romaji: "Tanaka-san to iu hito o shitte imasu ka.", tip: "Referring to a person." },
      { id: 3, english: "I read a book called 'Kokoro'.", japanese: "こころという本を読みました。", kana: "こころというほんをよみました。", romaji: "Kokoro to iu hon o yomimashita.", tip: "Naming a book." },
      { id: 4, english: "What is this thing called in Japanese?", japanese: "これは日本語で何という物ですか。", kana: "これはにほんごでなんというものですか。", romaji: "Kore wa nihongo de nan to iu mono desu ka.", tip: "Asking for a name." },
      { id: 5, english: "There is a dog called Pochi.", japanese: "ポチという犬がいます。", kana: "ぽちといういぬがいます。", romaji: "Pochi to iu inu ga imasu.", tip: "Naming an animal." }
    ]
  },

  // Desire & Intention
  "～たい (want to do)": {
    usage: "Verb (stem) + たいです",
    exercises: [
      { id: 1, english: "I want to eat sushi.", japanese: "寿司を食べたいです。", kana: "すしをたべたいです。", romaji: "Sushi o tabetai desu.", tip: "Stem of 食べる (tabe) + たい." },
      { id: 2, english: "I don't want to go today.", japanese: "今日は行きたくないです。", kana: "きょうはいきたくないです。", romaji: "Kyou wa ikitakunai desu.", tip: "Negative of たい is たくない." },
      { id: 3, english: "I want to watch a movie.", japanese: "映画を見たいです。", kana: "えいがをみたいです。", romaji: "Eiga o mitai desu.", tip: "The particle can be を or が." },
      { id: 4, english: "I wanted to drink coffee.", japanese: "コーヒーが飲みたかったです。", kana: "こーひーがのみたかったです。", romaji: "Koohii ga nomitakatta desu.", tip: "Past tense of たい is たかった." },
      { id: 5, english: "I want to buy a new car.", japanese: "新しい車を買いたいです。", kana: "あたらしいくるまをかいたいです。", romaji: "Atarashii kuruma o kaitai desu.", tip: "Expressing desire." }
    ]
  },
  "～がほしい (want - object)": {
    usage: "Noun + が + ほしいです",
    exercises: [
      { id: 1, english: "I want a new computer.", japanese: "新しいパソコンがほしいです。", kana: "あたらしいぱそこんがほしいです。", romaji: "Atarashii pasokon ga hoshii desu.", tip: "Used for objects, not actions." },
      { id: 2, english: "I don't want anything right now.", japanese: "今は何もほしくないです。", kana: "いまはなにもほしくないです。", romaji: "Ima wa nani mo hoshikunai desu.", tip: "Negative is ほしくない." },
      { id: 3, english: "What do you want for your birthday?", japanese: "誕生日に何がほしいですか。", kana: "たんじょうびになにがほしいですか。", romaji: "Tanjoubi ni nani ga hoshii desu ka.", tip: "Asking someone what they want." },
      { id: 4, english: "I wanted a camera.", japanese: "カメラがほしかったです。", kana: "かめらがほしかったです。", romaji: "Kamera ga hoshikatta desu.", tip: "Past tense is ほしかった." },
      { id: 5, english: "I want money.", japanese: "お金がほしいです。", kana: "おかねがほしいです。", romaji: "Okane ga hoshii desu.", tip: "Basic desire." }
    ]
  },
  "～てほしい (want someone to…)": {
    usage: "Person に + Verb (te-form) + ほしいです",
    exercises: [
      { id: 1, english: "I want you to teach me Japanese.", japanese: "あなたに日本語を教えてほしいです。", kana: "あなたににほんごをおしえてほしいです。", romaji: "Anata ni nihongo o oshiete hoshii desu.", tip: "The person you want to do the action is marked with に." },
      { id: 2, english: "I want my child to study.", japanese: "子供に勉強してほしいです。", kana: "こどもにべんきょうしてほしいです。", romaji: "Kodomo ni benkyou shite hoshii desu.", tip: "Expressing a wish for someone else's action." },
      { id: 3, english: "I don't want you to go.", japanese: "行かないでほしいです。", kana: "いかないでほしいです。", romaji: "Ikanai de hoshii desu.", tip: "Negative uses nai-form + でほしい." },
      { id: 4, english: "I want him to come early.", japanese: "彼に早く来てほしいです。", kana: "かれにはやくきてほしいです。", romaji: "Kare ni hayaku kite hoshii desu.", tip: "Te-form of 来る is 来て." },
      { id: 5, english: "I wanted my mother to buy it.", japanese: "母に買ってほしかったです。", kana: "ははにかってほしかったです。", romaji: "Haha ni katte hoshikatta desu.", tip: "Past tense is ほしかった." }
    ]
  },
  "～つもりだ (intend to)": {
    usage: "Verb (dictionary form / nai form) + つもりだ",
    exercises: [
      { id: 1, english: "I intend to go to university next year.", japanese: "来年、大学に行くつもりです。", kana: "らいねん、だいがくに行くつもりです。", romaji: "Rainen, daigaku ni iku tsumori desu.", tip: "Dictionary form + つもり shows intention." },
      { id: 2, english: "I don't intend to buy a car.", japanese: "車を買わないつもりです。", kana: "くるまをかわないつもりです。", romaji: "Kuruma o kawanai tsumori desu.", tip: "Nai form + つもり means 'intend NOT to'." },
      { id: 3, english: "I intended to study, but I slept.", japanese: "勉強するつもりでしたが、寝ました。", kana: "べんきょうするつもりでしたが、ねました。", romaji: "Benkyou suru tsumori deshita ga, nemashita.", tip: "Past tense つもりでした means a past intention." },
      { id: 4, english: "I intend to stay here.", japanese: "ここにいるつもりです。", kana: "ここにいるつもりです。", romaji: "Koko ni iru tsumori desu.", tip: "Current intention." },
      { id: 5, english: "I don't intend to speak to him.", japanese: "彼と話さないつもりです。", kana: "かれとはなさないつもりです。", romaji: "Kare to hanasanai tsumori desu.", tip: "Firm negative intention." }
    ]
  },

  // Probability / Guess
  "～と思う (I think)": {
    usage: "Plain form + と思います",
    exercises: [
      { id: 1, english: "I think it will be hot tomorrow.", japanese: "明日は暑いと思います。", kana: "あしたはあついとおもいます。", romaji: "Ashita wa atsui to omoimasu.", tip: "Expressing an opinion or guess." },
      { id: 2, english: "I think Mr. Tanaka will come.", japanese: "田中さんは来ると思います。", kana: "たなかさんはくるとおもいます。", romaji: "Tanaka-san wa kuru to omoimasu.", tip: "Used with verb plain form." },
      { id: 3, english: "I don't think it is interesting.", japanese: "面白くないと思います。", kana: "おもしろくないとおもいます。", romaji: "Omoshirokunai to omoimasu.", tip: "Negative is usually applied to the adjective/verb." },
      { id: 4, english: "I think Japanese is difficult.", japanese: "日本語は難しいと思います。", kana: "にほんごはむずかしいとおもいます。", romaji: "Nihongo wa muzukashii to omoimasu.", tip: "Expressing a subjective opinion." },
      { id: 5, english: "I think she is a student.", japanese: "彼女は学生だと思います。", kana: "かのじょはがくせいだとおもいます。", romaji: "Kanojo wa gakusei da to omoimasu.", tip: "Nouns require 'da' before 'to omoimasu'." }
    ]
  },
  "～でしょう (probably)": {
    usage: "Plain form / Noun / Na-adj (without だ) + でしょう",
    exercises: [
      { id: 1, english: "It will probably rain tomorrow.", japanese: "明日は雨が降るでしょう。", kana: "あしたはあめがふるでしょう。", romaji: "Ashita wa ame ga furu deshou.", tip: "Used for predictions or probability." },
      { id: 2, english: "This book is probably interesting.", japanese: "この本は面白いでしょう。", kana: "このほんはおもしろいでしょう。", romaji: "Kono hon wa omoshiroi deshou.", tip: "I-adjective directly connects to でしょう." },
      { id: 3, english: "Mr. Tanaka is probably a student.", japanese: "田中さんは学生でしょう。", kana: "たなかさんはがくせいでしょう。", romaji: "Tanaka-san wa gakusei deshou.", tip: "Noun drops だ before でしょう." },
      { id: 4, english: "The test will probably be difficult.", japanese: "テストは難しいでしょう。", kana: "てすとはむずかしいでしょう。", romaji: "Tesuto wa muzukashii deshou.", tip: "Polite guess." },
      { id: 5, english: "It probably won't be cold tomorrow.", japanese: "明日は寒くないでしょう。", kana: "あしたはさむくないでしょう。", romaji: "Ashita wa samukunai deshou.", tip: "Negative prediction." }
    ]
  },
  "～かもしれない (maybe)": {
    usage: "Plain form / Noun / Na-adj (without だ) + かもしれません",
    exercises: [
      { id: 1, english: "It might rain tomorrow.", japanese: "明日は雨が降るかもしれません。", kana: "あしたはあめがふるかもしれません。", romaji: "Ashita wa ame ga furu kamo shiremasen.", tip: "Expresses a possibility, lower certainty than でしょう." },
      { id: 2, english: "He might not come.", japanese: "彼は来ないかもしれません。", kana: "かれはこないかもしれません。", romaji: "Kare wa konai kamo shiremasen.", tip: "Used with nai form." },
      { id: 3, english: "This might be expensive.", japanese: "これは高いかもしれません。", kana: "これはたかいかもしれません。", romaji: "Kore wa takai kamo shiremasen.", tip: "I-adj connects directly." },
      { id: 4, english: "She might be a teacher.", japanese: "彼女は先生かもしれません。", kana: "かのじょはせんせいかもしれません。", romaji: "Kanojo wa sensei kamo shiremasen.", tip: "Noun directly without だ." },
      { id: 5, english: "It might be quiet there.", japanese: "そこは静かかもしれません。", kana: "そこはしずかかもしれません。", romaji: "Soko wa shizuka kamo shiremasen.", tip: "Na-adj directly without だ." }
    ]
  },
  "～みたいだ (looks like)": {
    usage: "Plain form / Noun / Na-adj + みたいだ",
    exercises: [
      { id: 1, english: "He looks like he is sleeping.", japanese: "彼は寝ているみたいです。", kana: "かれはねているみたいです。", romaji: "Kare wa nete iru mitai desu.", tip: "Subjective guess based on appearance." },
      { id: 2, english: "It looks like a dog.", japanese: "犬みたいです。", kana: "いぬみたいです。", romaji: "Inu mitai desu.", tip: "Noun connects directly." },
      { id: 3, english: "It looks like nobody is here.", japanese: "誰もいないみたいです。", kana: "だれもいないみたいです。", romaji: "Dare mo inai mitai desu.", tip: "Used with nai form." },
      { id: 4, english: "She looks like she's fine.", japanese: "彼女は元気みたいです。", kana: "かのじょはげんきみたいです。", romaji: "Kanojo wa genki mitai desu.", tip: "Na-adj connects directly without な/だ." },
      { id: 5, english: "It looks like it will rain.", japanese: "雨が降るみたいです。", kana: "あめがふるみたいです。", romaji: "Ame ga furu mitai desu.", tip: "Guess about future state." }
    ]
  },
  "～ようだ (seems like)": {
    usage: "Plain form / Noun (+の) / Na-adj (+な) + ようだ",
    exercises: [
      { id: 1, english: "It seems like he is tired.", japanese: "彼は疲れているようです。", kana: "かれはつかれているようです。", romaji: "Kare wa tsukarete iru you desu.", tip: "Similar to みたい but slightly more formal." },
      { id: 2, english: "It seems like nobody is in the room.", japanese: "部屋には誰もいないようです。", kana: "へやにはだれもいないようです。", romaji: "Heya ni wa dare mo inai you desu.", tip: "Based on objective observation." },
      { id: 3, english: "He is like a child.", japanese: "彼は子供のようです。", kana: "かれはこどものようです。", romaji: "Kare wa kodomo no you desu.", tip: "Noun requires の before よう." },
      { id: 4, english: "It seems to be quiet.", japanese: "静かなようです。", kana: "しずかなようです。", romaji: "Shizuka na you desu.", tip: "Na-adj requires な before よう." },
      { id: 5, english: "It seems like the story is true.", japanese: "話は本当のようです。", kana: "はなしはほんとうのようです。", romaji: "Hanashi wa hontou no you desu.", tip: "本当 functions as a noun here." }
    ]
  }
};
