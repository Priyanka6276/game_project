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
    constructor(name, attack, dexterity, health) {
        this.name= name;
        this.attack = attack;
        this.dexterity = dexterity;
        this.health = health;
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

let player = new Player('priyanka', characterClass[0])
console.log(player.chosenClass)

const goblin1 = new Enemy("Goblin Minion", 1, 0, 6)

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


function showChoice(option) {
    return true
}

function selectChoices(option) {
    let nextTextId = ""
    if(option.skillCheck === true) {
        nextTextId = option.destination[0]
    } else if (option.skillCheck === false) {
        nextTextId = option.destination[1]
    }
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
        return true
    } else {
        return false
    }
}

function persuasionCheck(dc) {
    if(player.chosenClass.persuasion + d20(0,20) > dc) {
        return true
    } else {
        return false
    }
}

function intimidationCheck(dc) {
    if(player.chosenClass.intimidation+ d20(0,20) > dc) {
        return true
    } else {
        return false
    }
}

function insightCheck(dc) {
    if(player.chosenClass.insight+ d20(0,20) > dc) {
        return true
    } else {
        return false
    }
}

function attackEnemy () {

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
                destination: ["death1"],
            }
        ]
    },
    {
        id: "c1",
        text: "You successfully take down the goblin and save the person from the tree. They thank you. You ask about what happened in the village, but the person is hesitant to answer.",
        choices: [
            {
                choice: "[Persuasion] Ask them nicely.",
                skillCheck: persuasionCheck(10),
                destination: ["d1","d3"],
            },
            {
                choice: "[Intimidation] Ask them not so nicely.",
                skillCheck: intimidationCheck(8),
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
                skillCheck: dexterityCheck(goblin1.dexterity + d20(0,20)),
                destination: ["c4", "c5"]
            },
            {
                choice: "Run away because this is not your problem.",
                destiantion: ["death1"]
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
    },
    {
        id: "c4",
        text: `This goblin is no match for a ${player.chosenClass.name}. The goblin is defeated and the person is safe though they are unimpressed with your sneaking skills.`,
        choices: [
            {
                choice: "Talk to the person.",
                skillCheck: true,
                destination: ["c1"]
            }
         ]
    },
    {
        id: "c5",
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
                skillCheck: insightCheck(10),
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
                skillCheck: insightCheck(10),
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
                skillCheck: persuasionCheck(10),
                destination: ["d1","d3"],
            },
            {
                choice: "[Intimidation] Ask them not so nicely about the goblins.",
                skillCheck: intimidationCheck(16),
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
    }

]

console.log(story[1].choices[0].skillCheck)

gameStart()