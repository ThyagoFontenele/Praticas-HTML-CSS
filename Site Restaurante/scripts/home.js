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
        n = 2;
    }
    changeInformation();
    ballsElement[n].classList.add('x');
    
}

const ToRight = () => {
    ballsElement[n].classList.remove('x');
    if(n < 2){
        n++;
    }else{
        n = 0;
    }
    changeInformation();
    ballsElement[n].classList.add('x');
}

