//===================BEFORE STORY PORTION OF GAME===================

const startContainer = document.querySelector("#start-container") //the container at the start
const nameContainer  = document.querySelector("#name-container")
const classesContainer = document.querySelector("#classes-container")
const startText = document.querySelector("#ready") // "Are you ready" text
const startButton = document.querySelector("#start-buttton") // the start button at the beginning of the game

startButton.addEventListener("click", () => { //when start button is clicked it will lead to enter one's name
    gameStart()
})

function gameStart () {
    startContainer.classList.add("hide")
    nameContainer.classList.remove("hide")
    classesContainer.classList.remove("hide")
}

