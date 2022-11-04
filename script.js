//===================VARIABLES FOR BEFORE ADVENTURE===================

//START VARIABLES
const startContainer = document.querySelector("#start-container") //the container at the start
const startButton = document.querySelector("#start-buttton") // the start button at the beginning of the game


//CHARACTER CREATION VARIABLES
//Name Container Variables
const nameContainer = document.querySelector("#name-container") //the container where you enter your name
const submitNameButton = document.querySelector("#submit-name") // the submit button
const characName = document.querySelector("#character-name") // character name value
const nameWarning = document.querySelector(".warning") // warning messages

//Classes Container Variables
const classesContainer = document.querySelector("#classes-container") // the container that contains the class information
const warriorClass = document.querySelector("#warrior")
const rogueClass = document.querySelector("#rogue")
const mageClass = document.querySelector("#mage")


// SKill Tree Container Variables
const skillTreeContainer = document.querySelector("#skills-tree-container") // container for the list of skills
const insightNum = document.querySelector("#number-1")
const intimidationNum = document.querySelector("#number-2")
const persuasionNum = document.querySelector("#number-3")
const dexNum = document.querySelector("#number-4")
const attackNum = document.querySelector("#number-5")
const healthNum = document.querySelector("#number-6")

//Character Picture Container Variables
const characCreatPicContainer = document.querySelector("#character-creation-picture-container") //container for character picture in character creation

//Ready Container Variables
const readyContainer = document.querySelector("#ready-button-container") // the ready button container
const readyButton = document.querySelector("#ready") //the ready button to begin adventure



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
    constructor(name, chosenClass) {
        this.name = name;
        this.chosenClass = chosenClass;
        this.money = 50;
        this.inventory = {}
    }
}

//REFERENCES TO CHOSENCLASS IN THE CLASS PLAYER
const warrior = {
    name: "Warrior",
    insight: 2,
    intimidation: 5,
    persuasion: -1,
    dexterity: 2,
    attack: 5,
    health: 20,
}

const rogue = {
    name: "Rogue",
    insight: 2,
    intimidation: -1,
    persuasion: 5,
    dexterity: 5,
    attack: 3,
    health: 15,
}

const mage = {
    name: "Mage",
    insight: 5,
    intimidation: 2,
    persuasion: 1,
    dexterity: -1,
    attack: 7,
    health: 15,
}

warriorClass.addEventListener("click", () => {
    // console.log(warrior)
    insightNum.textContent = warrior.insight
    intimidationNum.textContent = warrior.intimidation
    persuasionNum.textContent = warrior.persuasion
    dexNum.textContent = warrior.dexterity
    attackNum.textContent = warrior.attack
    healthNum.textContent = warrior.health 
})

rogueClass.addEventListener("click", () => {
    insightNum.textContent = rogue.insight
    intimidationNum.textContent = rogue.intimidation
    persuasionNum.textContent = rogue.persuasion
    dexNum.textContent = rogue.dexterity
    attackNum.textContent = rogue.attack
    healthNum.textContent = rogue.health 
})

mageClass.addEventListener("click", () => {
    insightNum.textContent = mage.insight
    intimidationNum.textContent = mage.intimidation
    persuasionNum.textContent = mage.persuasion
    dexNum.textContent = mage.dexterity
    attackNum.textContent = mage.attack
    healthNum.textContent = mage.health 
})


const characterCreation = { //object that contains functions for character creation
    player: [],
    playerNameReady: false,
    playerCharacReady:false,
    nameCharacter: function (nameParam) {
        if(characName.value === "") { //prevents submit button from working if character name field empty
            console.log("put thy name!")
            nameWarning.classList.remove("hide")
            return this.playerNameReady = false
        }
        if(!this.playerNameReady) { // replaces input and submit area with character name
            console.log("Player name set")
            nameContainer.textContent = characName.value
            this.playerNameReady = true
            // console.log(characterCreation.playerName)
        }
    },
       
}

submitNameButton.addEventListener("click", (event) => { //after submit button is pressed the name of the character is added.
    event.preventDefault()
    characterCreation.nameCharacter()
})



//===================STORY BEGINS===================

//STORY VARIABLES
//Containers
const narratorContainer = document.querySelector("#narrator-container") // refers to the narrator's box
const characterContainer = document.querySelector("#character-dialogue-container") // refer's to the character picture and dialogue box
const optionsContainer = document.querySelector("#options-container") // refers to the options button

//Buttons
const optionBtn = document.querySelector(".btn") // refers to the options button
const continueBtn = document.querySelector("#continue") // refers to the continue button in the narrator container

//Text Elements
const narratorTxt = document.querySelector("#narrator") //refers to the narrator's dialogue

//CLASSES FOR SECONDARY CHARACTERS AND ENEMIES

//class for secondary characters that won't fight you
class SecondaryCharacter {
    constructor(name){
        this.name = name;
    }
}

//class for enemies to fight
class Enemy {
    constructor(name, attack, dexterityCheck) {
        this.name= name;
        this.attack = attack;
        this.dexterity = dexterityCheck;
    }
}

//TO MOVE ON TO THE ADVENTURE
function storyBegins() {
    nameContainer.classList.add("hide")
    classesContainer.classList.add("hide")
    readyContainer.classList.add("hide")
    characCreatPicContainer.classList.add("hide")
    skillTreeContainer.classList.add("hide")
    narratorContainer.classList.remove("hide")
}

readyButton.addEventListener("click", () => {
    storyBegins()
})


function startGame () {
    
}

function continueNarration () {

}

function contDialogue () {

}

function chooseOptions () {

}

continueBtn.addEventListener("click", () => {

})

const chapter1 = {

}


