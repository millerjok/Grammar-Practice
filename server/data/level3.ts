import { GrammarData } from './types.js';

export const level3Questions: Record<string, GrammarData> = {
  // Time & Timing
  "～うちに (before change / while)": {
    usage: "Verb (dictionary/nai/te-iru) / I-adj / Na-adj (+な) / Noun (+の) + うちに",
    exercises: [
      { id: 1, english: "Let's go home before it rains.", japanese: "雨が降らないうちに、帰りましょう。", kana: "あめがふらないうちに、かえりましょう。", romaji: "Ame ga furanai uchi ni, kaerimashou.", tip: "Do something before the state changes." },
      { id: 2, english: "Please eat while it's warm.", japanese: "温かいうちに食べてください。", kana: "あたたかいうちにたべてください。", romaji: "Atatakai uchi ni tabete kudasai.", tip: "While a certain state holds true." },
      { id: 3, english: "While I was sleeping, my friend came.", japanese: "寝ているうちに、友達が来ました。", kana: "ねているうちに、ともだちがきました。", romaji: "Nete iru uchi ni, tomodachi ga kimashita.", tip: "An event happens within a timeframe." },
      { id: 4, english: "Let's travel while we are young.", japanese: "若いうちに旅行しましょう。", kana: "わかいうちにりょこうしましょう。", romaji: "Wakai uchi ni ryokou shimashou.", tip: "I-adj 直接." },
      { id: 5, english: "While I was a student, I studied a lot.", japanese: "学生のうちに、たくさん勉強しました。", kana: "がくせいのうちに、たくさんべんきょうしました。", romaji: "Gakusei no uchi ni, takusan benkyou shimashita.", tip: "Noun + の." }
    ]
  },
  "～間に (during / while)": {
    usage: "Verb (te-iru/nai) / Noun (+の) + 間に",
    exercises: [
      { id: 1, english: "While I was out, someone called.", japanese: "留守の間に、電話がありました。", kana: "るすのあいだに、でんわがありました。", romaji: "Rusu no aida ni, denwa ga arimashita.", tip: "An action happens during a time period." },
      { id: 2, english: "I will study while the baby sleeps.", japanese: "子供が寝ている間に、勉強します。", kana: "こどもがねているあいだに、べんきょうします。", romaji: "Kodomo ga nete iru aida ni, benkyou shimasu.", tip: "Te-iru form + aida ni." },
      { id: 3, english: "While you are in Japan, please visit me.", japanese: "日本にいる間に、遊びに来てください。", kana: "にほんにいるあいだに、あそびにきてください。", romaji: "Nihon ni iru aida ni, asobi ni kite kudasai.", tip: "State of being." },
      { id: 4, english: "While my mother is shopping, I waited.", japanese: "母が買い物している間に、待ちました。", kana: "ははがかいものしているあいだに、まちました。", romaji: "Haha ga kaimono shite iru aida ni, machimashita.", tip: "Simultaneous ongoing action." },
      { id: 5, english: "While it was summer vacation, I went to sea.", japanese: "夏休みの間に、海へ行きました。", kana: "なつやすみのあいだに、うみへいきました。", romaji: "Natsuyasumi no aida ni, umi e ikimashita.", tip: "Noun + の." }
    ]
  },
  "～ところ (when/about to do)": {
    usage: "Verb (dictionary / te-iru / ta) + ところ",
    exercises: [
      { id: 1, english: "I am about to go out.", japanese: "今から出かけるところです。", kana: "いまからでかけるところです。", romaji: "Ima kara dekakeru tokoro desu.", tip: "Dictionary form indicates an action about to happen." },
      { id: 2, english: "I am eating right now.", japanese: "今、ご飯を食べているところです。", kana: "いま、ごはんをたべているところです。", romaji: "Ima, gohan o tabete iru tokoro desu.", tip: "Te-iru form indicates middle of an action." },
      { id: 3, english: "I just got back.", japanese: "たった今、帰ってきたところです。", kana: "たったいま、かえってきたところです。", romaji: "Tatta ima, kaette kita tokoro desu.", tip: "Ta form indicates just completed action." },
      { id: 4, english: "The train is about to depart.", japanese: "電車が出発するところです。", kana: "でんしゃがしゅっぱつするところです。", romaji: "Densha ga shuppatsu suru tokoro desu.", tip: "Dictionary form." },
      { id: 5, english: "I was just reading a book.", japanese: "本を読んでいるところでした。", kana: "ほんをよんでいるところでした。", romaji: "Hon o yonde iru tokoro deshita.", tip: "Past ongoing action." }
    ]
  },

  // Purpose, Decisions & Logic
  "～ために (in order to)": {
    usage: "Verb (dictionary form) / Noun + の + ために",
    exercises: [
      { id: 1, english: "I am studying Japanese in order to go to Japan.", japanese: "日本へ行くために、日本語を勉強しています。", kana: "にほんへいくために、にほんごをべんきょうしています。", romaji: "Nihon e iku tame ni, nihongo o benkyou shite imasu.", tip: "Shows a clear, achievable purpose." },
      { id: 2, english: "He works hard for his family.", japanese: "彼は家族のために、よく働きます。", kana: "かれはかぞくのために、よくはたらきます。", romaji: "Kare wa kazoku no tame ni, yoku hatarakimasu.", tip: "Noun + の + ために means 'for the sake of'." },
      { id: 3, english: "I save money to buy a house.", japanese: "家を買うために、お金を貯めます。", kana: "いえをかうために、おかねをためます。", romaji: "Ie o kau tame ni, okane o tamemasu.", tip: "Usually used with volitional verbs." },
      { id: 4, english: "I run for my health.", japanese: "健康のために走っています。", kana: "けんこうのために走っています。", romaji: "Kenkou no tame ni hashitte imasu.", tip: "Noun + の." },
      { id: 5, english: "He studied hard to become a doctor.", japanese: "医者になるために、一生懸命勉強しました。", kana: "いしゃになるために、いっしょうけんめいべんきょうしました。", romaji: "Isha ni naru tame ni, isshoukenmei benkyou shimashita.", tip: "Clear goal." }
    ]
  },
  "～ように (so that / purpose)": {
    usage: "Verb (potential / nai-form) + ように",
    exercises: [
      { id: 1, english: "Please speak loudly so everyone can hear.", japanese: "みんなに聞こえるように、大きく話してください。", kana: "みんなにきこえるように、おおきくはなしてください。", romaji: "Minna ni kikoeru you ni, ookiku hanashite kudasai.", tip: "Focuses on a state to be achieved." },
      { id: 2, english: "I wrote it down so I won't forget.", japanese: "忘れないように、メモしました。", kana: "わすれないように、めもしました。", romaji: "Wasurenai you ni, memo shimashita.", tip: "Often used with negative verbs." },
      { id: 3, english: "Please close the window so the cat doesn't go out.", japanese: "猫が出ないように、窓を閉めてください。", kana: "ねこがでないように、まどをしめてください。", romaji: "Neko ga denai you ni, mado o shimete kudasai.", tip: "Non-volitional action." },
      { id: 4, english: "I sit in front so I can see.", japanese: "見えるように、前に座ります。", kana: "みえるように、まえにすわります。", romaji: "Mieru you ni, mae ni suwarimasu.", tip: "Potential verb 見える." },
      { id: 5, english: "I practice every day so I can become good.", japanese: "上手になるように、毎日練習します。", kana: "じょうずになるように、まいにちれんしゅうします。", romaji: "Jouzu ni naru you ni, mainichi renshuu shimasu.", tip: "Focus on a resulting state." }
    ]
  },
  "～ことにする (I decide to…)": {
    usage: "Verb (dictionary form / nai-form) + ことにする",
    exercises: [
      { id: 1, english: "I decided to go to Japan next year.", japanese: "来年、日本へ行くことにしました。", kana: "らいねん、にほんへいくことにしました。", romaji: "Rainen, nihon e iku koto ni shimashita.", tip: "A decision made by the speaker." },
      { id: 2, english: "I decided not to eat sweets.", japanese: "甘い物を食べないことにします。", kana: "あまいものをたべないことにします。", romaji: "Amai mono o tabenai koto ni shimasu.", tip: "Decision using negative form." },
      { id: 3, english: "I decided to wake up early every day.", japanese: "毎日、早く起きることにしました。", kana: "まいにち、はやくおきることにしました。", romaji: "Mainichi, hayaku okiru koto ni shimashita.", tip: "Past tense used for a resolved decision." },
      { id: 4, english: "I decided to buy a car.", japanese: "車を買うことにしました。", kana: "くるまをかうことにしました。", romaji: "Kuruma o kau koto ni shimashita.", tip: "Speaker's firm intention." },
      { id: 5, english: "I decided not to drink tomorrow.", japanese: "明日はお酒を飲まないことにしました。", kana: "あしたはおさけをのまないことにしました。", romaji: "Ashita wa osake o nomanai koto ni shimashita.", tip: "Negative intention." }
    ]
  },
  "～ことになる (it has been decided…)": {
    usage: "Verb (dictionary form / nai-form) + ことになる",
    exercises: [
      { id: 1, english: "It has been decided that I will transfer to Tokyo.", japanese: "東京に転勤することになりました。", kana: "とうきょうにてんきんすることになりました。", romaji: "Toukyou ni tenkin suru koto ni narimashita.", tip: "A decision made by external factors." },
      { id: 2, english: "The meeting will be held tomorrow.", japanese: "明日は会議をすることになりました。", kana: "あしたはかいぎをすることになりました。", romaji: "Ashita wa kaigi o suru koto ni narimashita.", tip: "An arranged plan or schedule." },
      { id: 3, english: "It was decided that the trip will be cancelled.", japanese: "旅行は中止になることになりました。", kana: "りょこうはちゅうしになることになりました。", romaji: "Ryokou wa chuushi ni naru koto ni narimashita.", tip: "Beyond the speaker's direct control." },
      { id: 4, english: "I will go to America next month.", japanese: "来月アメリカへ行くことになりました。", kana: "らいげつあめりかへいくことになりました。", romaji: "Raigetsu amerika e iku koto ni narimashita.", tip: "Arranged by company/others." },
      { id: 5, english: "The party is not going to happen.", japanese: "パーティーをしないことになりました。", kana: "ぱーてぃーをしないことになりました。", romaji: "Paatii o shinai koto ni narimashita.", tip: "Negative external decision." }
    ]
  },
  "～わけだ (that’s why / means…)": {
    usage: "Plain form / Na-adj (+な) / Noun (+な/の) + わけだ",
    exercises: [
      { id: 1, english: "No wonder it's cold. The window is open.", japanese: "寒いわけです。窓が開いています。", kana: "さむいわけです。まどがあいています。", romaji: "Samui wake desu. Mado ga aite imasu.", tip: "A logical conclusion based on a reason." },
      { id: 2, english: "That means he knows the truth.", japanese: "彼が本当のことを知っているわけです。", kana: "かれがほんとうのことをしっているわけです。", romaji: "Kare ga hontou no koto o shitte iru wake desu.", tip: "Concluding something from context." },
      { id: 3, english: "No wonder it's expensive. It's famous.", japanese: "高いわけです。有名です。", kana: "たかいわけです。ゆうめいです。", romaji: "Takai wake desu. Yuumei desu.", tip: "I-adj." },
      { id: 4, english: "No wonder he's smart, he studies every day.", japanese: "彼は毎日勉強するから、頭がいいわけだ。", kana: "かれはまいにちべんきょうするから、あたまがいいわけだ。", romaji: "Kare wa mainichi benkyou suru kara, atama ga ii wake da.", tip: "Reason leading to expected result." },
      { id: 5, english: "That means you don't want to go.", japanese: "行きたくないわけですね。", kana: "いきたくないわけですね。", romaji: "Ikitakunai wake desu ne.", tip: "Confirming an implicit meaning." }
    ]
  },

  // Advanced Relations
  "～だけでなく／～ばかりでなく (not only..., but also...)": {
    usage: "Noun / Plain form + だけでなく",
    exercises: [
      { id: 1, english: "Not only meat, but I also eat vegetables.", japanese: "肉だけでなく、野菜も食べます。", kana: "にくだけでなく、やさいもたべます。", romaji: "Niku dake denaku, yasai mo tabemasu.", tip: "Connecting two items." },
      { id: 2, english: "He can speak not only English but also Japanese.", japanese: "彼は英語だけでなく、日本語も話せます。", kana: "かれはえいごだけでなく、にほんごもはなせます。", romaji: "Kare wa eigo dake denaku, nihongo mo hanasemasu.", tip: "Noun + だけでなく." },
      { id: 3, english: "This book is not only interesting but also useful.", japanese: "この本は面白いだけでなく、役に立ちます。", kana: "このほんはおもしろいだけでなく、やくにたちます。", romaji: "Kono hon wa omoshiroi dake denaku, yaku ni tachimasu.", tip: "I-adjective + だけでなく." },
      { id: 4, english: "He is not only smart but also kind.", japanese: "彼は頭がいいばかりでなく、親切です。", kana: "かれはあたまがいいばかりでなく、しんせつです。", romaji: "Kare wa atama ga ii bakari denaku, shinsetsu desu.", tip: "ばかりでなく is similar but slightly formal." },
      { id: 5, english: "Not only children but adults like it too.", japanese: "子供だけでなく、大人も好きです。", kana: "こどもだけでなく、おとなもすきです。", romaji: "Kodomo dake denaku, otona mo suki desu.", tip: "Noun." }
    ]
  },
  "～に比べて… (compared to…)": {
    usage: "Noun + に比べて",
    exercises: [
      { id: 1, english: "Compared to Tokyo, Kyoto is quiet.", japanese: "東京に比べて、京都は静かです。", kana: "とうきょうにくらべて、きょうとはしずかです。", romaji: "Toukyou ni kurabete, kyouto wa shizuka desu.", tip: "Contrasting two items directly." },
      { id: 2, english: "Compared to last year, it's hot this year.", japanese: "去年に比べて、今年は暑いです。", kana: "きょねんにくらべて、ことしはあついです。", romaji: "Kyonen ni kurabete, kotoshi wa atsui desu.", tip: "Comparing timeframes." },
      { id: 3, english: "Compared to my older brother, my younger brother is tall.", japanese: "兄に比べて、弟は背が高いです。", kana: "あににくらべて、おとうとはせがたかいです。", romaji: "Ani ni kurabete, otouto wa se ga takai desu.", tip: "Contrasting people." },
      { id: 4, english: "Compared to cars, bicycles are slow.", japanese: "車に比べて、自転車は遅いです。", kana: "くるまにくらべて、じてんしゃはおそいです。", romaji: "Kuruma ni kurabete, jitensha wa osoi desu.", tip: "Contrasting objects." },
      { id: 5, english: "Compared to yesterday, I feel better today.", japanese: "昨日に比べて、今日は元気です。", kana: "きのうにくらべて、きょうはげんきです。", romaji: "Kinou ni kurabete, kyou wa genki desu.", tip: "Comparing states." }
    ]
  },
  "～かわりに (instead of…)": {
    usage: "Noun + の + かわりに / Verb (dictionary) + かわりに",
    exercises: [
      { id: 1, english: "I will go instead of my father.", japanese: "父のかわりに、私が行きます。", kana: "ちちのかわりに、わたしがいきます。", romaji: "Chichi no kawari ni, watashi ga ikimasu.", tip: "Noun + の + かわりに." },
      { id: 2, english: "Instead of buying it, I will make it.", japanese: "買うかわりに、作ります。", kana: "かうかわりに、つくります。", romaji: "Kau kawari ni, tsukurimasu.", tip: "Verb dictionary form." },
      { id: 3, english: "Instead of coffee, I drank tea.", japanese: "コーヒーのかわりに、お茶を飲みました。", kana: "こーひーのかわりに、おちゃをのみました。", romaji: "Koohii no kawari ni, ocha o nomimashita.", tip: "Replacing one item." },
      { id: 4, english: "Let's use a pen instead of a pencil.", japanese: "鉛筆のかわりに、ペンを使いましょう。", kana: "えんぴつのかわりに、ぺんをつかいましょう。", romaji: "Enpitsu no kawari ni, pen o tsukaimashou.", tip: "Noun + の." },
      { id: 5, english: "I'll help you instead of you treating me to a meal.", japanese: "ご飯をごちそうするかわりに、手伝います。", kana: "ごはんをごちそうするかわりに、てつだいます。", romaji: "Gohan o gochisou suru kawari ni, tetsudaimasu.", tip: "Exchange of actions." }
    ]
  },
  "～にとって (for/to…)": {
    usage: "Noun + にとって",
    exercises: [
      { id: 1, english: "For me, family is the most important.", japanese: "私にとって、家族が一番大切です。", kana: "わたしにとって、かぞくがいちばんたいせつです。", romaji: "Watashi ni totte, kazoku ga ichiban taisetsu desu.", tip: "From someone's perspective or standpoint." },
      { id: 2, english: "To a student, studying is a duty.", japanese: "学生にとって、勉強は義務です。", kana: "がくせいにとって、べんきょうはぎむです。", romaji: "Gakusei ni totte, benkyou wa gimu desu.", tip: "Expressing value or importance." },
      { id: 3, english: "For him, this job is difficult.", japanese: "彼にとって、この仕事は難しいです。", kana: "かれにとって、このしごとはむずかしいです。", romaji: "Kare ni totte, kono shigoto wa muzukashii desu.", tip: "Evaluating difficulty." },
      { id: 4, english: "For young people, smartphones are necessary.", japanese: "若者にとって、スマホは必要です。", kana: "わかものにとって、すまほはひつようです。", romaji: "Wakamono ni totte, sumaho wa hitsuyou desu.", tip: "Evaluating necessity." },
      { id: 5, english: "For foreigners, kanji is hard.", japanese: "外国人にとって、漢字は難しいです。", kana: "がいこくじんにとって、かんじはむずかしいです。", romaji: "Gaikokujin ni totte, kanji wa muzukashii desu.", tip: "Perspective." }
    ]
  },

  // Complex Causes
  "～せいで (because, negative)": {
    usage: "Plain form / Na-adj (+な) / Noun (+の) + せいで",
    exercises: [
      { id: 1, english: "Because of the rain, the match was cancelled.", japanese: "雨のせいで、試合が中止になりました。", kana: "あめのせいで、しあいがちゅうしになりました。", romaji: "Ame no sei de, shiai ga chuushi ni narimashita.", tip: "Blaming a negative outcome on something." },
      { id: 2, english: "Because I drank too much, my head hurts.", japanese: "飲みすぎたせいで、頭が痛いです。", kana: "のみすぎたせいで、あたまがいたいです。", romaji: "Nomisugita sei de, atama ga itai desu.", tip: "Verb ta-form." },
      { id: 3, english: "Because he was late, we missed the train.", japanese: "彼が遅れたせいで、電車に乗り遅れました。", kana: "かれがおくれたせいで、でんしゃにのりおくれました。", romaji: "Kare ga okureta sei de, densha ni noriokuremashita.", tip: "Placing fault." },
      { id: 4, english: "Because of the cold, I couldn't sleep.", japanese: "寒いせいで、眠れませんでした。", kana: "さむいせいで、ねむれませんでした。", romaji: "Samui sei de, nemuremasen deshita.", tip: "I-adj directly connects." },
      { id: 5, english: "Because it was noisy, I couldn't study.", japanese: "うるさいせいで、勉強できませんでした。", kana: "うるさいせいで、べんきょうできませんでした。", romaji: "Urusai sei de, benkyou dekimasen deshita.", tip: "I-adj." }
    ]
  },
  "～おかげで (thanks to)": {
    usage: "Plain form / Na-adj (+な) / Noun (+の) + おかげで",
    exercises: [
      { id: 1, english: "Thanks to the teacher, I passed.", japanese: "先生のおかげで、合格しました。", kana: "せんせいのおかげで、ごうかくしました。", romaji: "Sensei no okage de, goukaku shimashita.", tip: "Expressing gratitude for a positive result." },
      { id: 2, english: "Thanks to the medicine, I got better.", japanese: "薬を飲んだおかげで、よくなりました。", kana: "くすりをのんだおかげで、よくなりました。", romaji: "Kusuri o nonda okage de, yokunarimashita.", tip: "Verb ta-form." },
      { id: 3, english: "Thanks to my friend, it was fun.", japanese: "友達のおかげで、楽しかったです。", kana: "ともだちのおかげで、たのしかったです。", romaji: "Tomodachi no okage de, tanoshikatta desu.", tip: "Noun + の." },
      { id: 4, english: "Thanks to the fine weather, we could play.", japanese: "天気がいいおかげで、遊べました。", kana: "てんきがいいおかげで、あそべました。", romaji: "Tenki ga ii okage de, asobemashita.", tip: "I-adj." },
      { id: 5, english: "Thanks to you, I succeeded.", japanese: "あなたのおかげで成功しました。", kana: "あなたのおかげでせいこうしました。", romaji: "Anata no okage de seikou shimashita.", tip: "Common gratitude expression." }
    ]
  },
  "～結果（けっか） (as a result)": {
    usage: "Verb (ta-form) / Noun (+の) + 結果",
    exercises: [
      { id: 1, english: "As a result of studying hard, I passed.", japanese: "一生懸命勉強した結果、合格しました。", kana: "いっしょうけんめいべんきょうしたけっか、ごうかくしました。", romaji: "Isshoukenmei benkyou shita kekka, goukaku shimashita.", tip: "Verb ta-form + 結果." },
      { id: 2, english: "As a result of the meeting, we decided to cancel.", japanese: "会議の結果、中止になりました。", kana: "かいぎのけっか、ちゅうしになりました。", romaji: "Kaigi no kekka, chuushi ni narimashita.", tip: "Noun + の + 結果." },
      { id: 3, english: "As a result of practice, I won the match.", japanese: "練習の結果、試合に勝ちました。", kana: "れんしゅうのけっか、しあいにかちました。", romaji: "Renshuu no kekka, shiai ni kachimashita.", tip: "Noun." },
      { id: 4, english: "As a result of investigation, we found out.", japanese: "調べた結果、わかりました。", kana: "しらべたけっか、わかりました。", romaji: "Shirabeta kekka, wakarimashita.", tip: "Ta-form." },
      { id: 5, english: "As a result of discussion, we agreed.", japanese: "話し合った結果、賛成しました。", kana: "はなしあったけっか、さんせいしました。", romaji: "Hanashiatta kekka, sansei shimashita.", tip: "Ta-form." }
    ]
  },

  // Expectation & Necessity
  "～はずだ／はずがない (expected to/cannot be)": {
    usage: "Plain form / Noun (+の) + はずだ",
    exercises: [
      { id: 1, english: "He should arrive soon.", japanese: "彼はもうすぐ着くはずです。", kana: "かれはもうすぐつくはずです。", romaji: "Kare wa mousugu tsuku hazu desu.", tip: "A strong expectation based on objective facts." },
      { id: 2, english: "That cannot be true.", japanese: "そんなはずがありません。", kana: "そんなはずがありません。", romaji: "Sonna hazu ga arimasen.", tip: "Strong denial of possibility." },
      { id: 3, english: "The test should be easy.", japanese: "テストは簡単なはずです。", kana: "てすとはかんたんなはずです。", romaji: "Tesuto wa kantan na hazu desu.", tip: "Na-adjective + な + はずだ." },
      { id: 4, english: "It should be an expensive book.", japanese: "高い本のはずです。", kana: "たかいほんのはずです。", romaji: "Takai hon no hazu desu.", tip: "Noun + の." },
      { id: 5, english: "There is no way he would say that.", japanese: "彼がそんなことを言うはずがない。", kana: "かれがそんなことをいうはずがない。", romaji: "Kare ga sonna koto o iu hazu ga nai.", tip: "Strong denial of action." }
    ]
  },
  "～べきだ／べきではない (should/should not)": {
    usage: "Verb (dictionary form) + べきだ",
    exercises: [
      { id: 1, english: "You should keep promises.", japanese: "約束は守るべきです。", kana: "やくそくはまもるべきです。", romaji: "Yakusoku wa mamoru beki desu.", tip: "Strong moral obligation or advice." },
      { id: 2, english: "You should not drink alcohol.", japanese: "お酒を飲むべきではありません。", kana: "おさけをのむべきではありません。", romaji: "Osake o nomu beki dewa arimasen.", tip: "Negative is べきではない." },
      { id: 3, english: "Students should study.", japanese: "学生は勉強すべきです。", kana: "がくせいはべんきょうすべきです。", romaji: "Gakusei wa benkyou subeki desu.", tip: "する + べき becomes すべき or するべき." },
      { id: 4, english: "You should go early.", japanese: "早く行くべきですよ。", kana: "はやくいくべきですよ。", romaji: "Hayaku iku beki desu yo.", tip: "Verb dictionary form." },
      { id: 5, english: "You shouldn't buy that.", japanese: "それは買うべきじゃない。", kana: "それはかうべきじゃない。", romaji: "Sore wa kau beki janai.", tip: "Casual negative." }
    ]
  },
  "～必要がある (necessary to)": {
    usage: "Verb (dictionary form) / Noun (+の) + 必要がある",
    exercises: [
      { id: 1, english: "It is necessary to go to the hospital.", japanese: "病院へ行く必要があります。", kana: "びょういんへいくひつようがあります。", romaji: "Byouin e iku hitsuyou ga arimasu.", tip: "Objective necessity." },
      { id: 2, english: "There is no need to hurry.", japanese: "急ぐ必要はありません。", kana: "いそぐひつようはありません。", romaji: "Isogu hitsuyou wa arimasen.", tip: "Negative indicates lack of necessity." },
      { id: 3, english: "It is necessary to study English.", japanese: "英語の勉強が必要です。", kana: "えいごのべんきょうがひつようです。", romaji: "Eigo no benkyou ga hitsuyou desu.", tip: "Noun directly." },
      { id: 4, english: "I need to talk to the teacher.", japanese: "先生と話す必要があります。", kana: "せんせいとはなすひつようがあります。", romaji: "Sensei to hanasu hitsuyou ga arimasu.", tip: "Verb dictionary form." },
      { id: 5, english: "There is no need to worry.", japanese: "心配する必要はない。", kana: "しんぱいするひつようはない。", romaji: "Shinpai suru hitsuyou wa nai.", tip: "Casual negative." }
    ]
  },
  "～ことをおすすめします (I recommend…)": {
    usage: "Verb (dictionary/ta form) + ことをおすすめします",
    exercises: [
      { id: 1, english: "I recommend going early.", japanese: "早く行くことをおすすめします。", kana: "はやくいくことをおすすめします。", romaji: "Hayaku iku koto o osusume shimasu.", tip: "Polite recommendation." },
      { id: 2, english: "I recommend eating this.", japanese: "これを食べることをおすすめします。", kana: "これをたべることをおすすめします。", romaji: "Kore o taberu koto o osusume shimasu.", tip: "Suggesting food." },
      { id: 3, english: "I recommend trying to do it once.", japanese: "一度やってみることをおすすめします。", kana: "いちどやってみることをおすすめします。", romaji: "Ichido yatte miru koto o osusume shimasu.", tip: "With te-miru form." },
      { id: 4, english: "I recommend booking the hotel.", japanese: "ホテルを予約することをおすすめします。", kana: "ほてるをよやくすることをおすすめします。", romaji: "Hoteru o yoyaku suru koto o osusume shimasu.", tip: "Travel advice." },
      { id: 5, english: "I recommend buying it now.", japanese: "今買うことをおすすめします。", kana: "いまかうことをおすすめします。", romaji: "Ima kau koto o osusume shimasu.", tip: "Dictionary form." }
    ]
  },

  // Nuance & Uncertainty
  "～かどうか (whether or not)": {
    usage: "Plain form + かどうか",
    exercises: [
      { id: 1, english: "I don't know whether he will come or not.", japanese: "彼が来るかどうか分かりません。", kana: "かれがくるかどうかわかりません。", romaji: "Kare ga kuru ka dou ka wakarimasen.", tip: "Embedded yes/no question." },
      { id: 2, english: "Please check whether it is correct.", japanese: "正しいかどうか確認してください。", kana: "ただしいかどうかかくにんしてください。", romaji: "Tadashii ka dou ka kakunin shite kudasai.", tip: "I-adjective directly connects." },
      { id: 3, english: "I will ask whether we can go or not.", japanese: "行けるかどうか聞いてみます。", kana: "いけるかどうかきいてみます。", romaji: "Ikeru ka dou ka kiite mimasu.", tip: "Used with potential form." },
      { id: 4, english: "I don't know whether he is a teacher.", japanese: "先生かどうか分かりません。", kana: "せんせいかどうかわかりません。", romaji: "Sensei ka dou ka wakarimasen.", tip: "Noun directly without だ." },
      { id: 5, english: "Check whether it rained yesterday.", japanese: "昨日雨が降ったかどうか確認して。", kana: "きのうあめがふったかどうかかくにんして。", romaji: "Kinou ame ga futta ka dou ka kakunin shite.", tip: "Past tense." }
    ]
  },
  "～ばかり (nothing but)": {
    usage: "Noun / Verb (te-form) + ばかり",
    exercises: [
      { id: 1, english: "He is doing nothing but playing games.", japanese: "彼はゲームばかりしています。", kana: "かれはげーむばかりしています。", romaji: "Kare wa geemu bakari shite imasu.", tip: "Noun + ばかり." },
      { id: 2, english: "She is doing nothing but crying.", japanese: "彼女は泣いてばかりいる。", kana: "かのじょはないてばかりいる。", romaji: "Kanojo wa naite bakari iru.", tip: "Verb te-form + ばかりいる." },
      { id: 3, english: "He eats nothing but meat.", japanese: "肉ばかり食べます。", kana: "にくばかりたべます。", romaji: "Niku bakari tabemasu.", tip: "Excessive habit." },
      { id: 4, english: "I've only just arrived.", japanese: "着いたばかりです。", kana: "ついたばかりです。", romaji: "Tsuita bakari desu.", tip: "Ta form + ばかり means 'just finished'." },
      { id: 5, english: "He only watches TV.", japanese: "テレビばかり見ている。", kana: "てれびばかりみている。", romaji: "Terebi bakari mite iru.", tip: "Noun." }
    ]
  }
};
