const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');

ham.addEventListener('click',show);
close.addEventListener('click',hide);

function show() {

    nav.style.transform = 'translatex(0%)';
    ham.style.display = 'none';
    close.style.display='flex';
    
}

function hide() {
    nav.style.transform = 'translatex(-100%)';
    close.style.display = 'none';
    ham.style.display = 'block';
}