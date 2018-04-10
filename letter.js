
//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet





var LetterProcessor = function(letter,hasLetterBeenGuessed){
    this.letter = letter;
    this.hasLetterBeenGuessed = hasLetterBeenGuessed;
}

LetterProcessor.prototype.letterOrUnderscoreReveal = function(){
    //   * A function that returns the underlying character if the letter has been guessed, or a 
//   * placeholder (like an underscore) if the letter has not been guessed

};

LetterProcessor.prototype.guessProcessing = function(){
    //   * A function that takes a character as an argument and checks it against the
//   *  underlying character, updating the stored boolean value to true if it was guessed correctly

}