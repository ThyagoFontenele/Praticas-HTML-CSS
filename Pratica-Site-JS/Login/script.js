function haveUpperCase(str) {

    const letters = 'abcdefghijklmnopqrstuvxwyz';
    let verif = 0;
    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        
        const ele = str[i];
        for (const iterator of letters) {
            if(ele === iterator.toUpperCase()){
                contador++;
            }
        }
        if(contador > 0){
            verif++;
        }
    }
    if(verif >= 1){
        return true;
    }
    return false;
}

function haveNumber(str) {

    const numbers = '0123456789';

    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        const ele = str[i];
        for (const iterator of numbers) {
            if(ele === iterator ){
                contador++;
            }
        }
        if(contador > 0){
            return true;
        }
    }
    return false;
}

function haveSimbols(str) {

    const all = 'abcdefghijklmnopqrstuvxwyz0123456789';
    let verif = 0;
    for (let i = 0; i < str.length; i++) {
        let contador = 0;
        const ele = str[i];
        for (const iterator of all) {
            if(ele === iterator || ele === iterator.toUpperCase() ){
                contador++;
            }
        }
        if(contador === 0){
            verif++;
        }
    }
    if(verif >= 1){
        return true;
    }
    return false;
}
const progress = document.querySelector('.progress');
function stringChallenge(str){
    let caracters = false;
    if(str.length > 0){
        progress.style.display = "block"
    }else{
        progress.style.display = "none"
    }

    if(str.length >= 7 && str.length < 31){
        caracters = true;
    }
    let resposta;
    if(haveUpperCase(str) === true && caracters === true){
        
        resposta = 'fraca';
    }

    if(haveUpperCase(str) === true && haveNumber(str) === true && haveSimbols(str) === true && caracters === true){
        resposta =  'boa'
    }

    if(haveUpperCase(str) === true && haveNumber(str) === true && haveSimbols(str) === true && str.length > 11){
        resposta = 'forte'
    }
    return resposta;
}

const password = document.getElementById('value');
const text = document.getElementById('text-progress')
const bar1 = document.querySelector('.green-bar1');
const bar2 = document.querySelector('.green-bar2');
const bar3 = document.querySelector('.green-bar3');
password.addEventListener('change', async () => {
    const res = await stringChallenge(password.value);
    if(res === 'fraca'){
        text.innerText = "Fraca";
        bar1.style.width = "100%";
        bar2.style.width = "0";
        bar3.style.width = "0";
    }
    else if(res === 'boa'){
        text.innerText = "Boa";
        bar1.style.width = "100%";
        bar2.style.width = "100%";
        bar3.style.width = "0";
    } 
    else if(res === 'forte'){
        text.innerText = "Forte";
        bar1.style.width = "100%";
        bar2.style.width = "100%";
        bar3.style.width = "100%";
    }
    else{
        text.innerText = "Muito Fraca";
        bar1.style.width = "0";
        bar2.style.width = "0";
        bar3.style.width = "0";
    }
     
})


