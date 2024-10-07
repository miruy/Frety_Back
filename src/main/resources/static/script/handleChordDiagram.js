// svguitar 함수 정의
function drawChord(selector, chordData, configData) {
    var chord = new svguitar.SVGuitarChord(selector);

    chord
        .chord(chordData)
        .configure(configData)
        .draw();

    // 튜닝 위치 수동 설정
    const svgElement = document.querySelector(selector);
    if (svgElement) {
        const tuningText = svgElement.querySelectorAll('text.tuning');
        if (tuningText.length > 1) {
            // 원하는 튜닝 위치로 이동
            tuningText[0].setAttribute('x', parseFloat(tuningText[0].getAttribute('x')) - 177); // x 값을 줄여서 왼쪽으로 이동
            tuningText[0].setAttribute('y', parseFloat(tuningText[0].getAttribute('y')) + 45); // y 값을 늘려서 아래로 이동
        }
    }
}

// 공통 데이터
const commonConfigs = {
    position: 1,
    orientation: 'horizontal',
    style: 'normal',
    strings: 6,
    frets: 5,
    fretSize: 1,
    fontFamily: 'Open Sans, Arial, sans-serif',
    color: '#000000',
    backgroundColor: 'none',
    fingerSize: 0.7,
    barreChordStrokeWidth: 0.1,
    barreChordRadius: 0.5,
    emptyStringIndicatorSize: 0.7,
    strokeWidth: 5,
    nutWidth: 14,
    fixedDiagramPosition: false,
    sidePadding: 0.2,
    tuningsFontSize: 75,
};

// 각 코드별 추가 속성
const customConfigs = {
    // A#, B#, B#m, C#, C#m, D#, D#m, E#, G#, G#m
   Ab: {
      noPosition: true,
      tuning: ['4', '', '', '', '', ''],
   },
   Abm: {
      noPosition: true,
      tuning: ['4', '', '', '', '', ''],
   },
   A9: {
       noPosition: true,
       tuning: ['4', '', '', '', '', ''],
   },
   Baug: {
       noPosition: true,
       tuning: ['3', '', '', '', '', ''],
   },
   Cm: {
       noPosition: true,
       tuning: ['3', '', '', '', '', ''],
   },
   Cm7: {
       noPosition: true,
       tuning: ['3', '', '', '', '', ''],
   },
   Caug: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   Db: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   Dbm: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   D9: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   Ddim: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   D13: {
        noPosition: true,
        tuning: ['4', '', '', '', '', ''],
   },
   Eb: {
        noPosition: true,
        tuning: ['6', '', '', '', '', ''],
   },
   Ebm: {
        noPosition: true,
        tuning: ['6', '', '', '', '', ''],
   },
   Fb: {
        noPosition: true,
        tuning: ['7', '', '', '', '', ''],
   },
   Fbm: {
        noPosition: true,
        tuning: ['7', '', '', '', '', ''],
   },
   Gm: {
        noPosition: true,
        tuning: ['3', '', '', '', '', ''],
   },
   Gm7: {
        noPosition: true,
        tuning: ['3', '', '', '', '', ''],
   },
   Gdim: {
        noPosition: true,
        tuning: ['3', '', '', '', '', ''],
   },

    // 기본 설정이 없을 때 사용할 공통 설정
    default: {
        noPosition: false,
        tuning: ['\u2002', '', '', '', '', ''],
        svgTitle: 'Chordric_chord',
    }
};
