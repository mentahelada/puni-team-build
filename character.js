const characters = [
  {
    id: "women-enma",
    name: "Women Enma",
    tribe: "Brave",
    gender: "female",
    saga: "13 anniversary",
    rank: "UZ++",
    hp0: 1980,
    hp10: 2376,
    atk0: 1850,
    atk10: 2220,
    image: "img/Womenenma.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Brave"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "u-robonyan-ma",
    name: "U robonyan MA",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ++",
    hp0: 1992,
    hp10: 2391,
    atk0: 1838,
    atk10: 2206,
    image: "img/Urobonyanma.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "kirito",
    name: "Kirito",
    tribe: "Tough",
    gender: "male",
    saga: "Sword Art Online",
    rank: "UZ++",
    hp0: 1902,
    hp10: 2282,
    atk0: 1928,
    atk10: 2314,
    image: "img/Kirito.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Tough"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "Summer-themed-leisure-mika",
    name: "Summer-Themed Leisure Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ++",
    hp0: 1882,
    hp10: 2258,
    atk0: 1948,
    atk10: 2338,
    image: "img/Summerthemedleisuremika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "chirpster",
    name: "Chirpster",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ++",
    hp0: 2047,
    hp10: 2456,
    atk0: 2070,
    atk10: 2484,
    image: "img/Chirpster.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Charming"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "chizuru-mizuhara",
    name: "Chizuru Mizuhara",
    tribe: "Charming",
    gender: "female",
    saga: "Rent a Girlfriend",
    rank: "UZ++",
    hp0: 1996,
    hp10: 2395,
    atk0: 1864,
    atk10: 2237,
    image: "img/Chizurumizuhara.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 13,
      affects: { tribes: ["Charming"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "vacation-maiden-elzemekia",
    name: "Vacation Maiden Elzemekia",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ++",
    hp0: 1956,
    hp10: 2347,
    atk0: 1951,
    atk10: 2341,
    image: "img/Vacationmaidenelzemekia.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 8,
      affects: { tribes: ["Charming"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "yotsuba-summer-memory",
    name: "Yotsuba Summer Memory",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1979,
    hp10: 2375,
    atk0: 1851,
    atk10: 2221,
    image: "img/Yotsubasummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Heartful"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "nino-summer-memory",
    name: "Nino Summer Memory",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1829,
    hp10: 2195,
    atk0: 2001,
    atk10: 2401,
    image: "img/Ninosummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Eerie"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "ichika-summer-memory",
    name: "Ichika Summer Memory",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1929,
    hp10: 2315,
    atk0: 1901,
    atk10: 2281,
    image: "img/Ichikasummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Mysterious"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "itsuki-summer-memory",
    name: "Itsuki Summer Memory",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1937,
    hp10: 2324,
    atk0: 1893,
    atk10: 2272,
    image: "img/Itsukisummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Brave"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "miku-summer-memory",
    name: "Miku Summer Memory",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1912,
    hp10: 2294,
    atk0: 1918,
    atk10: 2301,
    image: "img/Mikusummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Shady"] }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "auspicius-enma",
    name: "Auspicius Enma",
    tribe: "Enma",
    gender: "male",
    saga: "12 anniversary",
    rank: "UZ+",
    hp0: 1699,
    hp10: 2039,
    atk0: 1631,
    atk10: 1957,
    image: "img/Auspiciousenma.png",
    centerSkill: {
      hpPercent: 0,
      atkPercent: 13,
      affects: { tribes: ["Enma"] }
    }
  },
  {
    id: "mera-shishino",
    name: "Mera Shishino",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1629,
    hp10: 1955,
    atk0: 1701,
    atk10: 2041,
    image: "img/Merashishino.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 5,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "golden-claws",
    name: "Golden Claws",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1771,
    hp10: 2125,
    atk0: 1809,
    atk10: 2171,
    image: "img/Goldenclaws.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "ichika-happy-valentine",
    name: "Ichika Happy Valentine",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "img/Ichikahappyvalentine.png",
    centerSkill: {
      hpPercent: 12,
      atkPercent: 8,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    }
  },
  {
    id: "nino-happy-valentine",
    name: "Nino Happy Valentine",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1666,
    hp10: 1999,
    atk0: 1664,
    atk10: 1997,
    image: "img/Ninohappyvalentine.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 12,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    }
  },
  {
    id: "miku-happy-valentine",
    name: "Miku Happy Valentine",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1589,
    hp10: 1907,
    atk0: 1741,
    atk10: 2089,
    image: "img/Mikuhappyvalentine.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 10,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    }
  },
  {
    id: "yotsuba-happy-valentine",
    name: "Yotsuba Happy Valentine",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "img/Yotsubahappyvalentine.png",
    centerSkill: {
      hpPercent: 14,
      atkPercent: 6,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    }
  },
  {
    id: "itsuki-happy-valentine",
    name: "Itsuki Happy Valentine",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1667,
    hp10: 2000,
    atk0: 1663,
    atk10: 1996,
    image: "img/Itsukihappyvalentine.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 14,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    }
  },
  {
    id: "meteorite-asu",
    name: "Meteorite Asu",
    tribe: "Eerie",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1668,
    hp10: 2002,
    atk0: 1662,
    atk10: 1994,
    image: "img/Meteoriteasu.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "neko-elzemekia",
    name: "Neko Elzemekia",
    tribe: "Heartful",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1666,
    hp10: 1999,
    atk0: 1731,
    atk10: 2077,
    image: "img/Nekoelzemekia.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Heartful"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "usada-pekora",
    name: "Usada Pekora",
    tribe: "Heartful",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1564,
    hp10: 1877,
    atk0: 1766,
    atk10: 2119,
    image: "img/Usadapekora.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 5,
      affects: { sagas: ["Hololive"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "hibari-akane",
    name: "Hibari Akana",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1649,
    hp10: 1979,
    atk0: 1681,
    atk10: 2017,
    image: "img/Hibariakane.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 3,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "swirlious-gold",
    name: "Swirlious Gold",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1849,
    hp10: 2219,
    atk0: 1835,
    atk10: 2202,
    image: "img/Swirliousgold.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "komaki-komami-(2nd outfit)",
    name: "Komaki Komami (2nd Outfit)",
    tribe: "Charming",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1677,
    hp10: 2012,
    atk0: 1653,
    atk10: 1984,
    image: "img/Komakikomami(2ndoutfit).png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 4,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "moon-asu",
    name: "Moon Asu",
    tribe: "Mysterious",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1667,
    hp10: 2000,
    atk0: 1663,
    atk10: 1996,
    image: "img/Moonasu.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 8,
      affects: { sagas: ["Galaxy Watch"] }
    }
  },
  {
    id: "ginga-emperor-usapyon",
    name: "Ginga Emperor Usapyon",
    tribe: "Shady",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1621,
    hp10: 1945,
    atk0: 1776,
    atk10: 2131,
    image: "img/Gingaemperorusapyon.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Shady"] }
    }
  },
  {
    id: "hyakumantenbara-salome",
    name: "Hyakumantenbara Salome",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nijisanji",
    rank: "UZ+",
    hp0: 1601,
    hp10: 1921,
    atk0: 1729,
    atk10: 2075,
    image: "img/Hyakumantenbarasalome.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "mamorina",
    name: "Mamorina",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1704,
    hp10: 2045,
    atk0: 1626,
    atk10: 1951,
    image: "img/mamorina.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "yokaiju",
    name: "Yokaiju",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1780,
    hp10: 2136,
    atk0: 1800,
    atk10: 2160,
    image: "img/Yokaiju.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "wedding-megumin",
    name: "Wedding Megumin",
    tribe: "Brave",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ+",
    hp0: 1640,
    hp10: 1968,
    atk0: 1758,
    atk10: 2110,
    image: "img/Weddingmegumin.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 13,
      affects: { sagas: ["Konosuba"] }
    }
  },
  {
    id: "supernova-asu",
    name: "Supernova Asu",
    tribe: "Heartful",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "img/Supernovaasu.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: { tribes: ["Heartful"] }
    }
  },
  {
    id: "orihime-mika",
    name: "Orihime Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1726,
    hp10: 2071,
    atk0: 1676,
    atk10: 2011,
    image: "img/Orihimemika.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "12-super-gods-jibanyan",
    name: "12 Super Gods Jibanyan",
    tribe: "Tough",
    gender: "male",
    saga: "12 anniversary",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "img/Zodiacjibanyan.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: { tribes: ["Tough"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "young-bourgeoisG",
    name: "Young BourgeoisG",
    tribe: "Heartful",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1635,
    hp10: 1962,
    atk0: 1695,
    atk10: 2034,
    image: "img/Youngbourgeoisg.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 6,
      affects: { sagas: ["100 Tales"] }
    }
  },
  {
    id: "headasteam",
    name: "Headasteam",
    tribe: "Heartful",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1810,
    hp10: 2172,
    atk0: 1770,
    atk10: 2124,
    image: "img/Headasteam.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { tribes: ["Heartful"] }
    }
  },
  {
    id: "master-roxy",
    name: "Master Roxy",
    tribe: "Slippery",
    gender: "female",
    saga: "Mushoku Tensei",
    rank: "UZ+",
    hp0: 1630,
    hp10: 1956,
    atk0: 1700,
    atk10: 2040,
    image: "img/Masterroxy.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: { tribes: ["Slippery"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "ancient-enma",
    name: "Ancient Enma",
    tribe: "Enma",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1565,
    hp10: 1878,
    atk0: 1765,
    atk10: 2118,
    image: "img/Ancientenma.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Enma"] }
    }
  },
  {
    id: "Dame-dedtime",
    name: "Dame Dedtime",
    tribe: "Shady",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1756,
    hp10: 2107,
    atk0: 1641,
    atk10: 1969,
    image: "img/Damededtime.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: { tribes: ["Shady"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "demon-lord-rimuru",
    name: "Demon Lord Rimuru",
    tribe: "Eerie",
    gender: "male",
    saga: "Tensura",
    rank: "UZ+",
    hp0: 1600,
    hp10: 1920,
    atk0: 1730,
    atk10: 2076,
    image: "img/Demonlordrimuru.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Eerie"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "mikazuki",
    name: "Mikazuki",
    tribe: "Charming",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1683,
    hp10: 2020,
    atk0: 1647,
    atk10: 1976,
    image: "img/Mikazuki.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 2,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "retinado",
    name: "Retinado",
    tribe: "Eerie",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1739,
    hp10: 2087,
    atk0: 1841,
    atk10: 2209,
    image: "img/Retinado.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "sport-day-blizzaria",
    name: "Sport Day Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1631,
    hp10: 1957,
    atk0: 1699,
    atk10: 2039,
    image: "img/Sportdayblizzaria.png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 6,
      affects: { genders: ["female"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "halloween-marine",
    name: "Halloween Marine",
    tribe: "Slippery",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1628,
    hp10: 1954,
    atk0: 1648,
    atk10: 1978,
    image: "img/Halloweenmarine.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Slippery"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "punipuni-kakusei-katie",
    name: "Puni Puni Kakusei Katei",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1700,
    atk10: 2040,
    image: "img/Punipunikatie.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "king-jibanyan",
    name: "King Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1660,
    hp10: 1992,
    atk0: 1670,
    atk10: 2004,
    image: "img/Kingjibanyan.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 9,
      affects: { tribes: ["Charming"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "parade-enma",
    name: "Parade Enma",
    tribe: "Enma",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1670,
    hp10: 2004,
    atk0: 1660,
    atk10: 1992,
    image: "img/Paradeenma.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Enma"] }
    }
  },
  {
    id: "king-komasan",
    name: "King Komasan",
    tribe: "Charming",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1716,
    atk10: 2059,
    image: "img/Kingkomasan.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "puni-king",
    name: "Puni King",
    tribe: "Brave",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1647,
    hp10: 1977,
    atk0: 1683,
    atk10: 2020,
    image: "img/Puniking.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Brave"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "zazel-tentacles",
    name: "Zazel (tentacles)",
    tribe: "Slippery",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1831,
    hp10: 2197,
    atk0: 1749,
    atk10: 2099,
    image: "img/zazel(tentacles).png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: { tribes: ["Slippery"] }
    }
  },
  {
    id: "frieren",
    name: "Frieren",
    tribe: "Slippery",
    gender: "female",
    saga: "Frieren Beyond Journeys End",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "img/Frieren.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: { tribes: ["Slippery"] }
    }
  },
  {
    id: "himmel",
    name: "Himmel",
    tribe: "Brave",
    gender: "male",
    saga: "Frieren Beyond Journeys End",
    rank: "UZ+",
    hp0: 1671,
    hp10: 2006,
    atk0: 1659,
    atk10: 1991,
    image: "img/Himmel.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Brave"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "super-puni-king",
    name: "Super Puni King",
    tribe: "Tough",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1650,
    hp10: 1980,
    atk0: 1680,
    atk10: 2016,
    image: "img/Superpuniking.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Tough"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "World-Dedtime",
    name: "World Dedtime",
    tribe: "Shady",
    gender: "female",
    saga: "10th anniversary",
    rank: "UZ+",
    hp0: 1624,
    hp10: 1949,
    atk0: 1704,
    atk10: 2045,
    image: "img/Worlddedtime.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: { tribes: ["Shady"] }
    }
  },
  {
    id: "Yabusame-Zazel",
    name: "Yabusame Zazel",
    tribe: "Shady",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1765,
    atk10: 2118,
    image: "img/Yabusamezazel.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Shady"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "destin-billows",
    name: "Destin Billows",
    tribe: "Brave",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "img/Destinbillows.png",
    centerSkill: {
      hpPercent: 14,
      atkPercent: 6,
      affects: { sagas: ["Inazuma Eleven"] }
    }
  },
  {
    id: "harper-evans",
    name: "Harper Evans",
    tribe: "Tough",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ+",
    hp0: 1707,
    hp10: 2048,
    atk0: 1688,
    atk10: 2026,
    image: "img/Harperevans.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "mera-shishino-(3rd outfit)",
    name: "Mera Shishino (3rd outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1665,
    hp10: 1998,
    atk0: 1665,
    atk10: 1998,
    image: "img/Merashishino(3rdoutfit).png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 6,
      affects: { genders: ["female"] }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: { saga: "Idol Royale" }
    }
  },
  {
    id: "ashuramii",
    name: "AshuRamii",
    tribe: "Tough",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1652,
    hp10: 1982,
    atk0: 1678,
    atk10: 2014,
    image: "img/Ashuramii.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 7,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "massiface",
    name: "Massiface",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1863,
    hp10: 2236,
    atk0: 1717,
    atk10: 2060,
    image: "img/Massiface.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "lelouch",
    name: "Lelouch",
    tribe: "Shady",
    gender: "male",
    saga: "Code Geass",
    rank: "UZ+",
    hp0: 1692,
    hp10: 2030,
    atk0: 1638,
    atk10: 1966,
    image: "img/Lelouch.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { tribes: ["Shady"] }
    }
  },
  {
    id: "suzaku",
    name: "Suzaku",
    tribe: "Brave",
    gender: "male",
    saga: "Code Geass",
    rank: "UZ+",
    hp0: 1669,
    hp10: 2003,
    atk0: 1661,
    atk10: 1993,
    image: "img/Suzaku.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Brave"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "valentine-mika",
    name: "Valentine Mika",
    tribe: "Heartful",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1730,
    hp10: 2076,
    atk0: 1667,
    atk10: 2000,
    image: "img/Valentinemika.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { tribes: ["Heartful"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "valentine-orochi",
    name: "Valentine Orochi",
    tribe: "Slippery",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1663,
    hp10: 1996,
    atk0: 1667,
    atk10: 2000,
    image: "img/Valentineorochi.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Slippery"] }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: { saga: "100 Tales" }
    }
  },
  {
    id: "ukoi-tanone",
    name: "Ukoi Tanone",
    tribe: "Eerie",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "img/ukoitanone.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "bloodybattleprixmika",
    name: "Bloody Battle Grand Prix Mika",
    tribe: "Brave",
    gender: "female",
    saga: "Bloody Popularity Poll",
    rank: "UZ+",
    hp0: 1643,
    hp10: 1972,
    atk0: 1687,
    atk10: 2024,
    image: "img/Greatbloodyprixmika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Brave"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "great-bloody-battle-god-snottle",
    name: "God Evil Mike Snottle",
    tribe: "Mysterious",
    gender: "male",
    saga: "Bloody Popularity Poll",
    rank: "UZ+",
    hp0: 1696,
    hp10: 2036,
    atk0: 1634,
    atk10: 1961,
    image: "img/Mike85.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "yohko-komashura",
    name: "Yohko Komasura",
    tribe: "Mysterious",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1939,
    hp10: 2327,
    atk0: 1641,
    atk10: 1969,
    image: "img/yohkokomashura.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 10,
      affects: { tribes: ["Mysterious"] }
    },
    sameTeamUnity: {
      percent: 26
    }
  },
  {
    id: "mera-shishino-(4thoutfit)",
    name: "Mera Shishino (4th Outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1591,
    hp10: 1909,
    atk0: 1739,
    atk10: 2087,
    image: "img/Merashishino(4thoutfit).png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: { genders: ["female"] }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: { saga: "Idol Royale" }
    }
  },
  {
    id: "genbu-norika",
    name: "Genbu Norika",
    tribe: "Slippery",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1652,
    hp10: 1982,
    atk0: 1678,
    atk10: 2014,
    image: "img/Genbunorika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Slippery"] }
    }
  },
  {
    id: "agent-x",
    name: "Agent X",
    tribe: "Eerie",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1817,
    hp10: 2180,
    atk0: 1763,
    atk10: 2116,
    image: "img/Agentx.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "nekomata-okayu-(school)",
    name: "Nekomata Okayu (School)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1567,
    hp10: 1880,
    atk0: 1763,
    atk10: 2116,
    image: "img/Nekomataokayu(school).png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 7,
      affects: { sagas: ["Hololive"] }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: { saga: "Hololive" }
    }
  },
  {
    id: "houshou-marine-(school)",
    name: "Houshou Marine (school)",
    tribe: "Eerie",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "img/Houshoumarine(school).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "tsunomaki-watame-(school)",
    name: "Tsunomaki Watame (School)",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1631,
    hp10: 1957,
    atk0: 1699,
    atk10: 2039,
    image: "img/Tsunomakiwatame(school).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "j-power-transform",
    name: "J Power Transform",
    tribe: "Brave",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1698,
    atk10: 2038,
    image: "img/Jpowertransform.png",
    centerSkill: {
      hpPercent: 12,
      atkPercent: 5,
      affects: { sagas: ["100 Tales"] }
    }
  },
  {
    id: "nyanjpt",
    name: "Nyanjpt",
    tribe: "Charming",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1650,
    atk10: 1980,
    image: "img/Nyanjpt.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 7,
      affects: { sagas: ["100 Tales"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "red-flash-boushinyan",
    name: "Red Flash Boushinyan",
    tribe: "Brave",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1892,
    hp10: 2270,
    atk0: 1688,
    atk10: 2026,
    image: "img/Redflashboushinyan.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 8,
      affects: { tribes: ["Brave"] }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "chansin",
    name: "Chansin (you losed xd)",
    tribe: "Brave",
    gender: "male",
    saga: "Gambler Coin",
    rank: "UZ+",
    hp0: 1815,
    hp10: 2178,
    atk0: 1515,
    atk10: 1818,
    image: "img/Chansin.png",
    centerSkill: {
      hpPercent: 11,
      atkPercent: 1,
      affects: { tribes: ["Brave"] }
    }
  },
  {
    id: "victory-last-girakoma",
    name: "Victory Last Girakoma",
    tribe: "Mysterious",
    gender: "male",
    saga: "Gambler Coin",
    rank: "UZ+",
    hp0: 1602,
    hp10: 1922,
    atk0: 1795,
    atk10: 2154,
    image: "img/Victorylastgirakoma.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 11,
      affects: { tribes: ["Mysterious"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "armed-mecha-orochi",
    name: "Armed Mecha Orochi",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1659,
    hp10: 1991,
    atk0: 1671,
    atk10: 2005,
    image: "img/Armedmechaorochi.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "black-gold-dianyan",
    name: "Black Gold Dianyan",
    tribe: "Brave",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1728,
    hp10: 2074,
    atk0: 1699,
    atk10: 2039,
    image: "img/blackgolddianyan.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: { tribes: ["Brave"] }
    }
  },
  {
    id: "shadow",
    name: "Shadow",
    tribe: "Shady",
    gender: "male",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1665,
    hp10: 1998,
    atk0: 1665,
    atk10: 1998,
    image: "img/Shadow.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Shady"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "alpha",
    name: "Alpha",
    tribe: "Slippery",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1679,
    hp10: 2015,
    atk0: 1651,
    atk10: 1981,
    image: "img/Alpha.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Slippery"] }
    }
  },
  {
    id: "beta",
    name: "Beta",
    tribe: "Charming",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "img/Beta.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Charming"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "delta",
    name: "Delta",
    tribe: "Tough",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1679,
    hp10: 2015,
    atk0: 1651,
    atk10: 1981,
    image: "img/Delta.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "mera-shishino-(final-outfit)",
    name: "Mera Shishino (Final Outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1656,
    hp10: 1987,
    atk0: 1674,
    atk10: 2009,
    image: "img/Merashishino(finaloutfit).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Brave"] }
    }
  },
  {
    id: "kessoku-inori",
    name: "Kessoku Inori",
    tribe: "Heartful",
    gender: "female",
    saga: "Medalist",
    rank: "UZ+",
    hp0: 1675,
    hp10: 2010,
    atk0: 1655,
    atk10: 1986,
    image: "img/Kessokuinori.png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 10,
      affects: { tribes: ["Heartful"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "fudo-ouka",
    name: "Fudo Ouka",
    tribe: "Enma",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1628,
    hp10: 1954,
    atk0: 1702,
    atk10: 2042,
    image: "img/Fudououka.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: { tribes: ["Enma"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "azure-storm-slurpent",
    name: "Azure Storm Slurpent",
    tribe: "Slippery",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1906,
    hp10: 2287,
    atk0: 1674,
    atk10: 2009,
    image: "img/Azurestormslurpent.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 9,
      affects: { tribes: ["Slippery"] }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "todoroki-reona-(shine-outfit)",
    name: "Todoroki Reona (Shine Outfit)",
    tribe: "Tough",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1676,
    hp10: 2011,
    atk0: 1654,
    atk10: 1985,
    image: "img/Todorokireona(shineoutfit).png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { genders: ["female"] }
    }
  },
  {
    id: "junkernaut",
    name: "Junkernaut",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1828,
    hp10: 2194,
    atk0: 1752,
    atk10: 2102,
    image: "img/Junkernaut.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: { tribes: ["Tough"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "wedding-emilia",
    name: "Wedding Emilia",
    tribe: "Heartful",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1576,
    hp10: 1891,
    atk0: 1754,
    atk10: 2105,
    image: "img/Weddingemilia.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Heartful"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "wedding-rem",
    name: "Wedding Rem",
    tribe: "Tough",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1673,
    hp10: 2008,
    atk0: 1657,
    atk10: 1988,
    image: "img/Weddingrem.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "wedding-beatrice",
    name: "Wedding Beatrice",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "img/Weddingbeatrice.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "super-awakened-emilia",
    name: "Super Awakened Emilia",
    tribe: "Heartful",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "img/Superawakenedemilia.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: { tribes: ["Heartful"] }
    }
  },
  {
    id: "super-awakened-rem",
    name: "Super Awakened Rem",
    tribe: "Tough",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1618,
    hp10: 1942,
    atk0: 1712,
    atk10: 2054,
    image: "img/Superawakenedrem.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "super-awakened-beatrice",
    name: "Super Awakened Beatrice",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "img/Superawakenedbeatrice.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "heaven-olight",
    name: "Heaven O'Light",
    tribe: "Heartful",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "img/Heavenolight.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 10,
      affects: { tribes: ["Heartful"] }
    }
  },
  {
    id: "blood-rain-hareonna-(shadow)",
    name: "Blood Rain Hareonna (Shadow)",
    tribe: "Eerie",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1699,
    hp10: 2039,
    atk0: 1631,
    atk10: 1957,
    image: "img/Bloodrainhareonna.png",
    centerSkill: {
      hpPercent: 11,
      atkPercent: 6,
      affects: { sagas: ["100 Tales"] }
    }
  },
  {
    id: "green-tree-elderbloom",
    name: "Green Tree Elderbloom",
    tribe: "Heartful",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1925,
    hp10: 2310,
    atk0: 1655,
    atk10: 1986,
    image: "img/Greentreeelderbloom.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 10,
      affects: { tribes: ["Heartful"] }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "hareonna",
    name: "Hareonna",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1656,
    hp10: 1987,
    atk0: 1674,
    atk10: 2009,
    image: "img/Hareonna.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "hibari-akane-(hydrangea-outfit)",
    name: "Hibari Akana (Hydrangea Outfit)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1734,
    hp10: 2081,
    atk0: 1663,
    atk10: 1996,
    image: "img/Hibariakane(hydrangeaoutfit).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Mysterious"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "warrior-orochi",
    name: "Warrior Orochi",
    tribe: "Slippery",
    gender: "male",
    saga: "13 anniversary",
    rank: "UZ+",
    hp0: 1562,
    hp10: 1874,
    atk0: 1768,
    atk10: 2122,
    image: "img/Warriororochi.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: { tribes: ["Slippery"] }
    }
  },
  {
    id: "demon-lord-kuubou",
    name: "Demon Lord Kuubou",
    tribe: "Eerie",
    gender: "male",
    saga: "13 anniversary",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1698,
    atk10: 2038,
    image: "img/demonlordkuubou.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "horse-girl-bunny-mint",
    name: "Horse Girl Bunny Mint",
    tribe: "Mysterious",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1689,
    hp10: 2027,
    atk0: 1641,
    atk10: 1969,
    image: "img/Horsegirlbunnymint.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "hunting-outfit-otohime",
    name: "Hunting Outfit Otohime",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1645,
    hp10: 1974,
    atk0: 1685,
    atk10: 2022,
    image: "img/Huntingoutfitotohime.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "horse-girl-jaen",
    name: "Horse Girl Jaen",
    tribe: "Enma",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1606,
    hp10: 1927,
    atk0: 1724,
    atk10: 2069,
    image: "img/Horsegirljaen.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: { tribes: ["Enma"] }
    }
  },
  {
    id: "asuna",
    name: "Asuna",
    tribe: "Tough",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ+",
    hp0: 1635,
    hp10: 1962,
    atk0: 1695,
    atk10: 2034,
    image: "img/Asuna.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 9,
      affects: { tribes: ["Tough"] }
    }
  },
  {
    id: "sinnon",
    name: "Sinon",
    tribe: "Mysterious",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ+",
    hp0: 1627,
    hp10: 1952,
    atk0: 1703,
    atk10: 2044,
    image: "img/Sinnon.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 3,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "limit-broken-sighborg-y",
    name: "Limit Broken Sighborg Y",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1650,
    atk10: 1980,
    image: "img/Sighborgy.png",
    centerSkill: {
      hpPercent: 13,
      atkPercent: 4,
      affects: { tribes: ["Tough"] }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "summer-vacation-blizzaria",
    name: "Summer Vacation Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "img/Summervacationblizzaria.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 3,
      affects: { tribes: ["Charming"] }
    }
  },
  {
    id: "ichika-swimsuit",
    name: "Ichika Swimsuit",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1654,
    hp10: 1985,
    atk0: 1676,
    atk10: 2011,
    image: "img/Ichikaswimsuit.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "nino-swimsuit",
    name: "Nino Swimsuit",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1554,
    hp10: 1865,
    atk0: 1776,
    atk10: 2131,
    image: "img/Ninoswimsuit.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "miku-swimsuit",
    name: "Miku Swimsuit",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1637,
    hp10: 1964,
    atk0: 1693,
    atk10: 2032,
    image: "img/Mikuswimsuit.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 15,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "yotsuba-swimsuit",
    name: "Yotsuba Swimsuit",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1655,
    hp10: 1986,
    atk0: 1675,
    atk10: 2010,
    image: "img/Yotsubaswimsuit.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "itsuki-swimsuit",
    name: "Itsuki Swimsuit",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1662,
    hp10: 1994,
    atk0: 1668,
    atk10: 2002,
    image: "img/Itsukiswimsuit.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: { sagas: ["The Quintessential Quintuplets"] }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "super-awakened-ichika-happy-wedding",
    name: "Super Awakened Ichika Happy Wedding",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1602,
    hp10: 1922,
    atk0: 1728,
    atk10: 2074,
    image: "img/Superawakenedichikahappywedding.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Mysterious"] }
    }
  },
  {
    id: "super-awakened-nino-happy-wedding",
    name: "Super Awakened Nino Happy Wedding",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1702,
    hp10: 2042,
    atk0: 1628,
    atk10: 1954,
    image: "img/Superawakenedninohappywedding.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Eerie"] }
    }
  },
  {
    id: "super-awakened-miku-happy-wedding",
    name: "Super Awakened Miku Happy Wedding",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1704,
    hp10: 2045,
    atk0: 1626,
    atk10: 1951,
    image: "img/Superawakenedmikuhappywedding.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Shady"] }
    }
  },
  {
    id: "super-awakened-yotsuba-happy-wedding",
    name: "Super Awakened Yotsuba Happy Wedding",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1661,
    hp10: 1993,
    atk0: 1669,
    atk10: 2003,
    image: "img/Superawakenedyotsubahappywedding.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Heartful"] }
    }
  },
  {
    id: "super-awakened-itsuki-happy-wedding",
    name: "Super Awakened Itsuki Happy Wedding",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1685,
    hp10: 2022,
    atk0: 1645,
    atk10: 1974,
    image: "img/Superawakeneditsukihappywedding.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: { tribes: ["Brave"] }
    }
  },
  {
    id: "Black-Hole-Asu",
    name: "Black Hole Asu",
    tribe: "Shady",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1404,
    hp10: 1687,
    atk0: 1496,
    atk10: 1796,
    image: "img/Blackholeasu.png",
    unity: {
      percent: 24
    }
  }
];
