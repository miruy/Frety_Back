// 가사 한 행씩 업로드
function addLineToView(line) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'flex items-center tracking-wide';

    // 한 음절씩 나누기
    const syllables = line.split('');

    const lineData = [];

    // 공백 10개 추가 (앞쪽)
    for (let i = 0; i < 10; i++) {
        const blankSyllable = {
            text: ' ',
            chord: null,
        };
        lineData.push(blankSyllable);

        // 공백 음절을 span으로 생성
        const syllableSpan = document.createElement('span');
        syllableSpan.className = 'relative hover:bg-green-700 hover:bg-opacity-40 cursor-pointer inline-block tracking-wide';
        syllableSpan.innerHTML = '&nbsp;&nbsp;&nbsp;'; // 공백 처리

        // 앞 10개 공백 음절 클릭
        clickSyllable(syllableSpan, blankSyllable);

        lineContainer.appendChild(syllableSpan);
    }

    syllables.forEach(syllable => {
        // 각 음절을 span으로 생성
        const syllableSpan = document.createElement('span');
        syllableSpan.className = 'relative hover:bg-green-700 hover:bg-opacity-40 cursor-pointer inline-block tracking-wide';
        syllableSpan.innerHTML = syllable === ' ' ? '&nbsp;&nbsp;&nbsp;' : syllable;

        // 각 음절을 객체로 관리 (기본적으로 코드 값은 null로 설정)
        const syllableObject = {
            text: syllable,
            chord: null,
        };

        // 한 음절 클릭
        clickSyllable(syllableSpan, syllableObject);

        // 한 음절-코드(객체-배열)로 파싱된 데이터 추가
        lineData.push(syllableObject);
        lineContainer.appendChild(syllableSpan);
    });

    // 공백 10개 추가 (뒤쪽)
    for (let i = 0; i < 10; i++) {
        const blankSyllable = {
            text: ' ',
            chord: null,
        };
        lineData.push(blankSyllable);

        // 공백 음절을 span으로 생성
        const syllableSpan = document.createElement('span');
        syllableSpan.className = 'relative hover:bg-green-700 hover:bg-opacity-40 cursor-pointer inline-block tracking-wide';
        syllableSpan.innerHTML = '&nbsp;&nbsp;&nbsp;'; // 공백 처리

        // 뒤 10개 공백 음절 클릭
        clickSyllable(syllableSpan, blankSyllable);

        lineContainer.appendChild(syllableSpan);
    }

    // 캡션달기
//    addCaption(lineContainer, lineData);

    // 한 행 삭제 버튼
    removeLine(lineContainer, lineData);

    // 가사 데이터 추가
    lyricsData.push(lineData);
    uploadedLyrics.appendChild(lineContainer);
}
