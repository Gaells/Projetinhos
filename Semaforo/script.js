const img = document.getElementById('img');
const botoes = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatico();
    turnOn[event.target.id]();
    
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++;
    } else {
        colorIndex = 0;
    }
    
} 
// Outra forma de escrever o if ali de cima seria 
// const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatico = () => {
    clearInterval (intervalId);
}


const turnOn = {
    'red' :       () => img.src = './img/vermelho.png',
    'yellow' :    () => img.src = './img/amarelo.png',
    'green' :     () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval(changecolor, 1000)
};

botoes.addEventListener('click', trafficLight);