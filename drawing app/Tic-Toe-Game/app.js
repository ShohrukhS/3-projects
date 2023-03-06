const playAgain = document.getElementById('btn')
const message = document.querySelector('.mes')
let allBox = document.querySelectorAll('.box')

allBox = Array.from(allBox)

let player = 'X';

let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function winner() {
  winCondition.forEach(winning => {
    let check = winning.every(idx => allBox[idx].innerText.trim() == player)
    if (check) {
      highlight(winning)

      announceWinner(`Current player who is ${player} won the game`, 'green')

      // message.innerText = `Current player who is ${player} won the game`
    }
  })
}

allBox.forEach(eachBox => {
  eachBox.addEventListener('click', () => {
    if (eachBox.innerText.trim() != '') return
    eachBox.innerText = player
    winner()
    if (player === 'X') {
      player = 'Y'
    } else {
      player = 'X'
    }
  })
})

function highlight(win) {
  win.forEach(flash => {
   allBox[flash].classList.add('lighting')
  })
}

playAgain.addEventListener('click', () => window.location.reload())

function announceWinner(mes, color) {
  message.innerText = mes
  message.style.color = color
}