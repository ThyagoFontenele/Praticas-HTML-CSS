window.addEventListener('scroll', () =>{
    const background = document.querySelector('.header-bg');
    if(window.scrollY > 250 && background.style.backgroundColor != '#12253f'){
        background.style.backgroundColor = '#12253f'
        background.style.position = 'fixed';
    }else if(window.scrollY === 0){
        background.style.backgroundColor = ''
        background.style.position = 'absolute';
    }
});
function sizeOfThings(){
    var windowWidth = window.innerWidth;
    const menuIcon = document.querySelector('.menu-icon');
    const menuHeader = document.querySelector('.header-list');
    menuIcon.style.display = 'none';
    if(windowWidth < 760){
        menuIcon.style.display = '';
        menuHeader.style.display = 'none';
    }
    else{
        menuHeader.style.display = '';
        const menu = document.querySelector('.menu');
        const imgMenu = document.querySelector('.menu-icon');
        imgMenu.src = './assets/menu.png';
        menu.style.display = 'none'
    }
};
sizeOfThings();

window.addEventListener('resize', function(){
	sizeOfThings();
});


const menu = document.querySelector('.menu');
const imgMenu = document.querySelector('.menu-icon');
menu.style.display = 'none'
const handleMenu = () => {
    if(menu.style.display == 'none'){
        menu.style.display = ''
        imgMenu.src = './assets/cancel.png';
    }else{
        menu.style.display = 'none';
        imgMenu.src = './assets/menu.png';
    }
    
}