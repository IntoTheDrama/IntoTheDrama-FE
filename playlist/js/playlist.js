const playlistBox = document.querySelector('.scroll-container');
const audioPlayer = document.getElementById('audio-player');
const memorableTexts = document.querySelectorAll('.famous-line-container p');  
let currentPlayingIndex = null;  // 현재 재생 중인 곡의 인덱스

// 전체 OST 목록 생성
function renderOstList(ostList) {
    let ostHtml = '';
    ostList.forEach(ost => {
        ostHtml += `
            <div class="play-list" data-id="${ost.id}" data-audio="${ost.audio}" data-memorable-text='${JSON.stringify(ost.memorableText)}'>
                ${ost.dramaTitle}
            </div>
        `;
    });
    playlistBox.innerHTML = ostHtml;

   
    const playListItems = document.querySelectorAll('.play-list');
    playListItems.forEach(item => {
        const id = item.dataset.id;
        item.addEventListener('click', function() {
            playAudioById(id);
        });
    });
}

 
renderOstList(dramaOst);

// ID 기반 오디오 재생 함수
function playAudioById(id) {
    const ost = dramaOst.find(ost => ost.id == id);

    // 명대사 표시
    memorableTexts.forEach((p, i) => {
        p.textContent = ost.memorableText[i] || '';  
    });
 
    audioPlayer.src = ost.audio;
    audioPlayer.play();
    currentPlayingIndex = dramaOst.indexOf(ost);  
}

// 검색 필터링 함수
function filterPlaylist() {
    const searchBox = document.querySelector('.search-box');
    const searchTerm = searchBox.value.toLowerCase();

     
    const filteredOst = dramaOst.filter(ost => ost.dramaTitle.toLowerCase().includes(searchTerm));

    
    if (filteredOst.length > 0) {
        renderOstList(filteredOst); // 검색 결과가 있을 때 해당 결과 목록 렌더링
    } else {
        playlistBox.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>'; // 검색 결과가 없을 때 메시지 출력
    }
}

// 검색 창에 입력할 때마다 필터링 함수 호출
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('input', filterPlaylist);

audioPlayer.addEventListener('ended', function() {
    currentPlayingIndex = (currentPlayingIndex + 1) % dramaOst.length;
    playAudioById(dramaOst[currentPlayingIndex].id); // 다음 곡 재생
});
