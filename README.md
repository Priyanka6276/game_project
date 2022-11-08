# **Dungeons and Dragons Inspired Game**
This is a choiced based game. It follows a very simplified version of dungeons and dragons (I will be refering to it as D&D from now on). In character creation you can choose a class and that will determine your stats for the rest of the game. 

## **Motivation**
I think the concept of D&D works well for a game. And as a fantasy fan it was exciting to create a story based on choices. 

## **Layouts**
Something I'm proud of is the layout of the game. I used CSS grid for the character creation menu. The template I created for this menu is below:

![](https://file%2B.vscode-resource.vscode-cdn.net/c%3A/Users/chanb/Desktop/software_classwork/project-1-game/images/character-creation-template.png?version%3D1667883070490)

The skills list also used CSS grid to layout each skill/modifier. This was the way I thought worked best. If given more time, I would like to find a more efficent way to list each skill/modifier.

I also made a template for the narrator's box. This used flex box. At first I thought to add more details on the screen but determined to make the layout simpler by using flex. 

![](https://file%2B.vscode-resource.vscode-cdn.net/c%3A/Users/chanb/Desktop/software_classwork/project-1-game/images/narrator-tempalte.png?version%3D1667883318469)

I made some alterations in the CSS as I was working on the code, so the templates are not so accurate to the code. 

### Problems Faced
The layout is not mobile friendly, so the images and text will move out of place. With more time, I can successfully make this mobile friendly. 

## **Character Creation**
This took the longest time while I was working. Part of it was figuring out the layout and the next part was creating the player's character. 

For the player I used a Class to create them. Each "chosenClass" attribute was made into an Object. I thought this was the best way to contain the details of each D&D class. When each class was clicked it will display in the skill container on the left. The picture associated with the class will also show. I used the toggle method to show the description of each class. 

I created a character creation object (characterCreation) which held the operations to create the player. This took me a long time to do because first I had to store the player's name as a value that could be accessed and then store the player's chosen class too. 

### Problems Faced
However, a problem I faced was that after clicking the "Start Your Adventure" the stored player's data could not be accessed later. I think with more testing and time I can successfully get this feature to work. The game will still work, but you cannot add your character's modifiers to your "roll."

![](https://file%2B.vscode-resource.vscode-cdn.net/c%3A/Users/chanb/Desktop/software_classwork/project-1-game/images/Screenshot-showing-character-creation.jpg?version%3D1667884306924)

## **Story Begins**
### Behind The Scenes Stuff
Getting the narration and choices to work took a long time to figure out. It required creating multiple functions to make the story move along. There is a storyBegins function that will start the narration. The narration function (showNarratorText) changes the narration text as well as the button text. This function contains other functions within it to help it run. 
Each skill check requires a "roll", which is its own function. The skill checks uses the d20 function to determine whether a skill check is true or false. 

### The Story
The story is contained in an array that contains objects. Each object is a choice within the game. Some choices require skill checks and others don't. The ones that do require skill checks contain a function for the appropriate skill check. Depending on if it returns true or false will determine the next choice. 

## **How To Play**
The game relies on buttons to play. 
At the beginning press Start to proceed to the character creation menu. Type your name and click submit. Then select your class by clicking on it. Stats can be viewed on the left. Then click confirm. 

Once you have done that click on "Start Your Adventure."

The narration will begin and you can now start picking choices. 


## **Final Words and Future Thoughts**
Overall, the concept of the game is there and I am proud of it. With more time I can make the code and the styling work better. 

I would love to add a battle feature to the game because at the moment I am not utilizing the health and attack stats of the character.  