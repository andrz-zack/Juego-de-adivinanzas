const moviesObject = {
    '🧙👓⚡': 'Harry Potter',
    '🦇🃏': 'Jocker',
    '👩‍❤️‍👨🚢': 'Titanic',
    '🐜👨': 'Antman',
    '🐀👨‍🍳': 'Ratatouille',
    '📱🍎': 'Jobs',
    '🔍🐟': 'Buscando a Nemo',
};

const container = document.querySelector('.container');
const controls = document.querySelector('.controls-container');
const startButton = document.getElementById('start');
const letterContainer = document.getElementById('letter-container');
const userInputSection = document.getElementById('userInputSection');
const resultText = document.getElementById('result');
const hints = Object.keys(moviesObject);

let randomHint = '',
    randomWord = '';
let winCount = 0,
    lossCount = 5;

const generateRandomValue = (array) => Math.floor(Math.random() * array.length);
//bloquear todos los botons
const blocker = () => {
    let letterButtons = document.querySelectorAll('.letters');
 //desactivar todas las letras   
 letterButtons.forEach((button) => {
    button.disabled =true;
 });
 stopGame();
};

//comenzando el juego
startButton.addEventListener('click', () => {
    //controles y botons visibles
    controls.classList.add('hide');
    init();
    
});

//stop del juego
const stopGame = () => {
    controls.classList.remove('hide');
};
//generando la palabra
const generateWord = () => {
    /* inicializando las letras ocultas, aclarando previa a la palabra */
    letterContainer.classList.remove('hide');
    userInputSection.innerText = '';
    randomHint = hints[generateRandomValue(hints)];
    randomWord = moviesObject[randomHint];
    container.innerHTML = ` <div id="movieHint">${randomHint}</div> `;

    let displayItem = '';
    randomWord.split('').forEach((value) => {
        if (value == ' '){
            winCount += 1;
            displayItem += '<span class="dashes">&nbsp;</span>';
        }
        else {
            displayItem += '<span class="dashes">_ </span>';
        }
    });
    //mostrando cada elemento de span
    userInputSection.innerHTML = displayItem;

};
 /* funcion inicial */
 const init = () => {
    winCount = 0;
    lossCount = 5;
    randomHint = null;
    randomWord = '';
    userInputSection.innerHTML = '';
    letterContainer.classList.add('hide');
    letterContainer.innerHTML = '';
    generateWord();

    //creando los botones de las letras
    for (let i = 65; i < 91; i++) {
        let button = document.createElement('button');
        button.classList.add('letters');
        //numero de ascII (A-Z)
        button.innerText = String.fromCharCode(i);
        //caracter del boton click
        button.addEventListener('click', () => {
            let charArray = randomWord.toUpperCase().split('');
            let dashes = document.getElementsByClassName('dashes');
            //si la matriz contiene el valor en el que se hizo clic, se reemplazara el guión coincidente con la letra
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    //si el caracter del array es igual al click del boton
                    if(char === button.innerText){
                        button.classList.add('used');
                    //reemplazar el guin con la letra
                    dashes[index].innerText = char;
                    //incrementar
                    winCount += 1;
                    // si winCout es igual a la letra
                    if (winCount == charArray.length){
                        resultText.innerHTML = 'Haz ganado 🎉🥳';
                        //bloquear todos los botones
                        blocker();

                    }

                    }
                });
            } else {
                //perder
                lossCount -= 1;
                button.classList.add('used');
                document.querySelector('.num-of-tries-left').innerHTML = `<span>Tries Left:</span> 0${lossCount}`;
            }
            
        })
    }

 }
