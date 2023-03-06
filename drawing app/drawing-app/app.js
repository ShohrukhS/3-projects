const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const toolBox = document.querySelector('.toolBox')
const decreaseBtn = document.querySelector('.decrease')
const increaseBtn = document.querySelector('.increase')
const colorBtn = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const sizing = document.querySelector('.size')

let mouseActive = false;
let x 
let y
let size = 0
let color = 'red'

colorBtn.addEventListener('change', (e) => color = e.target.value)

increaseBtn.addEventListener('click', () => {
  size += 5
  if (size > 40) {
    size = 40
  }
  updateSize()
})
decreaseBtn.addEventListener('click', () => {
  size -= 2
  if (size < 5) {
    size = 5
  }
  updateSize()
})

function updateSize() {
  sizing.innerText = size
}

clearBtn.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height))


canvas.addEventListener('mousedown', (e) => {
  mouseActive = true
  x = e.offsetX;
  y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  mouseActive = false;

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (mouseActive) {
    
    const x2 = e.offsetX
    const y2 = e.offsetY
    
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  context.beginPath()
  context.arc(x, y, size, 0, Math.PI * 2)
  context.fillStyle = color
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath()
  context.moveTo(x1, y1);
  context.lineTo(x2, y2)
  context.strokeStyle = color
  context.lineWidth = size * 2
  context.stroke()
}
