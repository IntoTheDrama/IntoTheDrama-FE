const playlistBox = document.querySelector('.scroll-container');  

let ostHtml = ''
dramaOst.forEach(ost => {
    ostHtml += `
        <article class="playList">
            <div class="ostTitle">${ost.dramaTitle}</div>
        </article>
    `;

    playlistBox.innerHTML = ostHtml;
});