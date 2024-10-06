// 행 업로드
function handleEnter(event) {
    if (event.key === 'Enter' && !isComposing) {
        // 등록 버튼 막기
        event.preventDefault();

        const input = document.getElementById('content');
        const uploadedLyrics = document.getElementById('uploadedLyrics');

        // 입력된 값이 있는 경우에만 가사 업로드
        if (input.value.trim() !== '') {
            // 행 삭제를 위해 새로운 div 생성
            const lineContainer = document.createElement('div');
            lineContainer.className = 'flex items-center tracking-wide';

            // 가사를 한 음절씩 나누기 (공백 포함)
            const syllables = input.value.split('');

            // 현재 입력된 행에 대한 데이터 배열
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

                    // hidden 클래스를 제거하여 chordSelector의 높이를 계산할 수 있도록 함
                    chordSelector.classList.remove('hidden');

                    const syllableRect = syllableSpan.getBoundingClientRect();

                   // 셀렉트 박스의 위치
                   chordSelector.style.top = `${syllableRect.top + window.scrollY - chordSelector.offsetHeight - 300}px`;

                   // 현재 브라우저의 크기에 맞춰서 left 지정
                   const screenWidth = window.innerWidth;
                   if(screenWidth >= 1536) {
                       chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - 220}px`;
                   } else if(screenWidth >= 1024) {
                       chordSelector.style.left = `${syllableRect.left + window.scrollX - chordSelector.offsetWidth - -100}px`;
                   }else if(screenWidth < 1024) {
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
                            if(syllableObject.chord === "삭제"){
                                syllableObject.chord = null;
                                existingChord.remove(); // 코드 표시 제거
                            }

                            // 기존 코드가 있다면 대체
                            if (existingChord) {
                                existingChord.textContent = `${syllableObject.chord}`;
                                existingChord.className = `chord absolute text-[14.5px] -top-[1.7em] ${syllableObject.chord.length=== 1 && 'left-0.5'} ${syllableObject.chord.length=== 2 && '-left-[2px]'} ${syllableObject.chord.length=== 3 && '-left-[8px]'} ${syllableObject.chord.length=== 4 && '-left-[9px]'} ${syllableObject.chord.length=== 5 && '-left-[12px]'} font-semibold text-green-600 w-full tracking-tighter`;
                            } else {
                                // 코드가 처음으로 추가될 경우
                                const chordSpan = document.createElement('span');
                                chordSpan.className = `chord absolute text-[14.5px] -top-[1.7em] ${syllableObject.chord.length=== 1 && 'left-0.5'} ${syllableObject.chord.length=== 2 && '-left-[2px]'} ${syllableObject.chord.length=== 3 && '-left-[8px]'} ${syllableObject.chord.length=== 4 && '-left-[9px]'} ${syllableObject.chord.length=== 5 && '-left-[12px]'} font-semibold text-green-600 w-full tracking-tighter`;
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

                // 한 음절씩 나눈 가사를 행 컨테이너에 추가
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

            // 가사를 행 컨테이너에 추가
            uploadedLyrics.appendChild(lineContainer);

            // 전체 가사 데이터에 현재 행 데이터 추가
            lyricsData.push(lineData);

            // 입력 필드 초기화
            input.value = '';
        }
    }
}