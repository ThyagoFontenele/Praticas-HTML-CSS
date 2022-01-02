const scrollListener = () => {

    let bgHeader = document.querySelector('.bgHeader');
    if(window.scrollY > 20){
        bgHeader.style.backgroundColor = '#111';
    }else{
        bgHeader.style.backgroundColor = '';
    }

}
window.addEventListener('scroll', scrollListener);
