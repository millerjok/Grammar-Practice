import { GrammarData } from './types';

export const level2Questions: Record<string, GrammarData> = {
  "～ば (if…)": {
    usage: "Verb (e-ba form) / I-adj (kereba) / Na-adj/Noun (+nara)",
    exercises: [
      { id: 1, english: "If you go, I will go too.", japanese: "行けば、私も行きます。", kana: "いけば、わたしもいきます。", romaji: "Ikeba, watashi mo ikimasu.", tip: "Ba-form is used for conditions." },
      { id: 2, english: "If it is cheap, I want to buy it.", japanese: "安ければ、買いたいです。", kana: "やすければ、かいたいです。", romaji: "Yasukereba, kaitai desu.", tip: "I-adjective kereba form." },
      { id: 3, english: "If you don't study, you won't understand.", japanese: "勉強しなければ、わかりません。", kana: "べんきょうしなければ、わかりません。", romaji: "Benkyou shinakereba, wakarimasen.", tip: "Negative nai form drops 'i' and adds 'kereba'." }
    ]
  },
  "～なら (if [contextual]…)": {
    usage: "Noun / Na-adj / Verb (plain form) + なら",
    exercises: [
      { id: 1, english: "If you are talking about Tokyo, it's a good place.", japanese: "東京なら、いい所です。", kana: "とうきょうなら、いいところです。", romaji: "Toukyou nara, ii tokoro desu.", tip: "Brings up a topic as a condition." },
      { id: 2, english: "If it's you, you can do it.", japanese: "あなたなら、できます。", kana: "あなたなら、できます。", romaji: "Anata nara, dekimasu.", tip: "Contextual condition." },
      { id: 3, english: "If you're going to buy it, do it early.", japanese: "買うなら、早く買ってください。", kana: "かうなら、はやくかってください。", romaji: "Kau nara, hayaku katte kudasai.", tip: "Used with a verb dictionary form." }
    ]
  },
  "～によると…～そうだ (According to… I heard)": {
    usage: "Noun + によると + Plain form + そうだ",
    exercises: [
      { id: 1, english: "According to the news, it will rain tomorrow.", japanese: "ニュースによると、明日は雨が降るそうです。", kana: "にゅーすによると、あしたはあめがふるそうです。", romaji: "Nyuusu ni yoru to, ashita wa ame ga furu sou desu.", tip: "Quotes an information source." },
      { id: 2, english: "According to the weather forecast, it will be cold.", japanese: "天気予報によると、寒くなるそうです。", kana: "てんきよほうによると、さむくなるそうです。", romaji: "Tenkiyohou ni yoru to, samuku naru sou desu.", tip: "天気予報 (weather forecast)." },
      { id: 3, english: "According to my friend, the movie was interesting.", japanese: "友達によると、映画は面白かったそうです。", kana: "ともだちによると、えいがはおもしろかったそうです。", romaji: "Tomodachi ni yoru to, eiga wa omoshirokatta sou desu.", tip: "Plain past tense + sou da." }
    ]
  },
  "～らしい (apparently)": {
    usage: "Plain form / Noun / Na-adj + らしい",
    exercises: [
      { id: 1, english: "Apparently, Mr. Tanaka is going to America.", japanese: "田中さんはアメリカに行くらしいです。", kana: "たなかさんはあめりかにいくらしいです。", romaji: "Tanaka-san wa amerika ni iku rashii desu.", tip: "Expresses hearsay or an educated guess." },
      { id: 2, english: "Apparently, that restaurant is delicious.", japanese: "あのレストランはおいしいらしいです。", kana: "あのれすとらんはおいしいらしいです。", romaji: "Ano resutoran wa oishii rashii desu.", tip: "I-adjective + らしい." },
      { id: 3, english: "Apparently, he is a student.", japanese: "彼は学生らしいです。", kana: "かれはがくせいらしいです。", romaji: "Kare wa gakusei rashii desu.", tip: "Noun directly connects to らしい." }
    ]
  },
  "～ようだ／みたいだ (seems / looks like)": {
    usage: "Plain form / Noun (+no/na) + ようだ/みたいだ",
    exercises: [
      { id: 1, english: "It seems like he is tired.", japanese: "彼は疲れているみたいです。", kana: "かれはつかれているみたいです。", romaji: "Kare wa tsukarete iru mitai desu.", tip: "みたい is more casual than よう." },
      { id: 2, english: "It seems like nobody is in the room.", japanese: "部屋には誰もいないようです。", kana: "へやにはだれもいないようです。", romaji: "Heya ni wa dare mo inai you desu.", tip: "Based on observation." },
      { id: 3, english: "He looks like a child.", japanese: "彼は子供のようです。", kana: "かれはこどものようです。", romaji: "Kare wa kodomo no you desu.", tip: "Noun + の + よう." }
    ]
  },
  "～やすい／にくい (easy to/hard to)": {
    usage: "Verb (stem) + やすい/にくい",
    exercises: [
      { id: 1, english: "This pen is easy to use.", japanese: "このペンは使いやすいです。", kana: "このぺんはつかいやすいです。", romaji: "Kono pen wa tsukaiyasui desu.", tip: "Stem of 使う + やすい." },
      { id: 2, english: "This book is hard to read.", japanese: "この本は読みにくいです。", kana: "このほんはよみにくいです。", romaji: "Kono hon wa yominikui desu.", tip: "Stem of 読む + にくい." },
      { id: 3, english: "Kanji is hard to write.", japanese: "漢字は書きにくいです。", kana: "かんじはかきにくいです。", romaji: "Kanji wa kakinikui desu.", tip: "Becomes an i-adjective." }
    ]
  },
  "～すぎる (too much)": {
    usage: "Verb (stem) / Adj (stem) + すぎる",
    exercises: [
      { id: 1, english: "I ate too much.", japanese: "食べすぎました。", kana: "たべすぎました。", romaji: "Tabesugimashita.", tip: "Stem of 食べる + すぎる." },
      { id: 2, english: "This tea is too hot.", japanese: "このお茶は熱すぎます。", kana: "このおちゃはあつすぎます。", romaji: "Kono ocha wa atsusugimasu.", tip: "I-adjective drops 'i'." },
      { id: 3, english: "That movie was too quiet.", japanese: "その映画は静かすぎました。", kana: "そのえいがはしずかすぎました。", romaji: "Sono eiga wa shizukasugimashita.", tip: "Na-adjective drops 'na'." }
    ]
  },
  "～方 (way of doing)": {
    usage: "Verb (stem) + 方（かた）",
    exercises: [
      { id: 1, english: "Do you know how to use this?", japanese: "これの使い方がわかりますか。", kana: "これのつかいかたがわかりますか。", romaji: "Kore no tsukaikata ga wakarimasu ka.", tip: "Stem of 使う + 方." },
      { id: 2, english: "Please teach me how to read this kanji.", japanese: "この漢字の読み方を教えてください。", kana: "このかんじのよみかたをおしえてください。", romaji: "Kono kanji no yomikata o oshiete kudasai.", tip: "Stem of 読む + 方." },
      { id: 3, english: "His way of speaking is interesting.", japanese: "彼の話し方は面白いです。", kana: "かれのはなしかたはおもしろいです。", romaji: "Kare no hanashikata wa omoshiroi desu.", tip: "Acts as a noun." }
    ]
  },
  "～ようになる (become able to / habit)": {
    usage: "Verb (dictionary/potential form) + ようになる",
    exercises: [
      { id: 1, english: "I became able to speak Japanese.", japanese: "日本語が話せるようになりました。", kana: "にほんごがはなせるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", tip: "Using potential form indicates a new ability." },
      { id: 2, english: "I started drinking coffee.", japanese: "コーヒーを飲むようになりました。", kana: "こーひーをのむようになりました。", romaji: "Koohii o nomu you ni narimashita.", tip: "Using dictionary form indicates a new habit." },
      { id: 3, english: "I can now read kanji.", japanese: "漢字が読めるようになりました。", kana: "かんじがよめるようになりました。", romaji: "Kanji ga yomeru you ni narimashita.", tip: "読める is the potential form of 読む." }
    ]
  },
  "い-adj → ～くなる / な-adj → ～になる (to become…)": {
    usage: "Adj (drop i) + くなる / Noun/Na-adj + になる",
    exercises: [
      { id: 1, english: "It became cold.", japanese: "寒くなりました。", kana: "さむくなりました。", romaji: "Samuku narimashita.", tip: "I-adjective drops 'i' and takes 'ku'." },
      { id: 2, english: "The room became quiet.", japanese: "部屋が静かになりました。", kana: "へやがしずかになりました。", romaji: "Heya ga shizuka ni narimashita.", tip: "Na-adjective takes 'ni'." },
      { id: 3, english: "I will become a doctor.", japanese: "私は医者になります。", kana: "わたしはいしゃになります。", romaji: "Watashi wa isha ni narimasu.", tip: "Noun takes 'ni'." }
    ]
  },
  "～てしまう (completely/regret)": {
    usage: "Verb (te-form) + しまう",
    exercises: [
      { id: 1, english: "I finished reading the book.", japanese: "本を読んでしまいました。", kana: "ほんをよんでしまいました。", romaji: "Hon o yonde shimaimashita.", tip: "Indicates completion of an action." },
      { id: 2, english: "I lost my umbrella (unfortunately).", japanese: "傘をなくしてしまいました。", kana: "かさをなくしてしまいました。", romaji: "Kasa o nakushite shimaimashita.", tip: "Indicates regret or an accident." },
      { id: 3, english: "I accidentally ate his cake.", japanese: "彼のケーキを食べてしまいました。", kana: "かれのけーきをたべてしまいました。", romaji: "Kare no keeki o tabete shimaimashita.", tip: "Shows a sense of regret." }
    ]
  },
  "～てもいい (may)": {
    usage: "Verb (te-form) + もいいです",
    exercises: [
      { id: 1, english: "May I sit here?", japanese: "ここに座ってもいいですか。", kana: "ここにすわってもいいですか。", romaji: "Koko ni suwatte mo ii desu ka.", tip: "Asking for permission." },
      { id: 2, english: "You may go home.", japanese: "帰ってもいいですよ。", kana: "かえってもいいですよ。", romaji: "Kaette mo ii desu yo.", tip: "Granting permission." },
      { id: 3, english: "May I open the window?", japanese: "窓を開けてもいいですか。", kana: "まどをあけてもいいですか。", romaji: "Mado o akete mo ii desu ka.", tip: "Te-form of 開ける is 開けて." }
    ]
  },
  "～てはいけない (must not)": {
    usage: "Verb (te-form) + はいけません",
    exercises: [
      { id: 1, english: "You must not take photos here.", japanese: "ここで写真を撮ってはいけません。", kana: "ここでしゃしんをとってはいけません。", romaji: "Koko de shashin o totte wa ikemasen.", tip: "Strong prohibition." },
      { id: 2, english: "You must not enter.", japanese: "入ってはいけません。", kana: "はいってはいけません。", romaji: "Haitte wa ikemasen.", tip: "Te-form of 入る is 入って." },
      { id: 3, english: "You must not speak English in the classroom.", japanese: "教室で英語を話してはいけません。", kana: "きょうしつでえいごをはなしてはいけません。", romaji: "Kyoushitsu de eigo o hanashite wa ikemasen.", tip: "Prohibiting an action." }
    ]
  },
  "～なければならない / ～なければいけない (must)": {
    usage: "Verb (nai-form, drop i) + ければならない",
    exercises: [
      { id: 1, english: "I must do my homework.", japanese: "宿題をしなければなりません。", kana: "しゅくだいをしなければなりません。", romaji: "Shukudai o shinakereba narimasen.", tip: "Obligation or duty." },
      { id: 2, english: "I must wake up early tomorrow.", japanese: "明日は早く起きなければいけません。", kana: "あしたははやくおきなければいけません。", romaji: "Ashita wa hayaku okinakereba ikemasen.", tip: "Ikemasen is also used for 'must'." },
      { id: 3, english: "I must go to school.", japanese: "学校へ行かなければなりません。", kana: "がっこうへいかなければなりません。", romaji: "Gakkou e ikanakereba narimasen.", tip: "Nai form of 行く is 行かない." }
    ]
  },
  "～なくてもいい (don't have to)": {
    usage: "Verb (nai-form, drop i) + くてもいいです",
    exercises: [
      { id: 1, english: "You don't have to hurry.", japanese: "急がなくてもいいですよ。", kana: "いそがなくてもいいですよ。", romaji: "Isoganakute mo ii desu yo.", tip: "Lack of obligation." },
      { id: 2, english: "You don't have to come tomorrow.", japanese: "明日は来なくてもいいです。", kana: "あしたはこなくてもいいです。", romaji: "Ashita wa konakute mo ii desu.", tip: "Nai form of 来る is 来ない." },
      { id: 3, english: "You don't have to buy a new book.", japanese: "新しい本を買わなくてもいいです。", kana: "あたらしいほんをかわなくてもいいです。", romaji: "Atarashii hon o kawanakute mo ii desu.", tip: "Shows an optional action." }
    ]
  },
  "～た・ないほうがいい (had better/better not)": {
    usage: "Verb (ta-form / nai-form) + ほうがいい",
    exercises: [
      { id: 1, english: "You had better go to the hospital.", japanese: "病院に行ったほうがいいですよ。", kana: "びょういんにいったほうがいいですよ。", romaji: "Byouin ni itta hou ga ii desu yo.", tip: "Strong advice using past tense." },
      { id: 2, english: "You'd better not drink too much.", japanese: "飲みすぎないほうがいいです。", kana: "のみすぎないほうがいいです。", romaji: "Nomisuginai hou ga ii desu.", tip: "Advice against an action using negative form." },
      { id: 3, english: "You had better sleep early.", japanese: "早く寝たほうがいいですよ。", kana: "はやくねたほうがいいですよ。", romaji: "Hayaku neta hou ga ii desu yo.", tip: "Advice for well-being." }
    ]
  },
  "～たことがある (have done before)": {
    usage: "Verb (ta-form) + ことがある",
    exercises: [
      { id: 1, english: "I have been to Japan before.", japanese: "日本に行ったことがあります。", kana: "にほんに行ったことがあります。", romaji: "Nihon ni itta koto ga arimasu.", tip: "Expresses a life experience." },
      { id: 2, english: "I have eaten sushi.", japanese: "寿司を食べたことがあります。", kana: "すしをたべたことがあります。", romaji: "Sushi o tabeta koto ga arimasu.", tip: "Te-form past tense + koto ga arimasu." },
      { id: 3, english: "I have never seen that movie.", japanese: "その映画を見たことがありません。", kana: "そのえいがをみたことがありません。", romaji: "Sono eiga o mita koto ga arimasen.", tip: "Negative experience." }
    ]
  },
  "～てみる (try)": {
    usage: "Verb (te-form) + みる",
    exercises: [
      { id: 1, english: "I will try eating natto.", japanese: "納豆を食べてみます。", kana: "なっとうをたべてみます。", romaji: "Nattou o tabete mimasu.", tip: "Attempting an action to see what it's like." },
      { id: 2, english: "Try wearing these shoes.", japanese: "この靴を履いてみてください。", kana: "このくつをはいてみてください。", romaji: "Kono kutsu o haite mite kudasai.", tip: "Combining with kudasai for a suggestion." },
      { id: 3, english: "I went and checked the store.", japanese: "店に行ってみました。", kana: "みせにいってみました。", romaji: "Mise ni itte mimashita.", tip: "Doing something as a trial in the past." }
    ]
  },
  "AはBほど～ない (A is not as… as B)": {
    usage: "A は B ほど + Negative",
    exercises: [
      { id: 1, english: "Today is not as hot as yesterday.", japanese: "今日は昨日ほど暑くないです。", kana: "きょうはきのうほどあつくないです。", romaji: "Kyou wa kinou hodo atsukunai desu.", tip: "B (yesterday) is more than A (today)." },
      { id: 2, english: "My room is not as large as yours.", japanese: "私の部屋はあなたの部屋ほど広くないです。", kana: "わたしのへやはあなたのへやほどひろくないです。", romaji: "Watashi no heya wa anata no heya hodo hirokunai desu.", tip: "Always used with a negative ending." },
      { id: 3, english: "English is not as difficult as Japanese.", japanese: "英語は日本語ほど難しくないです。", kana: "えいごはにほんごほどむずかしくないです。", romaji: "Eigo wa nihongo hodo muzukashikunai desu.", tip: "Comparing difficulty negatively." }
    ]
  },
  "～の中で一番… (the most… among)": {
    usage: "Category の中で + Item が + 一番 + Adjective",
    exercises: [
      { id: 1, english: "Among fruits, apples are the most delicious.", japanese: "果物の中で、りんごが一番おいしいです。", kana: "くだもののなかで、りんごがいちばんおいしいです。", romaji: "Kudamono no naka de, ringo ga ichiban oishii desu.", tip: "Superlative comparison." },
      { id: 2, english: "In Japan, which city is the largest?", japanese: "日本の中で、どの町が一番大きいですか。", kana: "にほんのなかで、どのまちがいちばんおおきいですか。", romaji: "Nihon no naka de, dono machi ga ichiban ookii desu ka.", tip: "Using a question word." },
      { id: 3, english: "Among my family, my father is the tallest.", japanese: "家族の中で、父が一番背が高いです。", kana: "かぞくのなかで、ちちがいちばんせがたかいです。", romaji: "Kazoku no naka de, chichi ga ichiban se ga takai desu.", tip: "Identifying the top of a group." }
    ]
  }
};
