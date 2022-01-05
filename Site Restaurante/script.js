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
        imgMenu.style.width = '25px';
    }else{
        menu.style.display = 'none';
        imgMenu.src = './assets/menu.png';
        imgMenu.style.width = '35px';
    }
    
}