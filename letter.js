
//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet





var LetterProcessor = function(letter){
    this.letter = letter;
    this.hasLetterBeenGuessed = false;
}

var newLetter =  new LetterProcessor("l");
console.log(newLetter);


LetterProcessor.prototype.letterOrUnderscoreReveal = function(){
    if(this.hasLetterBeenGuessed){
        return this.letter;
    }else{
        return "_";
    }
    //   * A function that returns the underlying character if the letter has been guessed, or a 
//   * placeholder (like an underscore) if the letter has not been guessed
};


console.log(newLetter.letter);
console.log(newLetter.letterOrUnderscoreReveal());



module.exports = LetterProcessor;

