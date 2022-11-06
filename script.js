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
const warriorInfo = document.querySelector("#warrior-class")
const rogueInfo = document.querySelector("#rogue-class")
const mageInfo = document.querySelector("#mage-class")
const confirmBtn = document.querySelector("#confirm-class")


// SKill Tree Container Variables
const skillTreeContainer = document.querySelector("#skills-tree-container") // container for the list of skills
let className = document.querySelector("#class")
let insightNum = document.querySelector("#number-1")
let intimidationNum = document.querySelector("#number-2")
let persuasionNum = document.querySelector("#number-3")
let dexNum = document.querySelector("#number-4")
let attackNum = document.querySelector("#number-5")
let healthNum = document.querySelector("#number-6")

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
    constructor(name,chosenClass) {
        this.name = name;
        this.chosenClass = chosenClass;
    }
}


//REFERENCES TO CHOSENCLASS IN THE CLASS PLAYER
const characterClass = [
    warrior = {
        name: "Warrior",
        insight: 2,
        intimidation: 5,
        persuasion: -1,
        dexterity: 2,
        attack: 5,
        health: 20,
    },
    rogue = {
        name: "Rogue",
        insight: 2,
        intimidation: -1,
        persuasion: 5,
        dexterity: 5,
        attack: 3,
        health: 15,
    },
    mage = {
        name: "Mage",
        insight: 5,
        intimidation: 2,
        persuasion: 1,
        dexterity: -1,
        attack: 7,
        health: 15,
    }
]

//When you click the information is shown on the details side of character creation
warriorClass.addEventListener("click", () => {
    warriorInfo.classList.toggle("hide")
    rogueInfo.classList.add("hide")
    mageInfo.classList.add("hide")
    className.textContent = characterClass[0].name
    insightNum.textContent = characterClass[0].insight
    intimidationNum.textContent = characterClass[0].intimidation
    persuasionNum.textContent = characterClass[0].persuasion
    dexNum.textContent = characterClass[0].dexterity
    attackNum.textContent = characterClass[0].attack
    healthNum.textContent = characterClass[0].health 
})

rogueClass.addEventListener("click", () => {
    rogueInfo.classList.toggle("hide")
    warriorInfo.classList.add("hide")
    mageInfo.classList.add("hide")
    className.textContent = characterClass[1].name
    insightNum.textContent = characterClass[1].insight
    intimidationNum.textContent = characterClass[1].intimidation
    persuasionNum.textContent = characterClass[1].persuasion
    dexNum.textContent = characterClass[1].dexterity
    attackNum.textContent = characterClass[1].attack
    healthNum.textContent = characterClass[1].health 
})

mageClass.addEventListener("click", () => {
    mageInfo.classList.toggle("hide")
    warriorInfo.classList.add("hide")
    rogueInfo.classList.add("hide")
    className.textContent = characterClass[2].name
    insightNum.textContent = characterClass[2].insight
    intimidationNum.textContent = characterClass[2].intimidation
    persuasionNum.textContent = characterClass[2].persuasion
    dexNum.textContent = characterClass[2].dexterity
    attackNum.textContent = characterClass[2].attack
    healthNum.textContent = characterClass[2].health 
})


const characterCreation = { //object that contains functions for character creation
    player: [],
    dndClass: [],
    playerReady: false,
    playerNameReady: false,
    playerCharacReady:false,
    nameCharacter: function (nameParam) {
        if (characName.value === "") { //prevents submit button from working if character name field empty
            console.log("put thy name!")
            nameWarning.classList.remove("hide")
            return this.playerNameReady = false
        }
        if (!this.playerNameReady) { // replaces input and submit area with character name
            console.log("Player name set")
            nameContainer.textContent = characName.value
            this.playerNameReady = true
            // console.log(characterCreation.playerName)
        }
    },
    chooseClassCharacter: function () {
        if (mageInfo.classList.toggle("hide") === true) {
            this.dndClass.shift()
            this.dndClass.push(characterClass[2])
            this.playerCharacReady = true
        } else if (warriorInfo.classList.toggle("hide") === true) {
            this.dndClass.shift()
            this.dndClass.push(characterClass[0])
            this.playerCharacReady = true
        } else if (rogueInfo.classList.toggle("hide") === true) {
            this.dndClass.shift()
            this.dndClass.push(characterClass[1])
            this.playerCharacReady = true
        }
        console.log(this.dndClass)
    },
    createPlayer: function () {
        if(this.playerNameReady === true && this.playerCharacReady === true) {
            this.player.push(new Player(characName.value, this.dndClass[0]))
            console.log(this.player)
        }else{
            console.log('bye')
        }
    }
       
}

submitNameButton.addEventListener("click", (event) => { //after submit button is pressed the name of the character is added.
    event.preventDefault()
    characterCreation.nameCharacter()
})



const playerCharacter = characterCreation.player

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault()
    characterCreation.chooseClassCharacter()
    
})


readyButton.addEventListener("click", () => {
    characterCreation.createPlayer()
    console.log(playerCharacter[0].name)
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
    constructor(name, attack, dexterity) {
        this.name= name;
        this.attack = attack;
        this.dexterity = dexterity;
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

const chapter1 = [
    {
        id: 1,
        narrator: "A fire sweeps across the village. Screams can be heard all around you.",
    },
    {
        id: 2,
        narrator: "You stand at the middle of the village.",
    },
    {
        id: 3,
        dialogue: "How did this happen?",
    },
    {
        id: 4,
        dialogue: "I should ...",
        options: [
            {
                text: "go help!",
            },
            {
                text: "find help!"
            }
        ]
    }
]

// function startGame () {
//     playerCharacter[0].inventory = {}
// }

// function continueNarration (narratortext) {
//     const textNode = textBox.find(textNode => textNode.id === narratortext)
//     narratorTxt.textContent = textBox.narrator 
// }

// function contDialogue () {

// }

// function showTextNode(textNodeIndex) {

// }

// function chooseOptions () {

// }

// continueBtn.addEventListener("click", () => {

// })

// const textBox = [
//     {
//         id: 1,
//         narrator: "A fire sweeps across the village.  Screams can be heard all around you.",
//     }
// ]
