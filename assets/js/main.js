// 'use strict'

const regBtn = document.querySelector('#regBtn');


const checkAndGo = () => {
    const FOP = document.querySelector('#fop').value,
        EMAIL = document.querySelector('#email').value,
        PASS = document.querySelector('#pass').value;

    if(FOP !== '' && EMAIL !== '' && PASS !== ''){
        registerUser();
    }

}

function registerUser(){
    const FOP = document.querySelector('#fop').value
    console.log(FOP)
    fetch(`https://bionorica-restart.ru/index?action=registration&fio=${FOP}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })
        .then(result => console.log(result))
        .catch(err => console.log(err))
}

regBtn.addEventListener('click', checkAndGo)


