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