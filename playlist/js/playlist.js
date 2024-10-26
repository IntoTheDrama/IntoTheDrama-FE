const playlistBox = document.querySelector('.scroll-container');
const audioPlayer = document.getElementById('audio-player');
let currentPlaying = null; // 현재 재생 중인 음악을 추적하기 위한 변수

let ostHtml = '';
dramaOst.forEach(ost => {
    ostHtml += `
        <div class="play-list" data-audio="${ost.audio}">${ost.dramaTitle}</div>
    `;
});

playlistBox.innerHTML = ostHtml;


