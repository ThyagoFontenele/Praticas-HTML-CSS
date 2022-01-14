const scrollListener = () => {
    const title = document.querySelector('.title');
    title.style.marginTop = `${window.scrollY}px`;
    let bgHeader = document.querySelector('.bgHeader');
    if(window.scrollY > 600){
        bgHeader.style.backgroundColor = '#c7c7c7';
    }else{
        bgHeader.style.backgroundColor = '';
    }

}
window.addEventListener('scroll', scrollListener);

function toggleMenu(event) {
    if(event.type === 'touchstart'){ event.preventDefault(); }
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}
const button = document.querySelector('#button');
button.addEventListener('click', toggleMenu);
button.addEventListener('touchstart', toggleMenu);
