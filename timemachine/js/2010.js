const dramaPosterContainer2010 = document.querySelector('.year10');
let showPoster2010 = '';

dramaPoster2010.forEach(drama => {
    showPoster2010 += `
    <div class="posterContainer">
    <img src="/image/poster/${drama.posterImg}.png" alt="${drama.title}">
    <p class="drama-title">${drama.title}</p>
    </div>
    `
});

dramaPosterContainer2010.innerHTML = showPoster2010;

//드라마 포스터
document.querySelectorAll('.dramaPoster-container img').forEach((poster, index) => {
    poster.addEventListener('click', function() {
        const selectedDrama = dramaPoster2010[index];

        document.querySelector('.poster-img').src = `/image/poster/${selectedDrama.widthImg}.png`;
        document.querySelector('.description h2').innerText = selectedDrama.title;
        document.querySelector('.description p').innerHTML = selectedDrama["sub-title"];

        // 출연진 정보 
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


