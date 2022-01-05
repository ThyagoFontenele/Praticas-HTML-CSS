const plates = [

    {
        name: 'Carne assada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum vel massa hendrerit fringilla ut vitae nunc.',
        imageUrl: 'https://www.imagensempng.com.br/wp-content/uploads/2021/07/02-1.png'
    },
    {
        name: 'frango assado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum vel massa hendrerit fringilla ut vitae nunc. Nulla pulvinar turpis sit amet ipsum viverra.',
        imageUrl: './assets/frango.png'
    },
    {
        name: 'Sopa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ipsum vel massa hendrerit fringilla ut vitae nunc. Nulla pulvinar turpis sit amet ipsum viverra, nec accumsan sapien viverra.',
        imageUrl: './assets/sopa.png'
    },
    
]
const imagePlate = document.querySelector('.plate-img');
const namePlate = document.querySelector('.plate-name');
const descriptionPlate = document.querySelector('.plate-description');
const ballsElement = document.querySelectorAll('.ball');

let n = 0;

const clickBall = (number) => {
    ballsElement[n].className = 'ball';
    n = number;
    changeInformation();
}
const plate = document.querySelector('.plate-info');
const changeInformation = () => {
    ballsElement[n].classList.add('x');
    imagePlate.src = plates[n].imageUrl;
    namePlate.textContent = plates[n].name;
    descriptionPlate.textContent = plates[n].description;
}

changeInformation();
const ToLeft = () => {
    ballsElement[n].classList.remove('x');
    if(n > 0){
        n--;
    }else{
        n = (ballsElement.length - 1);
    }
    changeInformation();
    ballsElement[n].classList.add('x');
}

const ToRight = () => {
    ballsElement[n].classList.remove('x');
    if(n < (ballsElement.length - 1) ){
        n++;
    }else{
        n = 0;
    }
    changeInformation();
    ballsElement[n].classList.add('x');
}

let opac;
let transfo;
const logoHome= document.querySelector('.introduction-items');

window.addEventListener('scroll', () =>{
    const variable = Math.ceil(window.scrollY/6)
    if(window.scrollY > 1){
        opac = 1 - window.scrollY/550;
        transfo = variable;
    }
    
    if(scrollY >= 550){
        transfo = 0;
    }

    logoHome.style.opacity = opac;
    logoHome.style.transform = `translate3d(0px, ${transfo}px, 0px)`;
 }); 
