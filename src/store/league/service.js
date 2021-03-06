function getUsers() {
  return {
    1: { name: "עודד ליפשיץ" },
    28: { name: "יעל שפירא" },
    42: { name: "יהודה פנר" },
    12: { name: "אורן אסף" },
    76: { name: "עופר טהר זהב" },
    33: { name: "עדי גונן" },
    13: { name: "זאב שאנן" },
    60: { name: "מיכאל יוס" },
    24: { name: "ירדן קבסה" },
    80: { name: "אופיר רוזנפלד" },
    3: { name: "אמיר עמנואלי" },
    17: { name: "סתיו דן" },
    20: { name: "חיים אלפרין" },
    50: { name: "בועז וייסמן" },
    55: { name: "ניר נוישטיין" },
    7: { name: "אורלי וייל" },
    21: { name: "יונתן שוויצר" },
  };
}

function getJsonData() {
  return {
    clubs: {
      oded: {
        leagues: {
          abc123: {
            isCompleted: false,
            title: "",
            results: {
              1: 7.5,
              78: 6.3,
              82: 8.3,
            },
            meetings: {
              20220621: {
                isLeague: true,
                keepResults: true,
                isCompleted: false,
                results: {
                  1: 7.5,
                  78: 6.3,
                  82: 8.3,
                },
                players: [],
                stages: [
                  {
                    tables: [
                      {
                        players: {
                          28: {
                            score: 49,
                            rounds: [
                              {
                                succeed: true,
                                bid: 6,
                                isHeighest: true,
                              },
                            ],
                          },
                          42: {
                            score: 128,
                          },
                          12: {
                            score: -14,
                          },
                          76: {
                            score: 45,
                          },
                        },
                      },
                      {
                        players: {
                          33: {
                            score: 220,
                          },
                          13: {
                            score: 17,
                          },
                          60: {
                            score: 129,
                          },
                          24: {
                            score: 190,
                          },
                        },
                      },
                      {
                        players: {
                          80: {
                            score: 111,
                          },
                          3: {
                            score: 308,
                          },
                          17: {
                            score: 129,
                          },
                          20: {
                            score: 90,
                          },
                        },
                      },
                      {
                        players: {
                          50: {
                            score: 80,
                          },
                          55: {
                            score: 112,
                          },
                          7: {
                            score: 76,
                          },
                          21: {
                            score: 79,
                          },
                        },
                      },
                    ],
                    isCompleted: false,
                  },
                  {
                    tables: [
                      {
                        players: {
                          42: {
                            score: 149,
                          },
                          33: {
                            score: 240,
                          },
                          3: {
                            score: 78,
                          },
                          55: {
                            score: 145,
                          },
                        },
                      },
                      {
                        players: {
                          28: {
                            score: 220,
                          },
                          24: {
                            score: 17,
                          },
                          17: {
                            score: 129,
                          },
                          50: {
                            score: 190,
                          },
                        },
                      },
                      {
                        players: {
                          60: {
                            score: 111,
                          },
                          3: {
                            score: 308,
                          },
                          80: {
                            score: 129,
                          },
                          21: {
                            score: 90,
                          },
                        },
                      },
                      {
                        players: {
                          13: {
                            score: 80,
                          },
                          12: {
                            score: 112,
                          },
                          20: {
                            score: 76,
                          },
                          7: {
                            score: 79,
                          },
                        },
                      },
                    ],
                    isCompleted: false,
                  },
                ],
              },
            },
          },
        },
        users: {
          1: { name: "עודד ליפשיץ" },
          28: { name: "יעל שפירא" },
          42: { name: "יהודה פנר" },
          12: { name: "אורן אסף" },
          76: { name: "עופר טהר זהב" },
          33: { name: "עדי גונן" },
          13: { name: "זאב שאנן" },
          60: { name: "מיכאל יוס" },
          24: { name: "ירדן קבסה" },
          80: { name: "אופיר רוזנפלד" },
          3: { name: "אמיר עמנואלי" },
          17: { name: "סתיו דן" },
          20: { name: "חיים אלפרין" },
          50: { name: "בועז וייסמן" },
          55: { name: "ניר נוישטיין" },
          7: { name: "אורלי וייל" },
          21: { name: "יונתן שוויצר" },
        },
      },
    },
  };
}

export default {
  getUsers,
  getJsonData,
};
