// 코드 데이터 맵
const chordDataMap = {
    "A": {
        fingers: [
            [2, 2],
            [3, 2],
            [4, 2],
            [1, 0], // open-string
            [5, 0], // silent-string(mute)
            [6, 'x'],
        ],
        barres: [],
    },
    "A#": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 3],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
    },
    "Ab": {
        fingers: [
            [3, 3],
            [4, 4],
            [5, 4],
            [1, 0],
            [6, 0],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Am": {
        fingers: [
            [2, 1],
            [3, 2],
            [4, 2],
            [6, 'x'],
        ],
        barres: [],
    },
    "A#m": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 3],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
    },
    "Abm": {
        fingers: [
            [4, 4],
            [5, 4],
            [1, 0],
            [6, 0],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "A7": {
        fingers: [
            [2, 2],
            [4, 2],
            [1, 0],
            [3, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Am7": {
        fingers: [
            [2, 1],
            [4, 2],
            [1, 0],
            [3, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Asus4": {
        fingers: [
            [3, 2],
            [2, 3],
            [1, 0],
            [4, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Asus2": {
        fingers: [
            [3, 2],
            [4, 2],
            [1, 0],
            [2, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "AM7": {
        fingers: [
            [3, 1],
            [2, 2],
            [4, 2],
            [1, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
        },
    "A6": {
        fingers: [
            [5, 0],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Am6": {
        fingers: [
            [2, 1],
            [1, 2],
            [3, 2],
            [4, 2],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "A9": {
        fingers: [
            [2, 2],
            [4, 2],
            [6, 2],
            [1, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 3,
                fret: 1,
                color: '#000000',
            },
        ],
    },
    "Aadd9": {
        fingers: [
            [3, 4],
            [5, 4],
            [6, 5],,
            [1, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 2,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Adim": {
        fingers: [
            [2, 1],
            [4, 1],
            [3, 2],
            [1, 'x'],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Aaug": {
        fingers: [
            [1, 1],
            [2, 2],
            [3, 2],
            [4, 3],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "A5": {
        fingers: [
            [3, 2],
            [4, 2],
            [1, 'x'],
            [2, 'x'],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "A13": {
        fingers: [
            [1, 2],
            [2, 2],
            [4, 2],
            [3, 0],
            [5, 0],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "B": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "B#": {
        // B#은 C 코드와 동일
        fingers: [
            [2, 1],
            [3, 2],
            [4, 3],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Bb": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 3],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Bm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "B#m": {
        // B#m은 사실상 Cm과 동일
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Bbm": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 3],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "B7": {
        fingers: [
            [2, 4],
            [3, 2],
            [4, 1],
            [5, 2],
        ],
        barres: [],
        position: 1,
    },
    "Bm7": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Bsus4": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Bsus2": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    // Bmaj7 코드
        "BM7": {
            fingers: [
                [1, 2],
                [2, 3],
                [3, 4],
                [5, 1],
            ],
            barres: [
                {
                    fromString: 5,
                    toString: 1,
                    fret: 1,
                    color: '#000000',
                },
            ],
            position: 1,
        },

        // B6 코드
        "B6": {
            fingers: [
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 2],
            ],
            barres: [],
            position: 1,
        },

        // Bm6 코드
        "Bm6": {
            fingers: [
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 2],
            ],
            barres: [],
            position: 1,
        },

        // B9 코드
        "B9": {
            fingers: [
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 4],
                [5, 2],
            ],
            barres: [],
            position: 1,
        },

        // Badd9 코드
        "Badd9": {
            fingers: [
                [1, 2],
                [2, 4],
                [3, 4],
                [5, 2],
            ],
            barres: [],
            position: 1,
        },

        // Bdim 코드
        "Bdim": {
            fingers: [
                [1, 1],
                [2, 2],
                [3, 3],
                [5, 1],
            ],
            barres: [],
            position: 1,
        },

        // Baug 코드
        "Baug": {
            fingers: [
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 2],
            ],
            barres: [],
            position: 1,
        },

        // B5 코드
        "B5": {
            fingers: [
                [2, 4],
                [3, 4],
                [4, 4],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // B13 코드
        "B13": {
            fingers: [
                [1, 2],
                [2, 4],
                [3, 4],
                [5, 2],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

    // C 코드
    "C": {
        fingers: [
            [2, 1],
            [3, 2],
            [4, 3],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "C#": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Cb": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Cm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 3,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "C#m": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 1],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Cbm": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "C7": {
        fingers: [
            [2, 1],
            [3, 3],
            [4, 2],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Cm7": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 3,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Csus4": {
        fingers: [
            [2, 1],
            [3, 3],
            [4, 3],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Csus2": {
        fingers: [
            [2, 1],
            [3, 2],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
      // Cmaj7 코드
        "CM7": {
            fingers: [
                [2, 0],
                [3, 2],
                [4, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // C6 코드
        "C6": {
            fingers: [
                [2, 1],
                [3, 2],
                [5, 0],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Cm6 코드
        "Cm6": {
            fingers: [
                [1, 3],
                [2, 1],
                [3, 3],
                [4, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // C9 코드
        "C9": {
            fingers: [
                [1, 3],
                [2, 1],
                [3, 3],
                [4, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Cadd9 코드
        "Cadd9": {
            fingers: [
                [1, 3],
                [2, 3],
                [3, 2],
                [4, 0],
                [5, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Cdim 코드
        "Cdim": {
            fingers: [
                [1, 1],
                [2, 2],
                [3, 1],
                [4, 2],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Caug 코드
        "Caug": {
            fingers: [
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 4],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // C5 코드
        "C5": {
            fingers: [
                [3, 5],
                [4, 3],
                [5, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // C13 코드
        "C13": {
            fingers: [
                [1, 3],
                [2, 3],
                [3, 5],
                [4, 5],
                [5, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

    // D 코드
    "D": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "D#": {
        fingers: [
            [1, 3],
            [2, 4],
            [3, 3],
            [4, 1],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Db": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 1],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Dm": {
        fingers: [
            [1, 1],
            [2, 3],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "D#m": {
        fingers: [
            [1, 2],
            [2, 4],
            [3, 3],
            [4, 1],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Dbm": {
        fingers: [
            [1, 1],
            [2, 2],
            [3, 1],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 4,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "D7": {
        fingers: [
            [1, 2],
            [2, 1],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Dm7": {
        fingers: [
            [1, 1],
            [2, 1],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Dsus4": {
        fingers: [
            [1, 3],
            [2, 3],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    "Dsus2": {
        fingers: [
            [1, 2],
            [3, 2],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
        position: 1,
    },
    // Dmaj7 코드
        "DM7": {
            fingers: [
                [1, 2],
                [2, 2],
                [3, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // D6 코드
        "D6": {
            fingers: [
                [1, 2],
                [2, 0],
                [3, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Dm6 코드
        "Dm6": {
            fingers: [
                [1, 1],
                [2, 0],
                [3, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // D9 코드
        "D9": {
            fingers: [
                [1, 2],
                [2, 0],
                [3, 2],
                [4, 0],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Dadd9 코드
        "Dadd9": {
            fingers: [
                [1, 2],
                [2, 0],
                [3, 2],
                [4, 4],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Ddim 코드
        "Ddim": {
            fingers: [
                [1, 1],
                [2, 2],
                [3, 1],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Daug 코드
        "Daug": {
            fingers: [
                [1, 3],
                [2, 3],
                [3, 2],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // D5 코드
        "D5": {
            fingers: [
                [1, 2],
                [2, 3],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // D13 코드
        "D13": {
            fingers: [
                [1, 2],
                [2, 0],
                [3, 2],
                [4, 0],
                [5, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

    // E 코드
    "E": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 1],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
    "E#": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 2],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Eb": {
        fingers: [
            [2, 1],
            [3, 2],
            [4, 3],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Em": {
        fingers: [
            [2, 2],
            [3, 2],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
    "E#m": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 1],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Ebm": {
        fingers: [
            [2, 1],
            [3, 1],
            [4, 1],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "E7": {
        fingers: [
            [2, 2],
            [4, 1],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
    "Em7": {
        fingers: [
            [4, 1],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
    "Esus4": {
        fingers: [
            [2, 2],
            [3, 3],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
    "Esus2": {
        fingers: [
            [4, 2],
            [5, 2],
            [6, 0],
        ],
        barres: [],
        position: 1,
    },
     // Emaj7 코드
        "EM7": {
            fingers: [
                [2, 1],
                [3, 1],
                [4, 1],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // E6 코드
        "E6": {
            fingers: [
                [2, 2],
                [3, 1],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // Em6 코드
        "Em6": {
            fingers: [
                [2, 2],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // E9 코드
        "E9": {
            fingers: [
                [2, 1],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // Eadd9 코드
        "Eadd9": {
            fingers: [
                [3, 1],
                [4, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // Edim 코드
        "Edim": {
            fingers: [
                [2, 1],
                [3, 2],
                [5, 1],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Eaug 코드
        "Eaug": {
            fingers: [
                [2, 1],
                [3, 1],
                [4, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // E5 코드
        "E5": {
            fingers: [
                [4, 2],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

        // E13 코드
        "E13": {
            fingers: [
                [1, 1],
                [2, 2],
                [5, 2],
                [6, 0],
            ],
            barres: [],
            position: 1,
        },

    // F 코드
    "F": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 4],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "F#": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 5],
            [6, 2],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Fb": {
        fingers: [
            [2, 1],
            [3, 2],
            [4, 3],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Fm": {
        fingers: [
            [3, 4],
            [4, 3],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "F#m": {
        fingers: [
            [3, 4],
            [4, 3],
            [6, 2],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Fbm": {
        fingers: [
            [2, 1],
            [3, 1],
            [4, 1],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "F7": {
        fingers: [
            [2, 2],
            [3, 3],
            [4, 1],
            [6, 1],
        ],
        barres: [],
        position: 1,
    },
    "Fm7": {
        fingers: [
            [4, 1],
            [6, 1],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Fsus4": {
        fingers: [
            [2, 3],
            [3, 3],
            [6, 1],
        ],
        barres: [],
        position: 1,
    },
    "Fsus2": {
        fingers: [
            [4, 3],
            [5, 3],
            [6, 1],
        ],
        barres: [],
        position: 1,
    },
    // Fmaj7 코드
        "FM7": {
            fingers: [
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // F6 코드
        "F6": {
            fingers: [
                [1, 1],
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 'x'],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Fm6 코드
        "Fm6": {
            fingers: [
                [2, 1],
                [3, 1],
                [4, 3],
                [6, 1],
            ],
            barres: [
                {
                    fromString: 6,
                    toString: 1,
                    fret: 1,
                    color: '#000000',
                },
            ],
            position: 1,
        },

        // F9 코드
        "F9": {
            fingers: [
                [2, 3],
                [3, 1],
                [4, 3],
                [5, 1],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Fadd9 코드
        "Fadd9": {
            fingers: [
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 3],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Fdim 코드
        "Fdim": {
            fingers: [
                [1, 1],
                [2, 2],
                [3, 1],
                [4, 2],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Faug 코드
        "Faug": {
            fingers: [
                [2, 2],
                [3, 3],
                [4, 3],
                [6, 1],
            ],
            barres: [],
            position: 1,
        },

        // F5 코드
        "F5": {
            fingers: [
                [4, 3],
                [5, 3],
                [6, 1],
            ],
            barres: [],
            position: 1,
        },

        // F13 코드
        "F13": {
            fingers: [
                [1, 1],
                [2, 3],
                [3, 2],
                [4, 3],
                [6, 1],
            ],
            barres: [],
            position: 1,
        },

    // G 코드
    "G": {
        fingers: [
            [1, 3],
            [2, 2],
            [6, 3],
        ],
        barres: [],
        position: 1,
    },
    "G#": {
        fingers: [
            [1, 4],
            [2, 3],
            [6, 4],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Gb": {
        fingers: [
            [1, 2],
            [2, 1],
            [6, 2],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Gm": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 3],
            [6, 3],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 3,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "G#m": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [6, 4],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 4,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Gbm": {
        fingers: [
            [2, 1],
            [3, 1],
            [4, 1],
            [6, 2],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "G7": {
        fingers: [
            [1, 1],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 2],
            [6, 3],
        ],
        barres: [],
        position: 1,
    },
    "Gm7": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 3],
            [6, 3],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 3,
                color: '#000000',
            },
        ],
        position: 1,
    },
    "Gsus4": {
        fingers: [
            [1, 3],
            [2, 1],
            [5, 0],
            [6, 3],
        ],
        barres: [],
        position: 1,
    },
    "Gsus2": {
        fingers: [
            [1, 3],
            [2, 0],
            [5, 0],
            [6, 3],
        ],
        barres: [],
        position: 1,
    },
    // Gmaj7 코드
        "GM7": {
            fingers: [
                [1, 2],
                [2, 0],
                [3, 0],
                [4, 0],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // G6 코드
        "G6": {
            fingers: [
                [2, 2],
                [3, 0],
                [4, 0],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // Gm6 코드
        "Gm6": {
            fingers: [
                [2, 1],
                [3, 3],
                [4, 3],
                [6, 3],
            ],
            barres: [
                {
                    fromString: 6,
                    toString: 1,
                    fret: 3,
                    color: '#000000',
                },
            ],
            position: 1,
        },

        // G9 코드
        "G9": {
            fingers: [
                [1, 3],
                [2, 2],
                [3, 3],
                [4, 0],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // Gadd9 코드
        "Gadd9": {
            fingers: [
                [1, 3],
                [2, 0],
                [3, 2],
                [4, 0],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // Gdim 코드
        "Gdim": {
            fingers: [
                [1, 1],
                [2, 2],
                [3, 1],
                [4, 2],
                [6, 'x'],
            ],
            barres: [],
            position: 1,
        },

        // Gaug 코드
        "Gaug": {
            fingers: [
                [2, 1],
                [3, 1],
                [4, 1],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // G5 코드
        "G5": {
            fingers: [
                [5, 0],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },

        // G13 코드
        "G13": {
            fingers: [
                [1, 1],
                [2, 0],
                [3, 2],
                [4, 3],
                [6, 3],
            ],
            barres: [],
            position: 1,
        },
};