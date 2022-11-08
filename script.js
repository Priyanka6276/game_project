//===================VARIABLES FOR BEFORE ADVENTURE===================

//START VARIABLES
const startContainer = document.querySelector("#start-container") //the container at the start
const startButton = document.querySelector("#start") // the start button at the beginning of the game


//CHARACTER CREATION VARIABLES
//Name Container Variables
const nameContainer = document.querySelector("#name-container") //the container where you enter your name
const submitNameButton = document.querySelector("#submit-name") // the submit button
const characName = document.querySelector("#character-name") // character name value
const nameWarning = document.querySelector(".warning") // warning messages

//Class Picture Variables 
const warriorPic = document.querySelector("#warrior-sword")
const roguePic = document.querySelector("#rogue-bow")
const magePic = document.querySelector("#mage-staff")

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
    nameContainer.classList.add("flex")
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

const dummyObject = {
    name: "",
        insight: -200,
        intimidation: -200,
        persuasion: -200,
        dexterity: -200,
        attack: -200,
        health: -200,
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
    warriorPic.classList.remove("hide")
    roguePic.classList.add("hide")
    magePic.classList.add("hide")
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
    warriorPic.classList.add("hide")
    roguePic.classList.remove("hide")
    magePic.classList.add("hide")
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
    warriorPic.classList.add("hide")
    roguePic.classList.add("hide")
    magePic.classList.remove("hide")
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

let playerCharacter = new Player("",dummyObject)

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
            // playerCharacter = new Player (characName.value, this.dndClass[0])
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





confirmBtn.addEventListener("click", (event) => {
    event.preventDefault()
    characterCreation.chooseClassCharacter()
    
})


//===================STORY BEGINS===================

//STORY VARIABLES


const narratorContainer = document.querySelector("#narrator-container")
const narrator = document.querySelector("#narrator")
const optionBtn = document.querySelector("#option-buttons")
const btn = document.querySelector(".btn")

readyButton.addEventListener("click", () => {
    characterCreation.createPlayer()
    console.log(playerCharacter)
    readyStory()
    storyBegins()
})


//TO MOVE ON TO THE ADVENTURE
function readyStory() {
    nameContainer.classList.add("hide")
    nameContainer.classList.remove("flex")
    classesContainer.classList.add("hide")
    readyContainer.classList.add("hide")
    characCreatPicContainer.classList.add("hide")
    skillTreeContainer.classList.add("hide")
    narratorContainer.classList.remove("hide")
}


// Enemy Class
class Enemy {
    constructor(name, attack, dexterity, health) {
        this.name= name;
        this.attack = attack;
        this.dexterity = dexterity;
        this.health = health;
    }
}

const goblin1 = new Enemy("Goblin Minion", 1, 0, 6)




// const storyBegins = function () {
//     showNarratorText("a")
// }
function storyBegins () {
    showNarratorText("a")
    console.log(playerCharacter)
}

//runs the narration with choices
function showNarratorText(textIndex){
    playerCharacter = characterCreation.player[0]
    const textNode = story.find(textNode => textNode.id === textIndex)
    narrator.innerText = textNode.text
    while (optionBtn.firstChild){
        optionBtn.removeChild(optionBtn.firstChild)
    }
    
    textNode.choices.forEach( option => {
        if (showChoice(option)) {
            const button = document.createElement("button")
            button.innerText = option.choice
            button.classList.add("btn")
            button.addEventListener("click", () => selectChoices(option))
            optionBtn.appendChild(button)
        }
    })
}

function showChoice(option) {
    return true
}

//Decides the destination of each choice
function selectChoices(option){
    let nextTextId = ""
    if(option.skillCheck === true) {
        nextTextId = option.destination[0]
    } else if (option.skillCheck === false) {
        nextTextId = option.destination[1]
    } 
    if(nextTextId === 0){
        return storyBegins()
    } else if (nextTextId === 1) {
        window.location.reload()
    }
    showNarratorText(nextTextId)
    console.log(playerCharacter)
}

//D20 R0LL
function d20(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


//SKILLS CHECK FUNCTIONS
const skillCheck = {
    dexterityCheck: function (dc){
        if(playerCharacter.chosenClass.dexterity + d20(0, 20) > dc) {
            console.log("dex")
            return true
        } else {
            console.log(playerCharacter)
            return false
        } 
    },
    persuasionCheck: function (dc){
        if(playerCharacter.chosenClass.persuasion  + d20(0, 20) > dc) {
            console.log("persuasion")
            return true
        } else {
            return false
        } 
    },
    intimidationCheck: function (dc){
        if(playerCharacter.chosenClass.intimidation  + d20(0, 20) > dc) {
            console.log("intimidation")
            return true
        } else {
            return false
        } 
    },
    insightCheck: function (dc){
        if(playerCharacter.chosenClass.insight  + d20(0, 20) > dc) {
            console.log("insight")
            return true
        } else {
            console.log(playerCharacter)
            return false
        } 
    },
}


//STORY 

const story = [
    {
        id: "a",
        text: "You wake up in the middle of a village that is being overrun with goblins.",
        choices: [
            {
                choice: "Continue",
                skillCheck: true,
                destination: ["b"]
            }
        ]
    },
    {
        id: "b",
        text: "As you are looking around, you see someone in a tree trying to escape a very angry goblin. Do you...",
        choices: [
            {
                choice: "[Dexterity] Save the person",
                skillCheck: skillCheck.dexterityCheck(7),
                destination: ["c1", "c2"]
            },
            {
                choice: "Leave the person to fend for themselves",
                skillCheck: true,
                destination: ["death1"],
            }
        ]
    },
    {
        id: "death1",
        text: "You selfishly leave the person to die. While you are running away you trip on a rock and fall off a cliff. Karma...",
        choices: [
            {
                choice: "Restart to be a better hero.",
                skillCheck: true,
                destination: [0],
            }
        ]
    },{
        id: "c1",
        text: "You successfully take down the goblin and save the person from the tree. They thank you. You ask about what happened in the village, but the person is hesitant to answer.",
        choices: [
            {
                choice: "[Persuasion] Ask them nicely.",
                skillCheck:skillCheck.persuasionCheck(10),
                destination: ["d1","d3"],
            },
            {
                choice: "[Intimidation] Ask them not so nicely.",
                skillCheck: skillCheck.intimidationCheck(8),
                destination: ["d2", "d3"],
            },
            {
                choice: "Ask them again",
                skillCheck: true,
                destination: ["d4"]
            }
        ]
    },
    {
        id: "c2",
        text: "You think you are being sneaky, but this particular goblin is very keen. You enter into combat.",
        choices: [
            {
                choice: "[Dexterity] Attack",
                skillCheck: skillCheck.dexterityCheck(goblin1.dexterity + d20(0,20)),
                destination: ["c3", "c4"]
            },
            {
                choice: "Run away because this is not your problem.",
                destiantion: ["death1"]
            }
        ]
    },
    {
        id: "c3",
        text: `This goblin is no match for a you. The goblin is defeated and the person is safe though they are unimpressed with your sneaking skills.`,
        choices: [
            {
                choice: "Talk to the person.",
                skillCheck: true,
                destination: ["c1"]
            }
         ]
    },
    {
        id: "c4",
        text: "The goblin gains the upperhand in the fight. Now their attention is on you. The villager that was in the tree takes down the goblin from behind.",
        choices: [
            {
                choice: "Continue",
                skillCheck: true,
                destination:["d5"]
            }
            
        ]
    },
    {
        id: "d1",
        text: "You're so nice to them that they feel bad about keeping secrets from you. They tell you that a group of villagers stole a jewel from the Goblin King. Disappointed in the villagers, you offer to bring the jewel back to the Goblin King.",
        choices: [
            {
                choice: "Continue",
                skillCheck: true,
                destination:["e1"]
            }
        ]
    },
    {
        id:"d2",
        text: "You're so mean to them, that they burst into tears.They tell you that a group of villagers stole a jewel from the Goblin King. Disappointed in the villagers, you offer to bring the jewel back to the Goblin King. ",
        choices: [
            {
                choice: "Continue",
                skillCheck: true,
                destination:["e1"]
            }
        ]
    },
    {
        id:"d3",
        text: "They become annoyed with you and storm off. I guess saving them from a goblin meant nothing. ",
        choices: [
            {
                choice: "[Insight] Observe the goblins",
                skillCheck: skillCheck.insightCheck(10),
                destination:["e2", "e3"]
            }
        ]
    },
    {
        id: "d4",
        text: "They reveal nothing. They thank you again and walk away.",
        choices:[
            {
                choice: "[Insight] Observe the goblins",
                skillCheck: skillCheck.insightCheck(10),
                destination:["e2", "e3"]
            }
        ]
    },
    {
        id: "d5",
        text: "You thank the villager for their assistance. They seem unimpressed with you, but they still thank you for trying.",
        choices: [ 
            {
                choice: "[Persuasion] Ask them nicely about the goblins.",
                skillCheck: skillCheck.persuasionCheck(10),
                destination: ["d1","d3"],
            },
            {
                choice: "[Intimidation] Ask them not so nicely about the goblins.",
                skillCheck: skillCheck.intimidationCheck(16),
                destination: ["d2", "d3"],
            },
            {
                choice: "Ask them again",
                skillCheck: true,
                destination: ["d4"]
            }
        ]
    },
    {
        id: "e1",
        text: "You head to the forest to return the jewel to the Goblin King. You are not sure what lies ahead but you are excited.",
        choices: [
            {
                choice: "Continue Story",
                skillCheck: true,
                destination: ["end"]
            }
        ]
    },
    {
        id: "e2",
        text: "You know goblins usually stay deep in the woods. So for them to come out would mean that they were intending to come to this village. You come to the conclusion that the villagers did something to the goblins to make them angry.",
        choices: [
            {
                choice: "Continue",
                skillCheck: true,
                destination: ["end"],
            }
        ]
    },
    {
        id: "e3",
        text: "You know nothing about goblins. You tried your best and now you just want to go home. Wherever that is.",
        choices: [
            {
                choice: "Go home",
                skillCheck: true,
                destination: ["end"],
            }
        ]
    },
    {
        id: "end",
        text: "Story in development.",
        choices: [
            {
                choice: "Return To Start Menu",
                skillCheck: true,
                destination: [1]
            }
        ]
    }
]

storyBegins()