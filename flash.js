//npm requirements
var inquirer = require('inquirer');

var questions = ["Who ordered Ned Stark's execution?", "What is the nickname of Lord Petyr Baelish?", "What's the name of the direwolf pup raised by Jon Snow?", "What name do the people of the Seven Kingdoms call the Free Folk who live beyond the Wall?", "Who is leader of the religious movement formed during the War of the Five Kings?", "Name the military order which holds and guards the Wall?"];
var answers = ["Joffrey Baratheon", "Littlefinger", "Ghost", "Wildlings", "The High Sparrow", "The Night's Watch"];
var correct = 0;
var incorrect = 0;
var index = 0;

//constructor
function BasicFlashcard(q, a) {
  this.question = q;
  this.answer = a;
}; //BasicFlashcard constructor

BasicFlashcard.prototype.printStats = function () {
  console.log(`
    ---- SCORE ----
    Correct: ${correct}
    Incorrect: ${incorrect}
  `);
};//prototype

function start() {
  console.log(`
    -- The Game of Thrones Flashcard Game --

  `);
};

function validate() {
  var flashCard = new BasicFlashcard(questions[index], answers[index]);

  inquirer.prompt({
    type: 'input',
    name: 'action',
    message: flashCard.question
  }).then(function(answer) {
    if (answer.action === flashCard.answer) {
      correct++;
      console.log("CORRECT!");
    }
    else {
      incorrect++;
      console.log("WROOONG!");
      console.log("Correct answer is " + flashCard.answer);
    }
    index++;
    if (index < questions.length) {
      validate();
    }
    else {
      flashCard.printStats();
    }
  });//inquirer

}; //validate function

start();
validate();
