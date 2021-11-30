const lines = 20;
let erased = 0;
let numLines;
let position = 0;
let currentline = document.getElementsByClassName('board-line');
let speed = 80;
function createLines() {
    const board = document.getElementById("blackboard");
    let x = 0;
    while ( x < lines ) {
        const line = document.createElement('article');
        line.className = 'board-line';
        board.appendChild(line);
        x++;
    }
}

createLines();

const sentenses = [
    'Eu não sou dentista',
    'Eu não venderei curas milagrosas',
    'Eu nunca ganharei um “Emmy”',
    'Os feijões não são frutas nem musical',
    'A peruca do diretor não é um frisbee',
    'A lama não é um dos 4 grupos de alimentos',
    'Eu não andarei de skate nos corredores',
    'Eu não me esconderei atrás da quinta emenda',
    'Eu não sou uma desprezível máquina de cuspir',
    'Cuecão não é saudável ​​para as crianças e outros seres vivos'
]

function eraseBoard() {
    while (position < lines){
      currentline[position].innerHTML = '';
      position++;
    }
    position = 0;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(phrase ) {
    for (cont = 0; cont < phrase.length; cont+=1) {
        currentline[position].innerHTML += phrase.charAt(cont);
        console.log(cont);
        await timeout(speed);
    }
}

async function getnumber(){
    numLines = document.getElementById('writenum').value;
    let currentPhrase = sentenses[Math.floor(Math.random() * sentenses.length)]

    while (numLines > 0){ 
        if (position < lines){
            document.getElementById('btn-start').disabled = true;
            await typeWriter(currentPhrase)
            numLines--;
            position++;
        }
        else {
            position = 0;
            eraseBoard();
        }
    }
    document.getElementById('btn-start').disabled = false;
}

document.getElementById('btn-start').addEventListener('click', function() {
    getnumber()
  })