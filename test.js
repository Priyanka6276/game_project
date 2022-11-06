const narratorContainer = document.querySelector("#narrator-container")
const narrator = document.querySelector("#narrator")
const optionBtn = document.querySelector("#option-buttons")

class Player {
    constructor(name,chosenClass) {
        this.name = name;
        this.chosenClass = chosenClass;
    }
}

class Enemy {
    constructor(name, attack, dexterity) {
        this.name= name;
        this.attack = attack;
        this.dexterity = dexterity;
    }
}

const characterClass = [
    warrior = {
        name: "Warrior",
        insight: 2,
        intimidation: 5,
        persuasion: -1,
        dexterity: 2,
        attack: 5,
        health: 20,
    }
]

const player = new Player('priyanka', characterClass[0])
console.log(player.chosenClass.dexterity)

const goblin1 = new Enemy("Goblin Minion", 1, 1)

function gameStart () {
    showNarratorText("a")
}

function showNarratorText(textIndex){
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



function showChoice(option){
    return true
}

// function checkSkill () {
//     if(option.skillCheck === true) {
//         return selectChoices()
//     } else {
//         return option.destination[1]
//     }
// }

function selectChoices(option) {
    const nextTextId = option.destination[0]
    if(nextTextId === 0){
        return gameStart()
    }
    showNarratorText(nextTextId)
}

function d20(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function dexterityCheck(dc) {
    if(player.chosenClass.dexterity + d20(0, 20) > dc) {
        console.log('player succeeds')
        return true
    } else {
        return false
        console.log('player fails')
    }
}

function checkSkill () {
    if(skillCheck = true) {
        destination.pop()
    } else {
        destination.shift()
    }
}

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
                skillCheck: dexterityCheck(7),
                destination: ["c1", "c2"]
            },
            {
                choice: "Leave the person to fend for themselves",
                skillCheck: true,
                destination: "c3",
            }
        ]
    },
    {
        id: "c1",
        text: "You successfully take down the goblin and save the person from the tree. They thank you. You ask about what happened in the village, but the person is hesitant to answer.",
        choices: [
            {
                choice: "[Persuasion] Ask them nicely.",
                skillCheck: "",
                destination: "d1",
            },
            {
                choice: "[Intimidation] Ask them not so nicely.",
                skillCheck:"",
                destination: "d2",
            },
            {
                choice: "Ask them again",
                destination: "d3"
            }
        ]
    },
    {
        id: "c2",
        text: "You think you are being sneaky, but this particular goblin is very keen. You enter into combat.",
        choices: [
            {
                choice: "Attack",
            },
            {
                choice: "Run away because this is not your problem."
            }
        ]
    },
    {
        id: "c3",
        text: "You selfishly leave the person to die. While you are running away you trip on a rock and fall off a cliff. Karma...",
        choices: [
            {
                choice: "Restart to be a better hero.",
                destination: 0,
            }
        ]
    }
]

console.log(story[1].choices[0].skillCheck)

gameStart()