const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

function randomSquare() {
  square.forEach(classname => {
    className.classList.remove('mole')
  })

  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
}