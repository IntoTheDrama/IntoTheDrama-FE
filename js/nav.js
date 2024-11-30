const toggleMenu = () => {
    const hamburgerBar = document.querySelector('.nav-toggle');
    const hamburgerBarIcon = document.querySelector('.nav-toggle i');
    const navList = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    hamburgerBar.onclick = () => {
        navList.classList.toggle("toggleActive");
        header.classList.toggle("toggleActive");

        // 아이콘 전환
        hamburgerBarIcon.classList.toggle("bi-list");
        hamburgerBarIcon.classList.toggle("bi-x-lg");
    };
};

toggleMenu();
