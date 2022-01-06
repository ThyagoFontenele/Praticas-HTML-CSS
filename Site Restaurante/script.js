const buttonMobile = document.querySelector('#btn-mobile');

const toggleMenu = (event) => {

    if(event.type === 'touchstart') { event.preventDefault(); };
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');

}

buttonMobile.addEventListener('click', toggleMenu);
buttonMobile.addEventListener('touchstart', toggleMenu);