const startContainer = document.querySelector(".start-container")
const startText = document.querySelector("#ready") // "Are you ready" text
const startButton = document.querySelector("#start-buttton") // the start button at the beginning of the game

startButton.addEventListener("click", () => {
    gameStart()
})

function gameStart () {
    startContainer.classList.add("hide")
}