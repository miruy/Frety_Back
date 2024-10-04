// 한글 입력 시 반복문제 해결
let isComposing = false;
const inputElement = document.getElementById('content');

// 한글 입력 시작하면 true
inputElement.addEventListener('compositionstart', () => {
    isComposing = true;
});

// 한글 입력 끝나면 false
inputElement.addEventListener('compositionend', () => {
    isComposing = false;
});