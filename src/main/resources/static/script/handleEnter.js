// 가사 입력 후 엔터
function handleEnter(event) {
    if (event.key === 'Enter' && !isComposing) {
        event.preventDefault();
        const input = document.getElementById('content');

        // 줄 단위로 나누기
        const lines = input.value.split('\n');

        lines.forEach(line => {
            if (line.trim() !== '') {

                // 가사 한 행씩 업로드
                addLineToView(line);
            }
        });

        // 엔터 후 입력창 초기화
        input.value = '';
    }
}