// 코드 선택
function selectedChord(e, syllableSpan, syllableObject) {
    if (e.target.tagName === 'A') {

        // 선택된 코드를 syllableObject(음절-코드)에 저장
        syllableObject.chord = e.target.textContent;

        // 기존 코드가 있다면 가져오기
        let existingChord = syllableSpan.querySelector('.chord');

        // 코드 제거 선택 시 chord === null
        if (syllableObject.chord === "코드 제거") {
            syllableObject.chord = null;
            existingChord.remove();
        }

        // 기존 코드가 있다면 대체
        if (existingChord) {
            existingChord.textContent = `${syllableObject.chord}`;
            existingChord.className = `chord absolute text-[12px] -top-[1.7em] ${syllableObject.chord.length=== 1 && 'left-0.5 w-[20px]'} ${syllableObject.chord.length=== 2 && '-left-[2px] w-[20px]'} ${syllableObject.chord.length=== 3 && '-left-[8px] w-[40px]'} ${syllableObject.chord.length=== 4 && '-left-[9px] w-[50px]'} ${syllableObject.chord.length=== 5 && '-left-[12px] w-[60px]'} ${syllableObject.chord.length=== 6 && '-left-[16px] w-[60px]'} font-semibold tracking-tighter`;
        } else {
            // 코드가 처음으로 추가될 경우
            const chordSpan = document.createElement('span');
            chordSpan.className = `chord absolute text-[12px] -top-[1.7em] ${syllableObject.chord.length=== 1 && 'left-0.5 w-[20px]'} ${syllableObject.chord.length=== 2 && '-left-[2px] w-[20px]'} ${syllableObject.chord.length=== 3 && '-left-[8px] w-[40px]'} ${syllableObject.chord.length=== 4 && '-left-[9px] w-[50px]'} ${syllableObject.chord.length=== 5 && '-left-[12px] w-[60px]'} ${syllableObject.chord.length=== 6 && '-left-[16px] w-[60px]'} font-semibold tracking-tighter`;
            chordSpan.textContent = `${syllableObject.chord}`;
            syllableSpan.appendChild(chordSpan);
        }

        // 코드 선택기 숨김
        chordSelector.classList.add('hidden');

        // 검색창 데이터 초기화
        const chordSearchInput = document.getElementById('chordSearch');
        chordSearchInput.value = '';

        // 필터링된 결과 초기화
        const filteredChordDiv = document.getElementById('filteredChords');
        filteredChordDiv.innerHTML = '';

        // 검색어가 없거나 필터링된 결과가 없으면 코드 목록 다시 표시
        if (!chordSearchInput.value || Object.keys(filteredChordData).length === 0) {
            filteredChordDiv.classList.add('hidden');
            ulElement.classList.remove('hidden');
        }
    }
}

// 코드 선택기 위치 조정
function handleChordSelectorPosition(syllableRect) {
    const chordSelector = document.getElementById('chordSelector');
    chordSelector.style.top = `${syllableRect.top + window.scrollY - chordSelector.offsetHeight - 250}px`;

    // 현재 브라우저의 크기에 맞춰서 left 지정
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1536) {
        chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - 220}px`;
    } else if (screenWidth >= 1024) {
        chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - -100}px`;
    } else if (screenWidth < 1024) {
        chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - -160}px`;
    }
}
