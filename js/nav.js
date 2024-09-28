const toggleMenu = ()=>{
    const hamburgerBar = document.querySelector('.nav-toggle');
    const hamburgerBarIcon = document.getElementsByTagName('i')[0];
    const navList = document.querySelector('.nav-menu');

    hamburgerBar.onclick = ()=>{
        navList.classList.toggle("toggleActive");

        // icon 바꾸기
        hamburgerBarIcon.classList.toggle("bi-list");
        hamburgerBarIcon.classList.toggle("bi-x-lg");
    }
}

toggleMenu();