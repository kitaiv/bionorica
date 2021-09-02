'use strict'

const regBtn = document.querySelector('#regBtn');


const checkAndGo = () => {
    const FOP = document.querySelector('#fop').value,
        EMAIL = document.querySelector('#email').value,
        PASS = document.querySelector('#pass').value;

    let emailToArray = EMAIL.split('');
    let getDomain = emailToArray.splice(emailToArray.indexOf('@'), emailToArray.length -1)
    if(FOP !== '' && getDomain.join('') === '@bionorica.ru' && PASS === 'ASFM2021'){
        const load = document.querySelector('#loader');
        load.classList.add('spinner-border', 'spinner-border-sm')
        registerUser();
    }else{
        const alert = document.querySelector('#alert');
        alert.classList.remove('d-none')
    }

}

function registerUser(){
    const FOP = document.querySelector('#fop').value
    fetch(`https://bionorica-restart.ru/index?action=registration&fio=${FOP}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })
        .then(result => {
            console.log(result)
            const load = document.querySelector('#loader');
            load.classList.remove('spinner-border', 'spinner-border-sm')
        })
        .catch(err => console.log(err))
}

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id),
     daysSpan = clock.querySelector('.days'),
     hoursSpan = clock.querySelector('.hours'),
     minutesSpan = clock.querySelector('.minutes'),
     secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline="September 14 2021 09:00:00 GMT+0300"; //for Ukraine
initializeClock('countdown', deadline);

regBtn.addEventListener('click', checkAndGo)


