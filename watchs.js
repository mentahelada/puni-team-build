const CLOCKS = [
  {
    id: "kuro-watch",
    label: "Kuro Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["shady", "eerie"] }
  },
  {
    id: "women-watch",
    label: "Women Watch",
    hpPercent: 30,
    atkPercent: 20,
    affects: { genders: ["female"] }
  },
  {
    id: "model-u2-watch",
    label: "Model U2 Watch",
    hpPercent: 10,
    atkPercent: 0,
    affects: { genders: ["female"] }
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
    affects: { tribes: ["charming", "heartful"] }
  },
  {
    id: "ysp-watch",
    label: "YSP Watch",
    hpPercent: 15,
    atkPercent: 15,
    affects: { tribes: ["brave", "tough"] }
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
  }
];