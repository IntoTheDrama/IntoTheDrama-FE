const dramaPosterContainer90 = document.querySelector('.year90');
let showPoster90 = ''
dramaPoster1990.forEach(drama => {
    showPoster90 += `
    <img src="/image/poster/${drama.posterImg}.png" alt="${drama.title}">
    `
})
dramaPosterContainer90.innerHTML = showPoster90;

//드라마 포스터
document.querySelectorAll('.dramaPoster-container img').forEach((poster, index) => {
    poster.addEventListener('click', function() {
        const selectedDrama = dramaPoster1990[index];

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