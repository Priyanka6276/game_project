//===================VARIABLES FOR BEFORE ADVENTURE===================

//START VARIABLES
const startContainer = document.querySelector("#start-container") //the container at the start
const startButton = document.querySelector("#start-buttton") // the start button at the beginning of the game


//CHARACTER CREATION VARIABLES
const nameContainer = document.querySelector("#name-container") //the container where you enter your name
const submitNameButton = document.querySelector("#submit-name") // the submit button
const characName = document.querySelector("#character-name") // character name value
const nameWarning = document.querySelector(".warning") // warning messages
const classesContainer = document.querySelector("#classes-container") // the container that contains the class information
const readyContainer = document.querySelector("#ready-button-container") // the ready button container
const readyButton = document.querySelector("#ready") //the ready button to begin adventure
const characCreatPicContainer = document.querySelector("#character-creation-picture-container") //container for character picture in character creation
const skillTreeContainer = document.querySelector("#skills-tree-container") // container for the list of skills

//===================START SCREEN FUNCTIONS===================
startButton.addEventListener("click", () => { //when start button is clicked it will lead to enter character creation
    gameStart()
})

function gameStart() { //function that hides the start screen to reveal the character creation screen
    startContainer.classList.add("hide")
    nameContainer.classList.remove("hide")
    classesContainer.classList.remove("hide")
    readyContainer.classList.remove("hide")
    characCreatPicContainer.classList.remove("hide")
    skillTreeContainer.classList.remove("hide")
}

//===================CHARACTER CREATION SCREEN FUNCTIONS===================

class Player {
    constructor(name, chosenClass, money) {
        this.name = name;
        this.chosenClass = chosenClass;
        this.money = 50;
    }
}

//REFERENCES TO CHOSENCLASS IN THE CLASS PLAYER
const warrior = {
    name: "Warrior",
    insight: 1,
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
    intimidation: 1,
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
    persuasion: 1,
    dexterity: 1,
    attack: 7,
    dodge: 13,
    health: 15,
}


const characterCreation = { //object that contains functions for character creation
    playerName: [],
    playerReady: false,
    nameChracter: function (nameParam) {
        if (characName.value === "") { //prevents submit button from working if character name field empty
            console.log("put thy name!")
            nameWarning.classList.remove("hide")
            return this.playerReady = false
        }
        if (!this.playerReady) { // replaces input and submit area with character name
            console.log("Player name set")
            this.playerName.push(characName.value)
            nameContainer.textContent = characName.value
            this.playerReady = true
            // console.log(characterCreation.playerName)
        }
    },
    
}

submitNameButton.addEventListener("click", (event) => { //after submit button is pressed the name of the character is added.
    event.preventDefault()
    characterCreation.nameChracter()
})


//===================STORY BEGINS===================

//STORY VARIABLES
//Containers
const narratorContainer = document.querySelector("#narrator-container")
const characterContainer = document.querySelector("#character-dialogue-container")
const optionsContainer = document.querySelector("#options-container")

//Buttons
const optionBtn = document.querySelector(".btn")


//TO MOVE ON TO THE ADVENTURE
function storyBegins() {
    nameContainer.classList.add("hide")
    classesContainer.classList.add("hide")
    readyContainer.classList.add("hide")
}

readyButton.addEventListener("click", () => {
    storyBegins()
})






