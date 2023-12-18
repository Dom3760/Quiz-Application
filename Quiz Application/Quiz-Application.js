const questionBox = document.getElementById("Question");
const buttonContainer = document.getElementById("buttonContainer");
const buttons = document.querySelectorAll(".answers");
var nextButton = document.createElement("button");
let questionAnswered = false;
var score = 0;

let currentQuestionIndex = 0;

function display() {
  questionBox.innerText = questions[currentQuestionIndex].question;

  if (currentQuestionIndex <= 9) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = questions[currentQuestionIndex].answer[i].option;
      buttons[i].addEventListener("click", function () {
        correct(i);
      });
      buttons[i].style.backgroundColor = "rgb(255, 122, 45)";
    }
  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].remove();
    }
  }
}

function correct(clickedIndex) {
  if (questionAnswered) {
    return;
  }

  questionAnswered = true;

  for (let i = 0; i < buttons.length; i++) {
    if (questions[currentQuestionIndex].answer[i].correct) {
      buttons[i].style.backgroundColor = "green";
      if (clickedIndex === i) {
        // Increment score only for the clicked correct answer
        score++;
        console.log("Score incremented:", score);
      }
    } else {
      buttons[i].style.backgroundColor = "red";
    }
  }

  displayNextButton();
}

function displayNextButton() {
  nextButton.innerText = "Next";
  buttonContainer.appendChild(nextButton);
  nextButton.classList = "next";
  nextButton.addEventListener("click", next);
}

function next() {
  currentQuestionIndex++;
  nextButton.remove();
  questionAnswered = false;
  display();
}



const question1 = {
    question: "What is the best-selling video game of all time?",
    // answer: "Tetris",
    answer:[
        {option: "Tetris", correct: true},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: false}
    ]
}

const question2 = {
    question: 'In what year was the game "Fortnite" first released?',
    answer:[
        {option: "2000", correct: false},
        {option: "1989", correct: false},
        {option: "2017", correct: true},
        {option: "2019", correct: false}
    ],
}

const question3 = {
    question: 'Which company developed the game series "The Legend of Zelda"?',
    answer: [
        {option: "Valve", correct: false},
        {option: "Nintendo", correct: true},
        {option: "Ubisoft", correct: false},
        {option: "Sony", correct: false}
    ],
}

const question4 = {
    question: 'What is the objective of the game "Tetris"?',
    answer: [
        {option: "Stack Blocks", correct: true},
        {option: "Mine Blocks", correct: false},
        {option: "Gain Money", correct: false},
        {option: "Rob Banks", correct: false}
    ],
}

const question5 = {
    question: 'Who is the main character in the game "Super Mario Bros."?',
    answer: [
        {option: "Peach", correct: false},
        {option: "Luigi", correct: false},
        {option: "Bowser", correct: false},
        {option: "Mario", correct: true}
    ],
}

const question6 = {
    question: 'What genre does the game "Counter-Strike" belong to?',
    answer: [
        {option: "Role-Playing game", correct: false},
        {option: "survival", correct: false},
        {option: "FPS", correct: true},
        {option: "Strategy", correct: false}
    ],
}

const question7 = {
    question: 'Which popular game features a battle royale mode and is set in the "Call of Duty" universe?',
    answer: [
        {option: "Fortnite", correct: false},
        {option: "Minecraft", correct: false},
        {option: "Call Of duty Warzone", correct: true},
        {option: "Gas station simulator", correct: false}
    ],
}

const question8 = {
    question: "What gaming console is produced by Sony Interactive Entertainment?",
    answer: [
        {option: "Xbox", correct: false},
        {option: "Playstation", correct: true},
        {option: "Switch", correct: false},
        {option: "3ds", correct: false}
    ],
}

const question9 = {
    question: 'In the game "Pokémon," what type is effective against water-type Pokémon?',
    answer: [
        {option: "Fire", correct: false},
        {option: "Wind", correct: false},
        {option: "Ice", correct: false},
        {option: "Electric", correct: true}
    ],
}

const question10 = {
    question: "What does RPG stand for in the context of video games?",
    answer: [
        {option: "First person shooter", correct: false},
        {option: "Survival", correct: false},
        {option: "Role-Playing Game", correct: true},
        {option: "Building", correct: false}
    ],
}

const Finished = {
    question: "Congrats! You have finished the quiz! Your score is: "+ score
}

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, Finished]

buttons[currentQuestionIndex].addEventListener("click", function () {
    correct(0); // Use any index since it will be ignored
  });
  
  display();
  