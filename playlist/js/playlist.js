const playlistBox = document.querySelector('.scroll-container'); // 상위 컨테이너 선택

let ostHtml = ''
dramaOst.forEach(ost => {
    ostHtml += `
        <article class="playList">
            <div class="ostTitle">${ost.dramaTitle}</div>
        </article>
    `;

    playlistBox.innerHTML = ostHtml;
});