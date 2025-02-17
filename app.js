const grid = document.querySelector('#boardSizes')
const bestOf = document.querySelector('#bestOf')
const gameTime = document.querySelector('#gameTime')

const gameDisplay = document.querySelector('.game-display')
const menu = document.querySelector('.menu')
const modal = document.querySelector('.modal')

const playButtons = document.querySelectorAll('.play-btn')
const resetButton = document.querySelector('.reset-btn')
const playWithAI = document.querySelector('.ai-btn')

resetButton.addEventListener('click', () => {
  console.clear()
  game.resetGame()
})

const userWidth =
  window.innerWidth < 800 ? (window.innerWidth < 500 ? 50 : 95) : 125

const game = new Game({
  bestOf: 3,
  timeForMove: 3,
  tileSize: userWidth,
  boardHeight: 3,
  boardWidth: 3,
})

const gameAnimation = () => {
  requestAnimationFrame(gameAnimation)

  game.createBoard()

  game.board.forEach((row) => {
    row.forEach((element) => {
      element.draw()
    })
  })
}

gameAnimation()

playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.add('off')
    modal.classList.add('off')

    let width, height

    switch (grid.value) {
      case '3x3':
        width = 3
        height = 3
        break
      case '4x4':
        width = 4
        height = 4
        break
      case '3x5':
        width = 5
        height = 3
        break
    }

    game.boardHeight = height
    game.boardWidth = width
    game.timeForMove = gameTime.value
    game.bestOf = bestOf.value

    game.resetGame()
  })
})

menu.addEventListener('transitionend', () => {
  gameDisplay.style.opacity = 1
})
