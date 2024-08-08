let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let nav = document.querySelector('.inner-nav');
let backdrop = document.querySelector('.backdrop');

menu.addEventListener('click', () => {
    nav.style.transform = 'translateX(0%)';
    nav.style.opacity = 1;
    backdrop.style.display = 'block';
    document.body.classList.add('no-scroll');
    menu.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click', () => {
    nav.style.transform = 'translateX(100%)';
    nav.style.opacity = 0;
    backdrop.style.display = 'none';
    document.body.classList.remove('no-scroll');
    menu.style.display = 'block';
    close.style.display = 'none';
});

