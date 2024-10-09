document.addEventListener('click', function (e) {
    // 선택된 음절이 있고, 클릭한 요소가 선택된 음절이 아닌 경우, 선택된 상태 해제
    if (selectedSyllable && !selectedSyllable.contains(e.target)) {
        selectedSyllable.classList.remove('bg-green-700', 'bg-opacity-40');
        selectedSyllable = null;
    }
    // 코드 선택기가 표시되어 있고, 클릭한 요소가 chordSelector 또는 uploadedLyrics 내부가 아닐 때
    if (!chordSelector.classList.contains('hidden') &&
        !chordSelector.contains(e.target) &&
        !uploadedLyrics.contains(e.target)) {
        chordSelector.classList.add('hidden');
    }
});

// 한 음절 클릭
function clickSyllable(syllableSpan, syllableObject) {
    syllableSpan.onclick = function () {

    // 이전에 선택된 음절이 있으면 선택 해제
    if (selectedSyllable) {
        selectedSyllable.classList.remove('bg-green-700', 'bg-opacity-40');
    }

    // 현재 클릭된 음절을 선택하고 스타일 추가
    selectedSyllable = syllableSpan;
    selectedSyllable.classList.add('bg-green-700', 'bg-opacity-40');

    // 코드 선택기 표시
    const chordSelector = document.getElementById('chordSelector');
    chordSelector.classList.remove('hidden');
    const syllableRect = syllableSpan.getBoundingClientRect();

    // 코드 선택기 위치 조정
    handleChordSelectorPosition(syllableRect);

    chordSelector.onclick = function (e) {
        // 코드 선택
        selectedChord(e, syllableSpan, syllableObject);
    };
    };
}