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
    let emptyLetterArray = [];
    for( let i =0; i<this.wordArray.length; i++){
        emptyLetterArray.push(new LetterProcessor(this.wordArray[i]));
    }
    return emptyLetterArray;
};

var newWord = new CurrentWord("Puppy");

console.log(newWord.makeLettersArrayOfLetterObjects());
console.log(newWord);

CurrentWord.prototype.findLetter = function(letterGuess){
    for (let i =0; i < this.emptyLetterArray.length; i++){
        if(letterGuess ===this.emptyLetterArray[i].letter){
            this.emptyLetterArray[i].hasLetterBeenGuessed = true;
            
        }
    }
};

//Make a method prototye and updates letter than is guess by the user or underscore.
//Display letter
//Check is everything has been guess
//export module
