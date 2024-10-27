const titleContainer = document.querySelector('.title-container')
let lastScrollTop = 0;

window.addEventListener('scroll', ()=>{
    const currentScrollTop = window.scrollY;

    //아래로 스크롤
    if(currentScrollTop > lastScrollTop){
        titleContainer.classList.add('fade-in')
        titleContainer.classList.remove('fade-out')
    }

    //위로 스크롤
    else{
        titleContainer.classList.add('fade-out')
        titleContainer.classList.remove('fade-in')
    }

    lastScrollTop = currentScrollTop
});