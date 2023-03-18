// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
class hangman {
  checkMatch(string) {
    return string=="python";
  }

  guess() {
    let answer = input("Guess the word:")
    if (this.checkMatch(answer)) {
      console.log("You survived!");
    } else {
      console.log("You lost!");
    }
  }
}

console.log("H A N G M A N");
let game = new hangman();
game.guess()
