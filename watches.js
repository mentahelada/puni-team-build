// Filter keys MUST be plural: tribes, genders, sagas, ranks, ids.
const CLOCKS = [
 {
    id: "model-u2-watch",
    label: "Model U2 Watch",
    hpPercent: 10,
    atkPercent: 0,
    affects: { genders: ["female"] }
  },
   {
    id: "kuro-watch",
    label: "Kuro Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["shady", "eriee"] }
  },
  {
    id: "ogre-watch",
    label: "Ogre Watch",
    hpPercent: 10,
    atkPercent: 20,
    affects: { sagas: ["Shadowside"] }
  },
  {
    id: "arcane-watch",
    label: "Arcane Watch",
    hpPercent: 20,
    atkPercent: 10,
    affects: { sagas: ["Shadowside"] }
  },
  {
    id: "animus-watch",
    label: "Animus Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["mysterious", "slippery"] }
  },
  {
    id: "elder-god-watch",
    label: "Elder God Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["charming", "heartfull"] }
  },
  {
    id: "ysp-watch",
    label: "YSP Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["brave", "tought"] }
  },
  {
    id: "alien-watch",
    label: "Alien Watch",
    hpPercent: 25,
    atkPercent: 25,
    affects: { sagas: ["Gakuen Y"] }
  },
  {
    id: "ur-watch",
    label: "UR Watch",
    hpPercent: 30,
    atkPercent: 30,
    affects: { sagas: ["Gakuen Y"] }
  },
  {
    id: "ur-watch-gai",
    label: "UR Watch GAI",
    hpPercent: 20,
    atkPercent: 30,
    affects: { sagas: ["Gakuen Y"] }
  },
  {
    id: "majin-watch",
    label: "Majin Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["enma"] }
  },
  {
    id: "dragon-watch",
    label: "Dragon Watch",
    hpPercent: 30,
    atkPercent: 20,
    affects: { sagas: ["Dragonslayer"] }
  },
  {
    id: "dragon-god-watch",
    label: "Dragon God Watch",
    hpPercent: 20,
    atkPercent: 30,
    affects: { sagas: ["Dragonslayer"] }
  },
  {
    id: "true-dragon-god-watch",
    label: "True Dragon God Watch",
    hpPercent: 25,
    atkPercent: 35,
    affects: { sagas: ["Dragonslayer"] },
    tiers: [
      { hpPercent: 25, atkPercent: 10 },
      { hpPercent: 25, atkPercent: 15 },
      { hpPercent: 25, atkPercent: 20 },
      { hpPercent: 25, atkPercent: 25 },
      { hpPercent: 25, atkPercent: 35 }
    ]
  },
  {
    id: "youma-shogi-watch",
    label: "Youma Shogi Watch",
    hpPercent: 30,
    atkPercent: 30,
    affects: { sagas: ["Shogi"] }
  },
  {
    id: "youmajin-watch",
    label: "Youmajin Watch",
    hpPercent: 20,
    atkPercent: 30,
    affects: { sagas: ["Youmajin"] }
  },
  {
    id: "nyaight-watch",
    label: "Nyaight Watch",
    hpPercent: 20,
    atkPercent: 20,
    affects: { tribes: ["Charming"] }
  },
  {
    id: "double-youmajin-watch",
    label: "Double Youmajin Watch",
    hpPercent: 35,
    atkPercent: 25,
    affects: { sagas: ["Youmajin"] },
    tiers: [
      { hpPercent: 10, atkPercent: 25 },
      { hpPercent: 15, atkPercent: 25 },
      { hpPercent: 20, atkPercent: 25 },
      { hpPercent: 25, atkPercent: 25 },
      { hpPercent: 35, atkPercent: 25 }
    ]
  },
  {
    id: "punigami-watch",
    label: "Punigami Watch",
    hpPercent: 20,
    atkPercent: 30,
    affects: { sagas: ["Punigamis Darkness", "Puni Puni vs Kachi Kachi"] }
  },
  {
    id: "legendary-king-watch",
    label: "Legendary King Watch",
    hpPercent: 30,
    atkPercent: 30,
    affects: { sagas: ["Tale of King Nyarthur"] },
    tiers: [
      { hpPercent: 5, atkPercent: 5 },
      { hpPercent: 10, atkPercent: 10 },
      { hpPercent: 15, atkPercent: 15 },
      { hpPercent: 20, atkPercent: 20 },
      { hpPercent: 30, atkPercent: 30 }
    ]
  },
  {
    id: "star-dragon-watch",
    label: "Star Dragon Watch",
    hpPercent: 20,
    atkPercent: 20,
    affects: { tribes: ["Slippery"] }
  },
  {
    id: "cross-watch",
    label: "Cross Watch",
    hpPercent: 20,
    atkPercent: 20,
    affects: { tribes: ["Enma"] }
  },
  {
    id: "union-watch",
    label: "Union Watch",
    hpPercent: 20,
    atkPercent: 20,
    affects: { tribes: ["Brave"] }
  },
  {
    id: "god-union-watch",
    label: "God Union Watch",
    hpPercent: 30,
    atkPercent: 35,
    affects: { sagas: ["Youmajin"] },
    tiers: [
      { hpPercent: 5, atkPercent: 10 },
      { hpPercent: 10, atkPercent: 15 },
      { hpPercent: 15, atkPercent: 20 },
      { hpPercent: 20, atkPercent: 25 },
      { hpPercent: 30, atkPercent: 35 }
    ]
  },
  {
    id: "lotus-watch",
    label: "Lotus Watch",
    hpPercent: 0,
    atkPercent: 30,
    affects: { tribes: ["Charming"] },
    centerOnly: true
  },
  {
    id: "galaxy-watch",
    label: "Galaxy Watch",
    hpPercent: 30,
    atkPercent: 20,
    affects: { sagas: ["Galaxy Watch"] }
  },
  {
    id: "true-star-dragon-watch",
    label: "True Star Dragon Watch",
    hpPercent: 0,
    atkPercent: 50,
    affects: { tribes: ["Slippery"] },
    centerOnly: true
  },
  {
    id: "supernova-watch",
    label: "Supernova Watch",
    hpPercent: 20,
    atkPercent: 20,
    affects: { tribes: ["Heartfull"] }
  },
  {
    id: "hololive-watch",
    label: "Hololive Watch",
    hpPercent: 20,
    atkPercent: 30,
    affects: { sagas: ["Hololive"] }
  },
  {
    id: "crown-watch",
    label: "Crown Watch",
    hpPercent: 30,
    atkPercent: 30,
    affects: { ranks: ["Uz+"] }
  },
  {
    id: "inazuma-watch",
    label: "Inazuma Watch",
    hpPercent: 35,
    atkPercent: 35,
    affects: { sagas: ["Inazuma Eleven"] }
  },
  {
    id: "women-watch",
    label: "Women Watch",
    hpPercent: 30,
    atkPercent: 20,
    affects: { genders: ["female"] }
  },
  {
    id: "courage-watch",
    label: "Courage Watch",
    hpPercent: 25,
    atkPercent: 25,
    affects: { tribes: ["Brave", "Enma"] }
  }
];
