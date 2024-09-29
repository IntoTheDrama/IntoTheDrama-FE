let lastScrollTop = 0; // 이전 스크롤 위치를 저장할 변수
let timer; // 타이머를 저장할 변수

document.addEventListener('scroll', () => {
    const section = document.querySelector('.section1');
    const title2 = document.querySelector('.title2');
    const title3 = document.querySelector('.title3');
    const windowHeight = window.innerHeight;

    // 현재 스크롤 위치
    let currentScrollTop = window.scrollY;

    // 섹션의 위치를 계산하여 화면에 보이는지 확인
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    // 아래로 스크롤하고, section1이 화면에 보일 때
    if (sectionTop < windowHeight && sectionBottom > 0) {
        if (currentScrollTop > lastScrollTop) { // 아래로 스크롤
            clearTimeout(timer);  
            timer = setTimeout(() => {
                title2.classList.add('show');
                title3.classList.add('show');
            }, 70);  
        }
    }

    // 위로 스크롤하거나 section1이 화면에 보이지 않을 때
    if (currentScrollTop < lastScrollTop || sectionTop >= windowHeight) {
        clearTimeout(timer);  
        title2.classList.remove('show');
        title3.classList.remove('show');
    }

    // 이전 스크롤 위치 업데이트
    lastScrollTop = currentScrollTop;
});