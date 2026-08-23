import type { GrammarLevel } from './types.js';

export const grammarLevels: GrammarLevel[] = [
  {
    level: "Level 1",
    description: "Foundational Grammar",
    sections: [
      {
        title: "Basic Actions & Requests",
        items: [
          "～ましょう (let’s)",
          "～てください (please do)",
          "～ている (ongoing action/state)"
        ]
      },
      {
        title: "Time & Sequence",
        items: [
          "～とき (when...)",
          "～前に (before...)",
          "～てから (after)",
          "～た後で (after doing…)",
          "～ながら (while)"
        ]
      },
      {
        title: "Reason, Purpose & Conjunctions",
        items: [
          "～から (because - subjective)",
          "～ので (because - objective)",
          "～が (but)",
          "～けど／けれど／けれども (but - casual/polite)",
          "～ても／でも (even if)",
          "Place へ Verb Stem に行く・来る (purpose)"
        ]
      },
      {
        title: "Ability, Preference & Definition",
        items: [
          "～ことができる (can do)",
          "～ことが好き／きらい／上手／下手 だ",
          "～について (about)",
          "～という (called/that says)"
        ]
      },
      {
        title: "Desire & Intention",
        items: [
          "～たい (want to do)",
          "～がほしい (want - object)",
          "～てほしい (want someone to…)",
          "～つもりだ (intend to)"
        ]
      },
      {
        title: "Probability / Guess",
        items: [
          "～と思う (I think)",
          "～でしょう (probably)",
          "～かもしれない (maybe)",
          "～みたいだ (looks like)",
          "～ようだ (seems like)"
        ]
      }
    ]
  },
  {
    level: "Level 2",
    description: "Common & Essential Grammar",
    sections: [
      {
        title: "Essential Conditionals",
        items: [
          "～たら (if/when…)",
          "～と (natural consequence)",
          "～ば (if…)",
          "～なら (if [contextual]…)"
        ]
      },
      {
        title: "Hearsay & Conjecture",
        items: [
          "～によると…～そうだ (According to… I heard)",
          "～らしい (apparently)",
          "～ようだ／みたいだ (seems / looks like)"
        ]
      },
      {
        title: "Ease, Excess & Methods",
        items: [
          "～やすい／にくい (easy to/hard to)",
          "～すぎる (too much)",
          "～方 (way of doing)"
        ]
      },
      {
        title: "Change & Completion",
        items: [
          "～ようになる (become able to / habit)",
          "い-adj → ～くなる / な-adj → ～になる (to become…)",
          "～てしまう (completely/regret)"
        ]
      },
      {
        title: "Requests, Advice & Obligations",
        items: [
          "～てもいい (may)",
          "～てはいけない (must not)",
          "～なければならない / ～なければいけない (must)",
          "～なくてもいい (don’t have to)",
          "～た・ないほうがいい (had better/better not)",
          "～てはだめだ (must not - casual)"
        ]
      },
      {
        title: "Experiences & Giving",
        items: [
          "～たことがある (have done before)",
          "～てみる (try)",
          "～てあげる／くれる／もらう (giving/receiving favors)"
        ]
      },
      {
        title: "Comparison, Contrast & Limits",
        items: [
          "AよりBのほうが… (B is more… than A)",
          "AはBほど～ない (A is not as… as B)",
          "～の中で一番… (the most… among)",
          "～のに (although)",
          "～だけ (only)",
          "～しか～ない (only [negative])",
          "～ほかに (in addition to/except for)",
          "～として (as... / in the role of...)"
        ]
      },
      {
        title: "Sequence & Listing",
        items: [
          "～たり～たりする (listing)",
          "～し～し (reasons/items)"
        ]
      },
      {
        title: "Nominalisation",
        items: [
          "こと／の (nominaliser)"
        ]
      },
      {
        title: "Intention",
        items: [
          "～（よう）と思う (I think I will…)"
        ]
      },
      {
        title: "Ability & Potential",
        items: [
          "Verb (Potential Form) (can do)"
        ]
      }
    ]
  },
  {
    level: "Level 3",
    description: "Advanced Connectors & Nuance",
    sections: [
      {
        title: "Time & Timing",
        items: [
          "～うちに (before change / while)",
          "～間に (during / while)",
          "～ところ (when/about to do)"
        ]
      },
      {
        title: "Purpose, Decisions & Logic",
        items: [
          "～ために (in order to)",
          "～ように (so that / purpose)",
          "～ことにする (I decide to…)",
          "～ことになる (it has been decided…)",
          "～わけだ (that’s why / means…)"
        ]
      },
      {
        title: "Advanced Relations",
        items: [
          "～だけでなく／～ばかりでなく (not only..., but also...)",
          "～に比べて… (compared to…)",
          "～かわりに (instead of…)",
          "～にとって (for/to…)"
        ]
      },
      {
        title: "Complex Causes",
        items: [
          "～せいで (because, negative)",
          "～おかげで (thanks to)",
          "～結果（けっか） (as a result)"
        ]
      },
      {
        title: "Expectation & Necessity",
        items: [
          "～はずだ／はずがない (expected to/cannot be)",
          "～べきだ／べきではない (should/should not)",
          "～必要がある (necessary to)",
          "～ことをおすすめします (I recommend…)"
        ]
      },
      {
        title: "Nuance & Uncertainty",
        items: [
          "～かどうか (whether or not)",
          "～ばかり (nothing but)"
        ]
      }
    ]
  },
  {
    level: "Level 4",
    description: "Idioms & Advanced Phrasing",
    sections: [
      {
        title: "Passive / Causative (Core VCE)",
        items: [
          "受け身：Vられる (Passive)",
          "使役：Vせる／させる (Causative)",
          "使役受け身：～させられる (Causative Passive)"
        ]
      },
      {
        title: "Partial Negation",
        items: [
          "～わけではない (doesn’t necessarily mean…)",
          "～とはかぎらない (not necessarily…)",
          "～からといって (just because...)"
        ]
      },
      {
        title: "Formal / Academic Grammar",
        items: [
          "～によって (depending on)",
          "～に対して (towards/contrasting)",
          "～から見ると (from the perspective of…)",
          "おもに (mainly/primarily)"
        ]
      },
      {
        title: "Idiomatic / Natural Expressions",
        items: [
          "～ことが多い (often happens)",
          "～ような気がする (have a feeling that)",
          "～と言われている (it is said that)",
          "～てばかりいる (doing nothing but...)"
        ]
      },
      {
        title: "Advanced Phrasing",
        items: [
          "～ば～ほど (the more… the more)",
          "と言っても過言ではない (it’s no exaggeration to say that)",
          "～ことで、…できる (by doing…, one can…)"
        ]
      }
    ]
  }
];
