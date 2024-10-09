// 가사 한 줄씩 업로드 처리
function handleEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const input = document.getElementById('content');
        const lines = input.value.split('\n'); // 줄 단위로 나누기

        lines.forEach(line => {
            if (line.trim() !== '') {
                addLineToView(line); // 한 줄씩 화면에 추가
            }
        });

        input.value = '';  // 입력 창 초기화
    }
}

// 가사 한 줄을 화면에 추가하는 함수
function addLineToView(line) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'flex items-center tracking-wide';

    const syllables = line.split('');  // 음절별로 나누기

    const lineData = [];
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

        // 클릭 이벤트 추가 (기타 코드 지정용)
        syllableSpan.onclick = function () {
            // 이전에 선택된 음절이 있으면 선택 해제
            if (selectedSyllable) {
                selectedSyllable.classList.remove('bg-green-700', 'bg-opacity-40');
            }

            // 현재 클릭된 음절을 선택하고 스타일 추가
            selectedSyllable = syllableSpan;
            selectedSyllable.classList.add('bg-green-700', 'bg-opacity-40');

            // 코드 선택기 표시 및 위치 조정
            const chordSelector = document.getElementById('chordSelector');
            chordSelector.classList.remove('hidden');

            const syllableRect = syllableSpan.getBoundingClientRect();

            // 셀렉트 박스의 위치 조정
            chordSelector.style.top = `${syllableRect.top + window.scrollY - chordSelector.offsetHeight - 300}px`;

            // 현재 브라우저의 크기에 맞춰서 left 지정
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1536) {
                chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - 220}px`;
            } else if (screenWidth >= 1024) {
                chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - -100}px`;
            } else if (screenWidth < 1024) {
                chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - -160}px`;
            }

            // 코드 선택 시 이벤트 핸들러 설정
            chordSelector.onclick = function (e) {
                if (e.target.tagName === 'A') { // 클릭된 타겟이 li-a 태그라면

                    // 선택된 코드를 syllableObject에 저장
                    syllableObject.chord = e.target.textContent;

                    // 기존 코드가 있다면 가져오기
                    let existingChord = syllableSpan.querySelector('.chord');

                    // 삭제 선택 시 chord === null
                    if (syllableObject.chord === "삭제") {
                        syllableObject.chord = null;
                        existingChord.remove(); // 코드 표시 제거
                    }

                    // 기존 코드가 있다면 대체
                    if (existingChord) {
                        existingChord.textContent = `${syllableObject.chord}`;
                        existingChord.className = `chord absolute text-[14.5px] -top-[1.7em] ${syllableObject.chord.length === 1 && 'left-0.5'} ${syllableObject.chord.length === 2 && '-left-[2px]'} ${syllableObject.chord.length === 3 && '-left-[8px]'} ${syllableObject.chord.length === 4 && '-left-[9px]'} ${syllableObject.chord.length === 5 && '-left-[12px]'} ${syllableObject.chord.length === 6 && '-left-[13px]'} font-semibold text-green-600 w-full tracking-tighter`;
                    } else {
                        // 코드가 처음으로 추가될 경우
                        const chordSpan = document.createElement('span');
                        chordSpan.className = `chord absolute text-[14.5px] -top-[1.7em] ${syllableObject.chord.length === 1 && 'left-0.5'} ${syllableObject.chord.length === 2 && '-left-[2px]'} ${syllableObject.chord.length === 3 && '-left-[8px]'} ${syllableObject.chord.length === 4 && '-left-[9px]'} ${syllableObject.chord.length === 5 && '-left-[12px]'} ${syllableObject.chord.length === 6 && '-left-[13px]'} font-semibold text-green-600 w-full tracking-tighter`;
                        chordSpan.textContent = `${syllableObject.chord}`;
                        syllableSpan.appendChild(chordSpan);
                    }

                    // 코드 선택기 숨김
                    chordSelector.classList.add('hidden');
                }
            };
        };

        // lineData 배열에 syllableObject 추가
        lineData.push(syllableObject);

        // 한 음절씩 나눈 가사를 가사 컨테이너에 추가
        lineContainer.appendChild(syllableSpan);
    });

    // 가사 삭제 버튼 추가
    const removeBtn = document.createElement('button');
    removeBtn.className = 'absolute right-0 py-1.5 px-1.5 text-xs hover:text-white hover:bg-neutral rounded-lg';
    removeBtn.textContent = '삭제';
    removeBtn.onclick = function () {
        uploadedLyrics.removeChild(lineContainer);
        const index = lyricsData.indexOf(lineData);
        if (index > -1) {
            lyricsData.splice(index, 1); // 삭제된 행 데이터를 배열에서 제거
        }
    };
    lineContainer.appendChild(removeBtn);

    // 전체 가사 데이터 추가
    lyricsData.push(lineData);

    // 가사를 가사 컨테이너에 추가
    uploadedLyrics.appendChild(lineContainer);
}