import { GrammarData } from './types';

export const level2Questions: Record<string, GrammarData> = {
  // Conditionals
  "～たら (if/when…)": {
    usage: "Verb (ta-form) + ら / I-adj (katta) + ら / Na-adj/Noun (datta) + ら",
    exercises: [
      { id: 1, english: "If I have money, I will buy a car.", japanese: "お金があったら、車を買います。", kana: "おかねがあったら、くるまをかいます。", romaji: "Okane ga attara, kuruma o kaimasu.", tip: "Indicates a condition." },
      { id: 2, english: "When I arrive at the station, I will call.", japanese: "駅に着いたら、電話します。", kana: "えきについたら、でんわします。", romaji: "Eki ni tsuitara, denwa shimasu.", tip: "Can also mean 'after' an action is completed." },
      { id: 3, english: "If it's cheap, I will buy it.", japanese: "安かったら、買います。", kana: "やすかったら、かいます。", romaji: "Yasukattara, kaimasu.", tip: "I-adjective past tense + ら." },
      { id: 4, english: "If you have time, please come.", japanese: "暇だったら、来てください。", kana: "ひまだったら、きてください。", romaji: "Hima dattara, kite kudasai.", tip: "Na-adjective + だったら." },
      { id: 5, english: "If it rains tomorrow, we won't play tennis.", japanese: "明日雨だったら、テニスをしません。", kana: "あしたあめだったら、てにすをしません。", romaji: "Ashita ame dattara, tenisu o shimasen.", tip: "Noun + だったら." }
    ]
  },
  "～と (natural consequence)": {
    usage: "Verb (dictionary form) + と",
    exercises: [
      { id: 1, english: "If you push this button, water comes out.", japanese: "このボタンを押すと、水が出ます。", kana: "このぼたんをおすと、みずがでます。", romaji: "Kono botan o osu to, mizu ga demasu.", tip: "Shows a natural, inevitable consequence." },
      { id: 2, english: "If you go straight, there is a bank.", japanese: "まっすぐ行くと、銀行があります。", kana: "まっすぐいくと、ぎんこうがあります。", romaji: "Massugu iku to, ginkou ga arimasu.", tip: "Commonly used for giving directions." },
      { id: 3, english: "When spring comes, flowers bloom.", japanese: "春になると、花が咲きます。", kana: "はるになると、はながさきます。", romaji: "Haru ni naru to, hana ga sakimasu.", tip: "Natural facts or habits." },
      { id: 4, english: "If you turn right, you will see the station.", japanese: "右へ曲がると、駅が見えます。", kana: "みぎへまがると、えきがみえます。", romaji: "Migi e magaru to, eki ga miemasu.", tip: "Directions." },
      { id: 5, english: "If you don't study, you won't pass.", japanese: "勉強しないと、合格しません。", kana: "べんきょうしないと、ごうかくしません。", romaji: "Benkyou shinai to, goukaku shimasen.", tip: "Nai-form + と." }
    ]
  },
  "～ば (if…)": {
    usage: "Verb (e-ba form) / I-adj (kereba) / Na-adj/Noun (+nara)",
    exercises: [
      { id: 1, english: "If you go, I will go too.", japanese: "行けば、私も行きます。", kana: "いけば、わたしもいきます。", romaji: "Ikeba, watashi mo ikimasu.", tip: "Ba-form is used for conditions." },
      { id: 2, english: "If it is cheap, I want to buy it.", japanese: "安ければ、買いたいです。", kana: "やすければ、かいたいです。", romaji: "Yasukereba, kaitai desu.", tip: "I-adjective kereba form." },
      { id: 3, english: "If you don't study, you won't understand.", japanese: "勉強しなければ、わかりません。", kana: "べんきょうしなければ、わかりません。", romaji: "Benkyou shinakereba, wakarimasen.", tip: "Negative nai form drops 'i' and adds 'kereba'." },
      { id: 4, english: "If I eat, I will be full.", japanese: "食べれば、お腹がいっぱいになります。", kana: "たべれば、おなかがいっぱいになります。", romaji: "Tabereba, onaka ga ippai ni narimasu.", tip: "Group 2 verb drops る and adds れば." },
      { id: 5, english: "If it's hot, turn on the AC.", japanese: "暑ければ、エアコンをつけてください。", kana: "あつければ、えあこんをつけてください。", romaji: "Atsukereba, eakon o tsukete kudasai.", tip: "Suggesting action based on condition." }
    ]
  },
  "～なら (if [contextual]…)": {
    usage: "Noun / Na-adj / Verb (plain form) + なら",
    exercises: [
      { id: 1, english: "If you are talking about Tokyo, it's a good place.", japanese: "東京なら、いい所です。", kana: "とうきょうなら、いいところです。", romaji: "Toukyou nara, ii tokoro desu.", tip: "Brings up a topic as a condition." },
      { id: 2, english: "If it's you, you can do it.", japanese: "あなたなら、できます。", kana: "あなたなら、できます。", romaji: "Anata nara, dekimasu.", tip: "Contextual condition based on the person." },
      { id: 3, english: "If you're going to buy it, do it early.", japanese: "買うなら、早く買ってください。", kana: "かうなら、はやくかってください。", romaji: "Kau nara, hayaku katte kudasai.", tip: "Used with a verb dictionary form." },
      { id: 4, english: "If you are busy, I'll go instead.", japanese: "忙しいなら、私が行きます。", kana: "いそがしいなら、わたしがいきます。", romaji: "Isogashii nara, watashi ga ikimasu.", tip: "I-adj directly connects." },
      { id: 5, english: "If it's cheap, I'll buy it.", japanese: "安いなら、買います。", kana: "やすいなら、かいます。", romaji: "Yasui nara, kaimasu.", tip: "Contextual assumption." }
    ]
  },

  // Hearsay & Conjecture
  "～によると…～そうだ (According to… I heard)": {
    usage: "Noun + によると + Plain form + そうだ",
    exercises: [
      { id: 1, english: "According to the news, it will rain tomorrow.", japanese: "ニュースによると、明日は雨が降るそうです。", kana: "にゅーすによると、あしたはあめがふるそうです。", romaji: "Nyuusu ni yoru to, ashita wa ame ga furu sou desu.", tip: "Quotes an information source." },
      { id: 2, english: "According to the weather forecast, it will be cold.", japanese: "天気予報によると、寒くなるそうです。", kana: "てんきよほうによると、さむくなるそうです。", romaji: "Tenkiyohou ni yoru to, samuku naru sou desu.", tip: "天気予報 (weather forecast)." },
      { id: 3, english: "According to my friend, the movie was interesting.", japanese: "友達によると、映画は面白かったそうです。", kana: "ともだちによると、えいがはおもしろかったそうです。", romaji: "Tomodachi ni yoru to, eiga wa omoshirokatta sou desu.", tip: "Plain past tense + sou da." },
      { id: 4, english: "According to the teacher, the test is easy.", japanese: "先生によると、テストは簡単だそうです。", kana: "せんせいによると、てすとはかんたんだそうです。", romaji: "Sensei ni yoru to, tesuto wa kantan da sou desu.", tip: "Na-adj requires だ before そうだ." },
      { id: 5, english: "According to TV, he got married.", japanese: "テレビによると、彼は結婚したそうです。", kana: "てれびによると、かれはけっこんしたそうです。", romaji: "Terebi ni yoru to, kare wa kekkon shita sou desu.", tip: "Verb past plain form." }
    ]
  },
  "～らしい (apparently)": {
    usage: "Plain form / Noun / Na-adj + らしい",
    exercises: [
      { id: 1, english: "Apparently, Mr. Tanaka is going to America.", japanese: "田中さんはアメリカに行くらしいです。", kana: "たなかさんはあめりかにいくらしいです。", romaji: "Tanaka-san wa amerika ni iku rashii desu.", tip: "Expresses hearsay or an educated guess." },
      { id: 2, english: "Apparently, that restaurant is delicious.", japanese: "あのレストランはおいしいらしいです。", kana: "あのれすとらんはおいしいらしいです。", romaji: "Ano resutoran wa oishii rashii desu.", tip: "I-adjective + らしい." },
      { id: 3, english: "Apparently, he is a student.", japanese: "彼は学生らしいです。", kana: "かれはがくせいらしいです。", romaji: "Kare wa gakusei rashii desu.", tip: "Noun directly connects to らしい." },
      { id: 4, english: "Apparently, it rained yesterday.", japanese: "昨日は雨が降ったらしいです。", kana: "きのうはあめがふったらしいです。", romaji: "Kinou wa ame ga futta rashii desu.", tip: "Past action + らしい." },
      { id: 5, english: "Apparently, it is quiet there.", japanese: "そこは静からしいです。", kana: "そこはしずからしいです。", romaji: "Soko wa shizuka rashii desu.", tip: "Na-adj directly connects without な/だ." }
    ]
  },
  "～ようだ／みたいだ (seems / looks like)": {
    usage: "Plain form / Noun (+no/na) + ようだ/みたいだ",
    exercises: [
      { id: 1, english: "It seems like he is tired.", japanese: "彼は疲れているみたいです。", kana: "かれはつかれているみたいです。", romaji: "Kare wa tsukarete iru mitai desu.", tip: "みたい is more casual than よう." },
      { id: 2, english: "It seems like nobody is in the room.", japanese: "部屋には誰もいないようです。", kana: "へやにはだれもいないようです。", romaji: "Heya ni wa dare mo inai you desu.", tip: "Based on observation." },
      { id: 3, english: "He looks like a child.", japanese: "彼は子供のようです。", kana: "かれはこどものようです。", romaji: "Kare wa kodomo no you desu.", tip: "Noun + の + よう." },
      { id: 4, english: "It looks like a dog.", japanese: "犬みたいです。", kana: "いぬみたいです。", romaji: "Inu mitai desu.", tip: "Noun connects directly to みたい." },
      { id: 5, english: "It seems to be quiet.", japanese: "静かなようです。", kana: "しずかなようです。", romaji: "Shizuka na you desu.", tip: "Na-adj requires な before よう." }
    ]
  },

  // Ease, Excess & Methods
  "～やすい／にくい (easy to/hard to)": {
    usage: "Verb (stem) + やすい/にくい",
    exercises: [
      { id: 1, english: "This pen is easy to use.", japanese: "このペンは使いやすいです。", kana: "このぺんはつかいやすいです。", romaji: "Kono pen wa tsukaiyasui desu.", tip: "Stem of 使う + やすい." },
      { id: 2, english: "This book is hard to read.", japanese: "この本は読みにくいです。", kana: "このほんはよみにくいです。", romaji: "Kono hon wa yominikui desu.", tip: "Stem of 読む + にくい." },
      { id: 3, english: "Kanji is hard to write.", japanese: "漢字は書きにくいです。", kana: "かんじはかきにくいです。", romaji: "Kanji wa kakinikui desu.", tip: "Becomes an i-adjective." },
      { id: 4, english: "This medicine is easy to drink.", japanese: "この薬は飲みやすいです。", kana: "このくすりはのみやすいです。", romaji: "Kono kusuri wa nomiyasui desu.", tip: "Stem of 飲む is 飲み." },
      { id: 5, english: "This road is hard to walk on.", japanese: "この道は歩きにくいです。", kana: "このみちはあるきにくいです。", romaji: "Kono michi wa arukinikui desu.", tip: "Stem of 歩く is 歩き." }
    ]
  },
  "～すぎる (too much)": {
    usage: "Verb (stem) / Adj (stem) + すぎる",
    exercises: [
      { id: 1, english: "I ate too much.", japanese: "食べすぎました。", kana: "たべすぎました。", romaji: "Tabesugimashita.", tip: "Stem of 食べる + すぎる." },
      { id: 2, english: "This tea is too hot.", japanese: "このお茶は熱すぎます。", kana: "このおちゃはあつすぎます。", romaji: "Kono ocha wa atsusugimasu.", tip: "I-adjective drops 'i'." },
      { id: 3, english: "That movie was too quiet.", japanese: "その映画は静かすぎました。", kana: "そのえいがはしずかすぎました。", romaji: "Sono eiga wa shizukasugimashita.", tip: "Na-adjective drops 'na'." },
      { id: 4, english: "He works too much.", japanese: "彼は働きすぎます。", kana: "かれははたらきすぎます。", romaji: "Kare wa hatarakisugimasu.", tip: "Stem of 働く is 働き." },
      { id: 5, english: "This bag is too heavy.", japanese: "このかばんは重すぎます。", kana: "このかばんははおもすぎます。", romaji: "Kono kaban wa omosugimasu.", tip: "I-adj 重い drops i." }
    ]
  },
  "～方 (way of doing)": {
    usage: "Verb (stem) + 方（かた）",
    exercises: [
      { id: 1, english: "Do you know how to use this?", japanese: "これの使い方がわかりますか。", kana: "これのつかいかたがわかりますか。", romaji: "Kore no tsukaikata ga wakarimasu ka.", tip: "Stem of 使う + 方." },
      { id: 2, english: "Please teach me how to read this kanji.", japanese: "この漢字の読み方を教えてください。", kana: "このかんじのよみかたをおしえてください。", romaji: "Kono kanji no yomikata o oshiete kudasai.", tip: "Stem of 読む + 方." },
      { id: 3, english: "His way of speaking is interesting.", japanese: "彼の話し方は面白いです。", kana: "かれのはなしかたはおもしろいです。", romaji: "Kare no hanashikata wa omoshiroi desu.", tip: "Acts as a noun." },
      { id: 4, english: "How do you make sushi?", japanese: "寿司の作り方は何ですか。", kana: "すしのつくりかたはなんですか。", romaji: "Sushi no tsukurikata wa nan desu ka.", tip: "Noun + の modifies 作り方." },
      { id: 5, english: "I don't know how to go.", japanese: "行き方がわかりません。", kana: "いきかたがわかりません。", romaji: "Ikikata ga wakarimasen.", tip: "Stem of 行く is 行き." }
    ]
  },

  // Change & Completion
  "～ようになる (become able to / habit)": {
    usage: "Verb (dictionary/potential form) + ようになる",
    exercises: [
      { id: 1, english: "I became able to speak Japanese.", japanese: "日本語が話せるようになりました。", kana: "にほんごがはなせるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", tip: "Using potential form indicates a new ability." },
      { id: 2, english: "I started drinking coffee.", japanese: "コーヒーを飲むようになりました。", kana: "こーひーをのむようになりました。", romaji: "Koohii o nomu you ni narimashita.", tip: "Using dictionary form indicates a new habit." },
      { id: 3, english: "I can now read kanji.", japanese: "漢字が読めるようになりました。", kana: "かんじがよめるようになりました。", romaji: "Kanji ga yomeru you ni narimashita.", tip: "読める is the potential form of 読む." },
      { id: 4, english: "He became able to swim.", japanese: "彼は泳げるようになりました。", kana: "かれはおよげるようになりました。", romaji: "Kare wa oyogeru you ni narimashita.", tip: "Potential of 泳ぐ is 泳げる." },
      { id: 5, english: "I stopped eating sweets.", japanese: "甘い物を食べないようになりました。", kana: "あまいものをたべないようになりました。", romaji: "Amai mono o tabenai you ni narimashita.", tip: "Negative form indicates a broken habit." }
    ]
  },
  "い-adj → ～くなる / な-adj → ～になる (to become…)": {
    usage: "Adj (drop i) + くなる / Noun/Na-adj + になる",
    exercises: [
      { id: 1, english: "It became cold.", japanese: "寒くなりました。", kana: "さむくなりました。", romaji: "Samuku narimashita.", tip: "I-adjective drops 'i' and takes 'ku'." },
      { id: 2, english: "The room became quiet.", japanese: "部屋が静かになりました。", kana: "へやがしずかになりました。", romaji: "Heya ga shizuka ni narimashita.", tip: "Na-adjective takes 'ni'." },
      { id: 3, english: "I will become a doctor.", japanese: "私は医者になります。", kana: "わたしはいしゃになります。", romaji: "Watashi wa isha ni narimasu.", tip: "Noun takes 'ni'." },
      { id: 4, english: "It became expensive.", japanese: "高くなりました。", kana: "たかくなりました。", romaji: "Takaku narimashita.", tip: "I-adj 高い drops i." },
      { id: 5, english: "It will become lively tomorrow.", japanese: "明日はにぎやかになります。", kana: "あしたはにぎやかになります。", romaji: "Ashita wa nigiyaka ni narimasu.", tip: "Na-adj にぎやか." }
    ]
  },
  "～てしまう (completely/regret)": {
    usage: "Verb (te-form) + しまう",
    exercises: [
      { id: 1, english: "I finished reading the book.", japanese: "本を読んでしまいました。", kana: "ほんをよんでしまいました。", romaji: "Hon o yonde shimaimashita.", tip: "Indicates completion of an action." },
      { id: 2, english: "I lost my umbrella (unfortunately).", japanese: "傘をなくしてしまいました。", kana: "かさをなくしてしまいました。", romaji: "Kasa o nakushite shimaimashita.", tip: "Indicates regret or an accident." },
      { id: 3, english: "I accidentally ate his cake.", japanese: "彼のケーキを食べてしまいました。", kana: "かれのけーきをたべてしまいました。", romaji: "Kare no keeki o tabete shimaimashita.", tip: "Shows a sense of regret." },
      { id: 4, english: "I forgot his name.", japanese: "名前を忘れてしまいました。", kana: "なまえをわすれてしまいました。", romaji: "Namae o wasurete shimaimashita.", tip: "Mistake." },
      { id: 5, english: "I drank all the wine.", japanese: "ワインを全部飲んでしまいました。", kana: "わいんをぜんぶのんでしまいました。", romaji: "Wain o zenbu nonde shimaimashita.", tip: "Complete consumption." }
    ]
  },

  // Requests, Advice & Obligations
  "～てもいい (may)": {
    usage: "Verb (te-form) + もいいです",
    exercises: [
      { id: 1, english: "May I sit here?", japanese: "ここに座ってもいいですか。", kana: "ここにすわってもいいですか。", romaji: "Koko ni suwatte mo ii desu ka.", tip: "Asking for permission." },
      { id: 2, english: "You may go home.", japanese: "帰ってもいいですよ。", kana: "かえってもいいですよ。", romaji: "Kaette mo ii desu yo.", tip: "Granting permission." },
      { id: 3, english: "May I open the window?", japanese: "窓を開けてもいいですか。", kana: "まどをあけてもいいですか。", romaji: "Mado o akete mo ii desu ka.", tip: "Te-form of 開ける is 開けて." },
      { id: 4, english: "You may eat.", japanese: "食べてもいいです。", kana: "たべてもいいです。", romaji: "Tabete mo ii desu.", tip: "Giving permission." },
      { id: 5, english: "May I use this pen?", japanese: "このペンを使ってもいいですか。", kana: "このぺんをつかってもいいですか。", romaji: "Kono pen o tsukatte mo ii desu ka.", tip: "Te-form of 使う is 使って." }
    ]
  },
  "～てはいけない (must not)": {
    usage: "Verb (te-form) + はいけません",
    exercises: [
      { id: 1, english: "You must not take photos here.", japanese: "ここで写真を撮ってはいけません。", kana: "ここでしゃしんをとってはいけません。", romaji: "Koko de shashin o totte wa ikemasen.", tip: "Strong prohibition." },
      { id: 2, english: "You must not enter.", japanese: "入ってはいけません。", kana: "はいってはいけません。", romaji: "Haitte wa ikemasen.", tip: "Te-form of 入る is 入って." },
      { id: 3, english: "You must not speak English in the classroom.", japanese: "教室で英語を話してはいけません。", kana: "きょうしつでえいごをはなしてはいけません。", romaji: "Kyoushitsu de eigo o hanashite wa ikemasen.", tip: "Prohibiting an action." },
      { id: 4, english: "You must not smoke.", japanese: "たばこを吸ってはいけません。", kana: "たばこをすってはいけません。", romaji: "Tabako o sutte wa ikemasen.", tip: "Te-form of 吸う is 吸って." },
      { id: 5, english: "You must not forget.", japanese: "忘れてはいけません。", kana: "わすれてはいけません。", romaji: "Wasurete wa ikemasen.", tip: "Warning." }
    ]
  },
  "～なければならない / ～なければいけない (must)": {
    usage: "Verb (nai-form, drop i) + ければならない",
    exercises: [
      { id: 1, english: "I must do my homework.", japanese: "宿題をしなければなりません。", kana: "しゅくだいをしなければなりません。", romaji: "Shukudai o shinakereba narimasen.", tip: "Obligation or duty." },
      { id: 2, english: "I must wake up early tomorrow.", japanese: "明日は早く起きなければいけません。", kana: "あしたははやくおきなければいけません。", romaji: "Ashita wa hayaku okinakereba ikemasen.", tip: "Ikemasen is also used for 'must'." },
      { id: 3, english: "I must go to school.", japanese: "学校へ行かなければなりません。", kana: "がっこうへいかなければなりません。", romaji: "Gakkou e ikanakereba narimasen.", tip: "Nai form of 行く is 行かない." },
      { id: 4, english: "I must return home.", japanese: "帰らなければなりません。", kana: "かえらなければなりません。", romaji: "Kaeranakereba narimasen.", tip: "Nai-form drops i." },
      { id: 5, english: "I must memorize kanji.", japanese: "漢字を覚えなければいけません。", kana: "かんじをおぼえなければいけません。", romaji: "Kanji o oboenakereba ikemasen.", tip: "Oboeru becomes Oboenai." }
    ]
  },
  "～なくてもいい (don’t have to)": {
    usage: "Verb (nai-form, drop i) + くてもいいです",
    exercises: [
      { id: 1, english: "You don't have to hurry.", japanese: "急がなくてもいいですよ。", kana: "いそがなくてもいいですよ。", romaji: "Isoganakute mo ii desu yo.", tip: "Lack of obligation." },
      { id: 2, english: "You don't have to come tomorrow.", japanese: "明日は来なくてもいいです。", kana: "あしたはこなくてもいいです。", romaji: "Ashita wa konakute mo ii desu.", tip: "Nai form of 来る is 来ない." },
      { id: 3, english: "You don't have to buy a new book.", japanese: "新しい本を買わなくてもいいです。", kana: "あたらしいほんをかわなくてもいいです。", romaji: "Atarashii hon o kawanakute mo ii desu.", tip: "Shows an optional action." },
      { id: 4, english: "You don't have to write your name.", japanese: "名前を書かなくてもいいです。", kana: "なまえをかかなくてもいいです。", romaji: "Namae o kakanakute mo ii desu.", tip: "Kaku -> Kakanai." },
      { id: 5, english: "You don't have to eat it all.", japanese: "全部食べなくてもいいです。", kana: "ぜんぶたべなくてもいいです。", romaji: "Zenbu tabenakute mo ii desu.", tip: "Taberu -> Tabenai." }
    ]
  },
  "～た・ないほうがいい (had better/better not)": {
    usage: "Verb (ta-form / nai-form) + ほうがいい",
    exercises: [
      { id: 1, english: "You had better go to the hospital.", japanese: "病院に行ったほうがいいですよ。", kana: "びょういんにいったほうがいいですよ。", romaji: "Byouin ni itta hou ga ii desu yo.", tip: "Strong advice using past tense." },
      { id: 2, english: "You'd better not drink too much.", japanese: "飲みすぎないほうがいいです。", kana: "のみすぎないほうがいいです。", romaji: "Nomisuginai hou ga ii desu.", tip: "Advice against an action using negative form." },
      { id: 3, english: "You had better sleep early.", japanese: "早く寝たほうがいいですよ。", kana: "はやくねたほうがいいですよ。", romaji: "Hayaku neta hou ga ii desu yo.", tip: "Advice for well-being." },
      { id: 4, english: "You'd better not go.", japanese: "行かないほうがいいです。", kana: "いかないほうがいいです。", romaji: "Ikanai hou ga ii desu.", tip: "Nai-form." },
      { id: 5, english: "You had better take medicine.", japanese: "薬を飲んだほうがいいです。", kana: "くすりをのんだほうがいいです。", romaji: "Kusuri o nonda hou ga ii desu.", tip: "Ta-form of 飲む." }
    ]
  },
  "～てはだめだ (must not - casual)": {
    usage: "Verb (te-form) + はだめだ",
    exercises: [
      { id: 1, english: "You must not do that.", japanese: "それをしてはだめです。", kana: "それをしてはだめです。", romaji: "Sore o shite wa dame desu.", tip: "Casual spoken prohibition." },
      { id: 2, english: "You must not enter.", japanese: "入ってはだめです。", kana: "はいってはだめです。", romaji: "Haitte wa dame desu.", tip: "Like てはいけない but softer/casual." },
      { id: 3, english: "You must not look.", japanese: "見てはだめ。", kana: "みてはだめ。", romaji: "Mite wa dame.", tip: "Very casual without です." },
      { id: 4, english: "You must not play here.", japanese: "ここで遊んではだめです。", kana: "ここであそんではだめです。", romaji: "Koko de asonde wa dame desu.", tip: "Te-form of 遊ぶ." },
      { id: 5, english: "You must not forget it.", japanese: "忘れてはだめだよ。", kana: "わすれてはだめだよ。", romaji: "Wasurete wa dame da yo.", tip: "Adding sentence particles." }
    ]
  },

  // Experiences & Giving
  "～たことがある (have done before)": {
    usage: "Verb (ta-form) + ことがある",
    exercises: [
      { id: 1, english: "I have been to Japan before.", japanese: "日本に行ったことがあります。", kana: "にほんに行ったことがあります。", romaji: "Nihon ni itta koto ga arimasu.", tip: "Expresses a life experience." },
      { id: 2, english: "I have eaten sushi.", japanese: "寿司を食べたことがあります。", kana: "すしをたべたことがあります。", romaji: "Sushi o tabeta koto ga arimasu.", tip: "Te-form past tense + koto ga arimasu." },
      { id: 3, english: "I have never seen that movie.", japanese: "その映画を見たことがありません。", kana: "そのえいがをみたことがありません。", romaji: "Sono eiga o mita koto ga arimasen.", tip: "Negative experience." },
      { id: 4, english: "Have you ever climbed a mountain?", japanese: "山に登ったことがありますか。", kana: "やまにのぼったことがありますか。", romaji: "Yama ni nobotta koto ga arimasu ka.", tip: "Asking for experience." },
      { id: 5, english: "I have ridden a horse.", japanese: "馬に乗ったことがあります。", kana: "うまにのったことがあります。", romaji: "Uma ni notta koto ga arimasu.", tip: "Ta-form of 乗る." }
    ]
  },
  "～てみる (try)": {
    usage: "Verb (te-form) + みる",
    exercises: [
      { id: 1, english: "I will try eating natto.", japanese: "納豆を食べてみます。", kana: "なっとうをたべてみます。", romaji: "Nattou o tabete mimasu.", tip: "Attempting an action to see what it's like." },
      { id: 2, english: "Try wearing these shoes.", japanese: "この靴を履いてみてください。", kana: "このくつをはいてみてください。", romaji: "Kono kutsu o haite mite kudasai.", tip: "Combining with kudasai for a suggestion." },
      { id: 3, english: "I went and checked the store.", japanese: "店に行ってみました。", kana: "みせにいってみました。", romaji: "Mise ni itte mimashita.", tip: "Doing something as a trial in the past." },
      { id: 4, english: "I want to try making sushi.", japanese: "寿司を作ってみたいです。", kana: "すしをつくってみたいです。", romaji: "Sushi o tsukutte mitai desu.", tip: "Combining with たい." },
      { id: 5, english: "Let's try reading this.", japanese: "これを読んでみましょう。", kana: "これをよんでみましょう。", romaji: "Kore o yonde mimashou.", tip: "Combining with ましょう." }
    ]
  },
  "～てあげる／くれる／もらう (giving/receiving favors)": {
    usage: "Verb (te-form) + あげる/くれる/もらう",
    exercises: [
      { id: 1, english: "I taught him Japanese.", japanese: "彼に日本語を教えてあげました。", kana: "かれににほんごをおしえてあげました。", romaji: "Kare ni nihongo o oshiete agemashita.", tip: "Doing a favor for someone (あげる)." },
      { id: 2, english: "He bought me a book.", japanese: "彼が本を買ってくれました。", kana: "かれがほんをかってくれました。", romaji: "Kare ga hon o katte kuremashita.", tip: "Someone doing a favor for me (くれる)." },
      { id: 3, english: "I had my friend help me.", japanese: "友達に手伝ってもらいました。", kana: "ともだちにてつだってもらいました。", romaji: "Tomodachi ni tetsudatte moraimashita.", tip: "Receiving a favor (もらう)." },
      { id: 4, english: "I will lend you my umbrella.", japanese: "傘を貸してあげます。", kana: "かさをかしてあげます。", romaji: "Kasa o kashite agemasu.", tip: "Polite offer." },
      { id: 5, english: "Please explain it to me.", japanese: "説明してくれませんか。", kana: "せつめいしてくれませんか。", romaji: "Setsumei shite kuremasen ka.", tip: "Requesting a favor." }
    ]
  },

  // Comparison, Contrast & Limits
  "AよりBのほうが… (B is more… than A)": {
    usage: "AよりBのほうが + Adjective",
    exercises: [
      { id: 1, english: "Trains are faster than buses.", japanese: "バスより電車のほうが速いです。", kana: "ばすよりでんしゃのほうがはやいです。", romaji: "Basu yori densha no hou ga hayai desu.", tip: "B (Train) is more (fast) than A (Bus)." },
      { id: 2, english: "Meat is more delicious than fish.", japanese: "魚より肉のほうがおいしいです。", kana: "さかなよりにくのほうがおいしいです。", romaji: "Sakana yori niku no hou ga oishii desu.", tip: "Comparing two items directly." },
      { id: 3, english: "Today is hotter than yesterday.", japanese: "昨日より今日のほうが暑いです。", kana: "きのうよりきょうのほうがあついです。", romaji: "Kinou yori kyou no hou ga atsui desu.", tip: "Comparing days." },
      { id: 4, english: "He is taller than me.", japanese: "私より彼のほうが背が高いです。", kana: "わたしよりかれのほうがせがたかいです。", romaji: "Watashi yori kare no hou ga se ga takai desu.", tip: "Comparing people." },
      { id: 5, english: "A car is more convenient than a bicycle.", japanese: "自転車より車のほうが便利です。", kana: "じてんしゃよりくるまのほうがべんりです。", romaji: "Jitensha yori kuruma no hou ga benri desu.", tip: "Na-adj 便利." }
    ]
  },
  "AはBほど～ない (A is not as… as B)": {
    usage: "A は B ほど + Negative",
    exercises: [
      { id: 1, english: "Today is not as hot as yesterday.", japanese: "今日は昨日ほど暑くないです。", kana: "きょうはきのうほどあつくないです。", romaji: "Kyou wa kinou hodo atsukunai desu.", tip: "B (yesterday) is more than A (today)." },
      { id: 2, english: "My room is not as large as yours.", japanese: "私の部屋はあなたの部屋ほど広くないです。", kana: "わたしのへやはあなたのへやほどひろくないです。", romaji: "Watashi no heya wa anata no heya hodo hirokunai desu.", tip: "Always used with a negative ending." },
      { id: 3, english: "English is not as difficult as Japanese.", japanese: "英語は日本語ほど難しくないです。", kana: "えいごはにほんごほどむずかしくないです。", romaji: "Eigo wa nihongo hodo muzukashikunai desu.", tip: "Comparing difficulty negatively." },
      { id: 4, english: "I am not as tall as him.", japanese: "私は彼ほど背が高くないです。", kana: "わたしはかれほどせがたかくないです。", romaji: "Watashi wa kare hodo se ga takakunai desu.", tip: "Comparing heights." },
      { id: 5, english: "This test was not as easy as that one.", japanese: "このテストはあのテストほど簡単じゃありませんでした。", kana: "このてすとはあのてすとほどかんたんじゃありませんでした。", romaji: "Kono tesuto wa ano tesuto hodo kantan ja arimasen deshita.", tip: "Na-adj negative." }
    ]
  },
  "～の中で一番… (the most… among)": {
    usage: "Category の中で + Item が + 一番 + Adjective",
    exercises: [
      { id: 1, english: "Among fruits, apples are the most delicious.", japanese: "果物の中で、りんごが一番おいしいです。", kana: "くだもののなかで、りんごがいちばんおいしいです。", romaji: "Kudamono no naka de, ringo ga ichiban oishii desu.", tip: "Superlative comparison." },
      { id: 2, english: "In Japan, which city is the largest?", japanese: "日本の中で、どの町が一番大きいですか。", kana: "にほんのなかで、どのまちがいちばんおおきいですか。", romaji: "Nihon no naka de, dono machi ga ichiban ookii desu ka.", tip: "Using a question word." },
      { id: 3, english: "Among my family, my father is the tallest.", japanese: "家族の中で、父が一番背が高いです。", kana: "かぞくのなかで、ちちがいちばんせがたかいです。", romaji: "Kazoku no naka de, chichi ga ichiban se ga takai desu.", tip: "Identifying the top of a group." },
      { id: 4, english: "Which is the cheapest among these?", japanese: "この中で、どれが一番安いですか。", kana: "このなかで、どれがいちばんやすいですか。", romaji: "Kono naka de, dore ga ichiban yasui desu ka.", tip: "Question word for things." },
      { id: 5, english: "Who is the strongest in the class?", japanese: "クラスの中で、誰が一番強いですか。", kana: "くらすのなかで、だれがいちばんつよいですか。", romaji: "Kurasu no naka de, dare ga ichiban tsuyoi desu ka.", tip: "Question word for people." }
    ]
  },
  "～のに (although)": {
    usage: "Plain form / Na-adj (+な) / Noun (+な) + のに",
    exercises: [
      { id: 1, english: "Although I studied, I failed the test.", japanese: "勉強したのに、テストに落ちました。", kana: "べんきょうしたのに、てすとにおちました。", romaji: "Benkyou shita noni, tesuto ni ochimashita.", tip: "Expresses surprise or dissatisfaction." },
      { id: 2, english: "Although it's cheap, it's very good.", japanese: "安いのに、とてもいいです。", kana: "やすいのに、とてもいいです。", romaji: "Yasui noni, totemo ii desu.", tip: "I-adj connects directly." },
      { id: 3, english: "Although it's Sunday, I have to work.", japanese: "日曜日なのに、働かなければなりません。", kana: "にちようびなのに、はたらかなければなりません。", romaji: "Nichiyoubi na noni, hatarakanakereba narimasen.", tip: "Noun requires な." },
      { id: 4, english: "Although I took medicine, I didn't get better.", japanese: "薬を飲んだのに、よくなりませんでした。", kana: "くすりをのんだのに、よくなりませんでした。", romaji: "Kusuri o nonda noni, yokunarimasen deshita.", tip: "Contrary expectation." },
      { id: 5, english: "Although he is quiet, he is strong.", japanese: "静かなのに、彼は強いです。", kana: "しずかなのに、かれはつよいです。", romaji: "Shizuka na noni, kare wa tsuyoi desu.", tip: "Na-adj requires な." }
    ]
  },
  "～だけ (only)": {
    usage: "Noun + だけ",
    exercises: [
      { id: 1, english: "I only have 100 yen.", japanese: "百円だけあります。", kana: "ひゃくえんだけあります。", romaji: "Hyakuen dake arimasu.", tip: "Followed by positive verb." },
      { id: 2, english: "Only Tanaka came.", japanese: "田中さんだけ来ました。", kana: "たなかさんだけきました。", romaji: "Tanaka-san dake kimashita.", tip: "Limiting the subject." },
      { id: 3, english: "Please wait only 5 minutes.", japanese: "五分だけ待ってください。", kana: "ごふんだけまってください。", romaji: "Gofun dake matte kudasai.", tip: "Limiting time." },
      { id: 4, english: "I only drank water.", japanese: "水だけ飲みました。", kana: "みずだけのみました。", romaji: "Mizu dake nomimashita.", tip: "Replaces particles を/が." },
      { id: 5, english: "I only want this.", japanese: "これだけほしいです。", kana: "これだけほしいです。", romaji: "Kore dake hoshii desu.", tip: "Exclusive desire." }
    ]
  },
  "～しか～ない (only [negative])": {
    usage: "Noun + しか + Negative Verb",
    exercises: [
      { id: 1, english: "I only have 100 yen.", japanese: "百円しかありません。", kana: "ひゃくえんしかありません。", romaji: "Hyakuen shika arimasen.", tip: "Means the same as dake, but with a stronger feeling of lack." },
      { id: 2, english: "I can only speak Japanese.", japanese: "日本語しか話せません。", kana: "にほんごしかはなせません。", romaji: "Nihongo shika hanasemasen.", tip: "Cannot speak anything else." },
      { id: 3, english: "Only one person came.", japanese: "一人しか来ませんでした。", kana: "ひとりしかきませんでした。", romaji: "Hitori shika kimasen deshita.", tip: "Always requires a negative verb." },
      { id: 4, english: "I only slept for 3 hours.", japanese: "三時間しか寝ませんでした。", kana: "さんじかんしかねませんでした。", romaji: "Sanjikan shika nemasen deshita.", tip: "Replaces particle." },
      { id: 5, english: "I can only eat vegetables.", japanese: "野菜しか食べられません。", kana: "やさいしかたべられません。", romaji: "Yasai shika taberaremasen.", tip: "Potential negative." }
    ]
  },
  "～ほかに (in addition to/except for)": {
    usage: "Noun + の + ほかに",
    exercises: [
      { id: 1, english: "Is there anything else besides this?", japanese: "これのほかに、何かありますか。", kana: "これのほかに、なにかありますか。", romaji: "Kore no hoka ni, nani ka arimasu ka.", tip: "Asking for additions." },
      { id: 2, english: "I have no money other than this.", japanese: "このほかに、お金がありません。", kana: "このほかに、おかねがありません。", romaji: "Kono hoka ni, okane ga arimasen.", tip: "Except for." },
      { id: 3, english: "Who else came besides Tanaka?", japanese: "田中さんのほかに、誰が来ましたか。", kana: "たなかさんのほかに、だれがきましたか。", romaji: "Tanaka-san no hoka ni, dare ga kimashita ka.", tip: "In addition to a person." },
      { id: 4, english: "I need nothing else besides water.", japanese: "水のほかに、何もいりません。", kana: "みずのほかに、なにもいりません。", romaji: "Mizu no hoka ni, nani mo irimasen.", tip: "Exclusion." },
      { id: 5, english: "Besides studying, I play sports.", japanese: "勉強のほかに、スポーツをします。", kana: "べんきょうのほかに、すぽーつをします。", romaji: "Benkyou no hoka ni, supootsu o shimasu.", tip: "Noun + の." }
    ]
  },
  "～として (as... / in the role of...)": {
    usage: "Noun + として",
    exercises: [
      { id: 1, english: "He works as a teacher.", japanese: "彼は先生として働いています。", kana: "かれはせんせいとしてはたらいています。", romaji: "Kare wa sensei to shite hataraite imasu.", tip: "Indicates a role or capacity." },
      { id: 2, english: "I went to Japan as an exchange student.", japanese: "留学生として日本に行きました。", kana: "りゅうがくせいとしてにほんに行きました。", romaji: "Ryuugakusei to shite nihon ni ikimashita.", tip: "Status or position." },
      { id: 3, english: "Kyoto is famous as an old city.", japanese: "京都は古い町として有名です。", kana: "きょうとはふるいまちとしてゆうめいです。", romaji: "Kyouto wa furui machi to shite yuumei desu.", tip: "Quality of a thing." },
      { id: 4, english: "I am speaking to you as a friend.", japanese: "友達として話しています。", kana: "ともだちとしてはなしています。", romaji: "Tomodachi to shite hanashite imasu.", tip: "In the capacity of." },
      { id: 5, english: "I bought it as a souvenir.", japanese: "お土産として買いました。", kana: "おみやげとしてかいました。", romaji: "Omiyage to shite kaimashita.", tip: "Purpose of an object." }
    ]
  },

  // Sequence & Listing
  "～たり～たりする (listing)": {
    usage: "Verb (ta-form) + り、Verb (ta-form) + り + する",
    exercises: [
      { id: 1, english: "On weekends, I do things like watch TV and read books.", japanese: "週末は、テレビを見たり本を読んだりします。", kana: "しゅうまつは、てれびをみたりほんをよんだりします。", romaji: "Shuumatsu wa, terebi o mitari hon o yondari shimasu.", tip: "Listing non-exhaustive actions." },
      { id: 2, english: "Yesterday, I did things like play tennis and go shopping.", japanese: "昨日は、テニスをしたり買い物をしたりしました。", kana: "きのうは、てにすをしたりかいものをしたりしました。", romaji: "Kinou wa, tenisu o shitari kaimono o shitari shimashita.", tip: "Tense is decided by the final する." },
      { id: 3, english: "It's been raining and stopping.", japanese: "雨が降ったり止んだりしています。", kana: "あめがふったりやんだりしています。", romaji: "Ame ga futtari yandari shite imasu.", tip: "Repeated opposing actions." },
      { id: 4, english: "I want to eat and drink.", japanese: "食べたり飲んだりしたいです。", kana: "たべたりのんだりしたいです。", romaji: "Tabetari nondari shitai desu.", tip: "Can be combined with other grammar forms." },
      { id: 5, english: "The price goes up and down.", japanese: "値段が上がったり下がったりします。", kana: "ねだんがあがったりさがったりします。", romaji: "Nedan ga agattari sagattari shimasu.", tip: "Fluctuation." }
    ]
  },
  "～し～し (reasons/items)": {
    usage: "Plain form + し、Plain form + し",
    exercises: [
      { id: 1, english: "This restaurant is cheap, and it's delicious.", japanese: "この店は安いし、おいしいです。", kana: "このみせはやすいし、おいしいです。", romaji: "Kono mise wa yasui shi, oishii desu.", tip: "Listing multiple reasons or characteristics." },
      { id: 2, english: "I have no money, and I have no time, so I won't go.", japanese: "お金もないし、時間もないし、行きません。", kana: "おかねもないし、じかんもないし、いきません。", romaji: "Okane mo nai shi, jikan mo nai shi, ikimasen.", tip: "Often used with 'mo' instead of 'ga'." },
      { id: 3, english: "He is smart, and he is kind.", japanese: "彼は頭がいいし、親切です。", kana: "かれはあたまがいいし、しんせつです。", romaji: "Kare wa atama ga ii shi, shinsetsu desu.", tip: "Listing good traits." },
      { id: 4, english: "It is quiet, and it is spacious.", japanese: "静かだし、広いです。", kana: "しずかだし、ひろいです。", romaji: "Shizuka da shi, hiroi desu.", tip: "Na-adj requires だ before し." },
      { id: 5, english: "I am a student, and I am busy.", japanese: "学生だし、忙しいです。", kana: "がくせいだし、いそがしいです。", romaji: "Gakusei da shi, isogashii desu.", tip: "Noun requires だ before し." }
    ]
  },

  // Nominalisation & Intention
  "こと／の (nominaliser)": {
    usage: "Verb (dictionary form) + こと/の",
    exercises: [
      { id: 1, english: "Reading books is fun.", japanese: "本を読むことは楽しいです。", kana: "ほんをよむことはたのしいです。", romaji: "Hon o yomu koto wa tanoshii desu.", tip: "Turns a verb into a noun." },
      { id: 2, english: "I like listening to music.", japanese: "音楽を聞くのが好きです。", kana: "おんがくをきくのがすきです。", romaji: "Ongaku o kiku no ga suki desu.", tip: "の is often used with 好き/嫌い." },
      { id: 3, english: "My hobby is taking pictures.", japanese: "私の趣味は写真を撮ることです。", kana: "わたしのしゅみはしゃしんをとることです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", tip: "こと is required before です for hobbies." },
      { id: 4, english: "I forgot to buy sugar.", japanese: "砂糖を買うのを忘れました。", kana: "さとうをかうのをわすれました。", romaji: "Satou o kau no o wasuremashita.", tip: "の is used with verbs of perception/forgetting." },
      { id: 5, english: "I know that he will come.", japanese: "彼が来るのを知っています。", kana: "かれがくるのをしっています。", romaji: "Kare ga kuru no o shitte imasu.", tip: "の used with 知っている." }
    ]
  },
  "～（よう）と思う (I think I will…)": {
    usage: "Verb (volitional form) + と思う",
    exercises: [
      { id: 1, english: "I think I will go to Japan next year.", japanese: "来年、日本へ行こうと思います。", kana: "らいねん、にほんへいこうとおもいます。", romaji: "Rainen, nihon e ikou to omoimasu.", tip: "Expresses speaker's intention. 行こう is volitional of 行く." },
      { id: 2, english: "I think I will buy a new car.", japanese: "新しい車を買おうと思います。", kana: "あたらしいくるまをかおうとおもいます。", romaji: "Atarashii kuruma o kaou to omoimasu.", tip: "Volitional of 買う is 買おう." },
      { id: 3, english: "I think I will study tonight.", japanese: "今夜、勉強しようと思います。", kana: "こんや、べんきょうしようとおもいます。", romaji: "Konya, benkyou shiyou to omoimasu.", tip: "Volitional of する is しよう." },
      { id: 4, english: "I've been thinking of going tomorrow.", japanese: "明日行こうと思っています。", kana: "あしたいこうとおもっています。", romaji: "Ashita ikou to omotte imasu.", tip: "と思っています shows a sustained intention." },
      { id: 5, english: "I think I will eat this.", japanese: "これを食べようと思います。", kana: "これをたべようとおもいます。", romaji: "Kore o tabeyou to omoimasu.", tip: "Volitional of 食べる is 食べよう." }
    ]
  },
  "Verb (Potential Form) (can do)": {
    usage: "Verb (potential form: e-段/られる)",
    exercises: [
      { id: 1, english: "I can speak Japanese.", japanese: "日本語が話せます。", kana: "にほんごがはなせます。", romaji: "Nihongo ga hanasemasu.", tip: "話す -> 話せる. Particle を usually becomes が." },
      { id: 2, english: "I can eat natto.", japanese: "納豆が食べられます。", kana: "なっとうがたべられます。", romaji: "Nattou ga taberaremasu.", tip: "食べる -> 食べられる." },
      { id: 3, english: "I cannot go tomorrow.", japanese: "明日は行けません。", kana: "あしたはいけません。", romaji: "Ashita wa ikemasen.", tip: "行く -> 行ける -> 行けない." },
      { id: 4, english: "Can you read kanji?", japanese: "漢字が読めますか。", kana: "かんじがよめますか。", romaji: "Kanji ga yomemasu ka.", tip: "読む -> 読める." },
      { id: 5, english: "He can come to the party.", japanese: "彼はパーティーに来られます。", kana: "かれはぱーてぃーにこられます。", romaji: "Kare wa paatii ni koraremasu.", tip: "来る -> 来られる." }
    ]
  }
};
