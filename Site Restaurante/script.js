window.addEventListener('scroll', () =>{
    const background = document.querySelector('.header-bg');
    if(window.scrollY > 20 && background.style.backgroundColor != '#111'){
        background.style.backgroundColor = '#111'
    }else if(window.scrollY < 20){
        background.style.backgroundColor = ''
    }
});