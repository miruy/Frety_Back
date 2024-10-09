// 한 행 삭제 버튼
function removeLine(lineContainer, lineData) {
 const removeBtn = document.createElement('button');
    removeBtn.className = 'absolute right-0 py-1.5 px-1.5 text-xs hover:text-white hover:bg-neutral rounded-lg';
    removeBtn.textContent = '삭제';
    removeBtn.onclick = function () {
        uploadedLyrics.removeChild(lineContainer);
        const index = lyricsData.indexOf(lineData);
        if (index > -1) {
            // 삭제된 행 데이터를 배열에서 제거
            lyricsData.splice(index, 1);
        }
    };
    lineContainer.appendChild(removeBtn);
}