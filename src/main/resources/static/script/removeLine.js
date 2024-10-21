// 한 행 삭제 버튼
function removeLine(lineContainer, lineData) {
 const removeBtn = document.createElement('button');
    removeBtn.className = 'absolute right-0 p-1 hover:bg-zinc-100 rounded-md';
    removeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
      </svg>
    `;

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