
window.addEventListener('DOMContentLoaded', function() {
    // localStorage에서 저장된 데이터 가져오기
    let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    // 데이터가 있을 경우 diarylist-container에 추가
    const scrollContainer = document.querySelector('.scroll-container');

    diaryEntries.forEach(entry => {
        const article = document.createElement('article');
        article.classList.add('diarylist-container');

        article.innerHTML = `
            <div class="dramaTitle">${entry.title}</div>
            <div class="detail">${entry.message}</div>
            <div class="user-container">
                <img src="/image/detail/user-icon.png" alt="icon">
                <div class="user-name">${entry.user}</div>
                <div class="dot"><img src="/image/detail/dot.png" alt="" class="dotimg"></div>
            </div>
        `;
        
        // 새로운 게시글 추가
        scrollContainer.appendChild(article);
    });
});
