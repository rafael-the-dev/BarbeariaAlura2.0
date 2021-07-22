const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('#nav-list');

menuButton.addEventListener('click', event => {
    navList.classList.toggle('nav-list--mobile');
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
});

window.addEventListener('resize', event => {
    if(event.target.innerWidth > 500) {
        navList.classList.remove('nav-list--mobile');
        menuButton.classList.remove('fa-times');
        menuButton.classList.add('fa-bars');
    }
});