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
    },
    "B": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "B#": {
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
    "Bb": {
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
    "Bm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "B#m": {
        fingers: [
            [2, 2],
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
    "Bbm": {
        fingers: [
            [2, 2],
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
    "B7": {
        fingers: [
            [4, 1],
            [1, 2],
            [3, 2],
            [5, 2],
            [2, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Bm7": {
        fingers: [
            [2, 3],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Bsus4": {
        fingers: [
            [3, 4],
            [4, 4],
            [2, 5],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Bsus2": {
        fingers: [
            [3, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "BM7": {
        fingers: [
            [3, 3],
            [2, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "B6": {
        fingers: [
            [3, 1],
            [4, 1],
            [1, 2],
            [5, 2],
            [2, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Bm6": {
        fingers: [
            [3, 1],
            [1, 2],
            [5, 2],
            [2, 0],
            [4, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "B9": {
        fingers: [
            [4, 1],
            [2, 2],
            [3, 2],
            [5, 2],
            [1, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Badd9": {
        fingers: [
            [4, 1],
            [2, 2],
            [5, 2],
            [3, 4],
            [1, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Bdim": {
        fingers: [
            [5, 2],
            [2, 3],
            [4, 3],
            [3, 4],
            [1, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Baug": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 3],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "B5": {
        fingers: [
            [1, 2],
            [2, 0],
            [3, 'x'],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "B13": {
        fingers: [
            [4, 1],
            [3, 2],
            [5, 2],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 2,
                toString: 1,
                fret: 4,
                color: '#000000',
            },
        ],
    },
    "C": {
        fingers: [
            [2, 1],
            [4, 2],
            [5, 3],
            [1, 0],
            [3, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "C#": {
        fingers: [
            [2, 3],
            [3, 3],
            [4, 4],
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
    "Cb": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Cm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "C#m": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Cbm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "C7": {
        fingers: [
            [2, 1],
            [4, 2],
            [3, 3],
            [5, 3],
            [1, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Cm7": {
        fingers: [
            [2, 3],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Csus4": {
        fingers: [
            [2, 1],
            [1, 3],
            [4, 3],
            [5, 3],
            [3, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Csus2": {
        fingers: [
            [2, 1],
            [1, 3],
            [5, 3],
            [3, 0],
            [4, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "CM7": {
        fingers: [
            [4, 2],
            [5, 3],
            [1, 0],
            [2, 0],
            [3, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "C6": {
        fingers: [
            [2, 1],
            [3, 2],
            [4, 2],
            [5, 3],
            [1, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Cm6": {
        fingers: [
            [4, 1],
            [3, 2],
            [5, 3],
            [2, 4],
            [1, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "C9": {
        fingers: [
            [4, 2],
            [2, 3],
            [3, 3],
            [5, 3],
            [1, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Cadd9": {
        fingers: [
            [4, 2],
            [2, 3],
            [5, 3],
            [1, 0],
            [3, 0],
            [6, 'x'],
        ],
        barres: [],
    },
    "Cdim": {
        fingers: [
            [1, 2],
            [2, 4],
            [3, 5],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Caug": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 3],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "C5": {
        fingers: [
            [2, 1],
            [1, 3],
            [3, 'x'],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "C13": {
       fingers: [
           [4, 2],
           [3, 3],
           [5, 3],
           [6, 'x'],
       ],
       barres: [
           {
               fromString: 2,
               toString: 1,
               fret: 5,
               color: '#000000',
           },
       ],
    },
    "D": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D#": {
         fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Db": {
        fingers: [
           [2, 4],
           [3, 4],
           [4, 4],
           [5, 2],
           [6, 'x']
       ],
       barres: [
           {
               fromString: 5,
               toString: 1,
               fret: 2,
               color: '#000000',
           },
       ],
    },
    "Dm": {
        fingers: [
            [1, 1],
            [2, 3],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D#m": {
         fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Dbm": {
        fingers: [
            [2, 3],
            [3, 4],
            [4, 4],
            [6, 'x']
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "D7": {
        fingers: [
            [1, 2],
            [2, 1],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Dm7": {
        fingers: [
            [1, 1],
            [2, 1],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Dsus4": {
        fingers: [
            [3, 2],
            [1, 3],
            [2, 3],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Dsus2": {
        fingers: [
            [3, 2],
            [2, 3],
            [1, 0],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "DM7": {
        fingers: [
            [1, 2],
            [2, 2],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D6": {
        fingers: [
            [1, 2],
            [2, 0],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Dm6": {
        fingers: [
            [1, 1],
            [2, 0],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D9": {
        fingers: [
            [4, 2],
            [2, 3],
            [3, 3],
            [5, 3],
            [1, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Dadd9": {
        fingers: [
            [4, 4],
            [2, 5],
            [5, 5],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 3,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Ddim": {
        fingers: [
            [1, 2],
            [2, 4],
            [3, 5],
            [4, 'x'],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "Daug": {
        fingers: [
            [1, 2],
            [2, 3],
            [3, 3],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D5": {
        fingers: [
            [3, 2],
            [2, 3],
            [1, 'x'],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "D13": {
        fingers: [
           [4, 2],
           [3, 3],
           [5, 3],
           [6, 'x'],
       ],
       barres: [
           {
               fromString: 2,
               toString: 1,
               fret: 5,
               color: '#000000',
           },
       ],
    },
    "E": {
        fingers: [
            [3, 1],
            [4, 2],
            [5, 2],
            [1, 0],
            [2, 0],
            [6, 0],
        ],
        barres: [],
    },
    "E#": {
        fingers: [
            [3, 2],
            [4, 3],
            [5, 3],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
    },
    "Eb": {
        fingers: [
            [2, 4],
            [3, 4],
            [4, 4],
            [6, 'x'],
        ],
        barres: [
            {
                fromString: 5,
                toString: 1,
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "Em": {
        fingers: [
            [4, 2],
            [5, 2],
            [1, 0],
            [2, 0],
            [3, 0],
            [6, 0],
        ],
        barres: [],
    },
    "E#m": {
        fingers: [
            [4, 3],
            [5, 3],
        ],
        barres: [
            {
                fromString: 6,
                toString: 1,
                fret: 1,
                color: '#000000',
            },
        ],
    },
    "Ebm": {
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
                fret: 2,
                color: '#000000',
            },
        ],
    },
    "E7": {
        fingers: [
            [3, 1],
            [5, 2],
            [1, 0],
            [2, 0],
            [4, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Em7": {
        fingers: [
            [5, 2],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Esus4": {
        fingers: [
            [3, 2],
            [4, 2],
            [1, 0],
            [2, 0],
            [5, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Esus2": {
        fingers: [
            [1, 2],
            [4, 2],
            [3, 4],
            [2, 5],
            [5, 'x'],
            [6, 'x'],
        ],
        barres: [],
    },
    "EM7": {
        fingers: [
            [3, 1],
            [4, 1],
            [5, 2],
            [1, 0],
            [2, 0],
            [6, 0],
        ],
        barres: [],
    },
    "E6": {
        fingers: [
            [3, 1],
            [2, 2],
            [4, 2],
            [5, 2],
            [1, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Em6": {
        fingers: [
            [2, 2],
            [4, 2],
            [5, 2],
            [1, 0],
            [3, 0],
            [6, 0],
        ],
        barres: [],
    },
    "E9": {
        fingers: [
            [3, 1],
            [1, 2],
            [5, 2],
            [2, 0],
            [4, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Eadd9": {
        fingers: [
            [3, 1],
            [1, 2],
            [4, 2],
            [5, 2],
            [2, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Edim": {
        fingers: [
            [5, 1],
            [4, 2],
            [1, 'x'],
            [2, 'x'],
            [3, 0],
            [6, 0],
        ],
        barres: [],
    },
    "Eaug": {
        fingers: [
            [2, 1],
            [3, 1],
            [4, 2],
            [5, 3],
            [1, 0],
            [6, 0],
        ],
        barres: [],
    },
    "E5": {
        fingers: [
            [4, 2],
            [5, 2],
            [1, 'x'],
            [2, 'x'],
            [3, 'x'],
            [6, 0],
        ],
        barres: [],
    },
    "E13": {
        fingers: [
            [3, 1],
            [2, 2],
            [5, 2],
            [1, 0],
            [4, 0],
            [6, 0],
        ],
        barres: [],
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