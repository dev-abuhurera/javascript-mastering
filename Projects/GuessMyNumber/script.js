'use strict';

document.querySelector('.number').innerText = 13;
document.querySelector('.Score').innerText = 10;



document.querySelector('.btncheck').addEventListener('click', () => {

    const value = document.querySelector('.guess').value = 23;
    console.log(value, typeof value);

    const message = document.querySelector('.message').textContent = 'Correct Number';

    if(!value){
        console.log("There is no guess value")
    }

}


);

