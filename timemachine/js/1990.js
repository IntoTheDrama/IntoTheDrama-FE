const dramaPosterContainer90 = document.querySelector('.year90');
let showPoster90 = '';

function renderDramas90(dramas) {
    showPoster90 = ''; 
    dramas.forEach(drama => {
        showPoster90 += `
        <div class="posterContainer">
        <img src="/image/poster/${drama.posterImg}.png" alt="${drama.title}">
        <p class="drama-title">${drama.title}</p>
        </div>
        `;
    });

    dramaPosterContainer90.innerHTML = showPoster90;

    
    document.querySelectorAll('.posterContainer img').forEach((poster, index) => {
        poster.addEventListener('click', function() {
            const selectedDrama = dramas[index]; 

            document.querySelector('.poster-img').src = `/image/poster/${selectedDrama.widthImg}.png`;
            document.querySelector('.description h2').innerText = selectedDrama.title;
            document.querySelector('.description p').innerHTML = selectedDrama["sub-title"];

            // 출연진 
            const crewContainer = document.querySelector('.crew-grid-container');
            crewContainer.innerHTML = '';  

            // 배우 이미지, 이름, 직업
            selectedDrama.actors.forEach((actor, i) => {
                crewContainer.innerHTML += `
                    <div class="crew-member">
                        <img src="/image/people/${selectedDrama.actors[i]}.png" alt="${actor}">
                        <div class="crew">
                            <p class="name">${actor}</p>
                            <p class="job">${selectedDrama.job[i]}</p> 
                        </div>
                    </div>`;
            });

            document.querySelector('#main').style.display = 'none';
            document.querySelector('#main2').style.display = 'block';
        });
    });
}

renderDramas90(dramaPoster1990);

// 검색 기능 구현
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('input', function() {
    const query = searchBox.value.toLowerCase(); 

    const filteredDramas = dramaPoster1990.filter(drama =>
        drama.title.toLowerCase().includes(query)
    );

    renderDramas90(filteredDramas);
});
