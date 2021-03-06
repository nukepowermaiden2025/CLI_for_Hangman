import { S_IFIFO } from "constants";

// **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting to
//  guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the 
// function on each letter object (the first function defined in `Letter.js`) that displays
//  the character or an underscore and concatenate those together.


var LetterProcessor = require("./letter.js");


var CurrentWord = function(word){
    this.wordArray = word.split("");

};


//Take the current word split up into letters so that we can process them and
//store that letter and whether is has been guessed or not.
CurrentWord.prototype.makeLettersArrayOfLetterObjects = function(){
    let LetterObjectsArray = [];
    for( let i =0; i<this.wordArray.length; i++){
        LetterObjectsArray.push(new LetterProcessor(this.wordArray[i]));
    }
    return LetterObjectsArray;
};

var newWord = new CurrentWord("Puppy");

console.log(newWord.makeLettersArrayOfLetterObjects());
console.log(newWord);
//This will find the letter in the current word array and then
//if it is found it will set the empty letter object property has been guessed equal to true.
CurrentWord.prototype.findLetter = function(letterGuess){
    for (let i =0; i < this.LetterObjectsArray.length; i++){
        if(letterGuess ===this.LetterObjectsArray[i].letter){
            this.LetterObjectsArray[i].hasLetterBeenGuessed = true;  
        }
    }
};
console.log(newWord.findLetter)
//Make a method prototye and updates letter that is guessed by the user or fill underscore.
CurrentWord.prototype.updateWordDisplay = function(){
    let wordDisplay = [];
    for(let i=0; i<this.LetterObjectsArray.length; i++){
        wordDisplay.push(this.LetterObjectsArray[i].letterOrUnderscoreReveal());//This is suppose to be showing the letter or the underscore to this new word display
    }
}

//Check is everything has been guess
CurrentWord.prototype.checkIfWin = function(){
    let count = 0
    for(let i=0; i<this.LetterObjectsArray.length; i++){
        if(this.LetterObjectsArray[i].hasLetterBeenGuessed&& count!==LetterObjectsArray.length){//I mean to say that id tf the has letter been guessed property is still false, keep playing
            count +=1;
        }else{
            console.log("You win!");
        }
        
    }
}
//export module
