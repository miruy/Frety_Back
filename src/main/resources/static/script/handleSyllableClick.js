// 음절 클릭 시
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