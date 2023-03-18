const input = require('sync-input');

class Hangman {
  static setup = {
    "words": ["python", "java", "swift", "javascript"],
    "lost": "You lost!",
    "won": "You survived!",
    "start": "Guess the word:",
    "game": "H A N G M A N"
  }

  constructor() {
    console.log(Hangman.setup["game"]);
    this.word = Hangman.setup["words"][Math.floor(Math.random() * Hangman.setup["words"].length)];
  }

  checkMatch(answer) {
    return answer === this.word;
  }

  guess() {
    let answer = input(Hangman.setup["start"]);
    if (this.checkMatch(answer)) {
      console.log(Hangman.setup["won"]);
    } else {
      console.log(Hangman.setup["lost"]);
    }
  }
}

let game = new Hangman();
game.guess();
