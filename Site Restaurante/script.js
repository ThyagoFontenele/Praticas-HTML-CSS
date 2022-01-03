window.addEventListener('scroll', () =>{
    const background = document.querySelector('.header-bg');
    if(window.scrollY > 20 && background.style.backgroundColor != '#12253f'){
        background.style.backgroundColor = '#12253f'
    }else if(window.scrollY < 20){
        background.style.backgroundColor = ''
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
    }
};
sizeOfThings();

window.addEventListener('resize', function(){
	sizeOfThings();
});


const menu = document.querySelector('.menu');
menu.style.display = 'none'
const handleMenu = () => {
    if(menu.style.display == 'none'){
        menu.style.display = ''
    }else{
        menu.style.display = 'none';
    }
    
}