//===================BEFORE STORY PORTION OF GAME===================

//START CONTAINER VARIABLES
const startContainer = document.querySelector("#start-container") //the container at the start
const startText = document.querySelector("#ready") // "Are you ready" text
const startButton = document.querySelector("#start-buttton") // the start button at the beginning of the game


//NAME CONTAINER VARIABLES
const nameContainer  = document.querySelector("#name-container") //the container where you enter your name
const submitNameButton = document.querySelector("#submit-name") // the submit button
const characName = document.querySelector("#character-name") // character name value

//CLASSES CONTAINER VARIABLES
const classesContainer = document.querySelector("#classes-container") // the container that contains the class information



// START SCREEN FUNCTIONS
startButton.addEventListener("click", () => { //when start button is clicked it will lead to enter character creation
    gameStart()
})

function gameStart () { //function that hides the start screen to reveal the character creation screen
    startContainer.classList.add("hide")
    nameContainer.classList.remove("hide")
    classesContainer.classList.remove("hide")
}

//CHARACTER CREATION SCREEN FUNCTIONS
class Player {
    constructor(name, chosenClass) {
        this.name = name; 
        this.chosenClass = chosenClass;
    }
}

//REFERENCES TO CHOSENCLASS IN THE CLASS PLAYER
const warrior = {
    name: "Warrior",
    insight: 0,
    intimidation: 5,
    persuasion: 2,
    dexterity: 2,
    attack: 5,
    dodge: 11,
    health: 20,
}

const rogue = {
    name: "Rogue",
    insight: 2,
    intimidation: 0,
    persuasion: 5,
    dexterity: 5,
    attack: 1,
    dodge: 16,
    health: 15,
}

const mage = {
    name: "Mage",
    insight: 5,
    intimidation: 2,
    persuasion: 0,
    dexterity: 0,
    attack: 7,
    dodge: 13,
    health: 15,
}


const characterCreation = { //object that contains functions for character creation
    player: [],
    playerReady: false,
    nameChracter: function (nameParam){
        if(!this.playerReady) {
            console.log('Player name set')
            this.player.push()
        }
    }
}

function setName (nameParam) {
    nameContainer.classList.add("hide")
}

submitNameButton.addEventListener("click", (event) => { //after submit button is pressed the name of the character is added.
})
