const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('quebrada2') > -1
}


function lampOn () {             // ! significa NÃO
    if (!isLampBroken() ) {
        lamp.src = 'img/ligada.jfif'
    }    
}

function lampOff () {
    if (!isLampBroken() ) {
        lamp.src = 'img/desligada3.jfif';
    }       
}

function lampBroken () {
    lamp.src = 'img/quebrada2.jfif'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
