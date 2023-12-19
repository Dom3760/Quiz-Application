const questionBox = document.getElementById("Question");
const buttonContainer = document.getElementById("buttonContainer");
const buttons = document.querySelectorAll(".answers");
var nextButton = document.createElement("button");
let questionAnswered = false;
var score = 0;

let currentQuestionIndex = 0;

//function to display the question and the buttons
function display() {
  //if the current index is below 0 it will:
  if (currentQuestionIndex < 10 ) 
  {
    //take the current question and display it in the question box.
    questionBox.innerText = questions[currentQuestionIndex].question;
    //take each of the options from the objects and use a loop to show them on the page
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = questions[currentQuestionIndex].answer[i].option;
      //adds an event listener that will launch the function correct and inject the param i
      buttons[i].addEventListener("click", function () {
        correct(i);
      });
      //resets background color
      buttons[i].style.backgroundColor = "rgb(255, 122, 45)";
    }
    /*
    else if the index is above 10 it will display that they have completed the quiz 
    and tell the score/ remove the buttons
    */
  } else
  {
      questionBox.innerText = "Congrats! You have finished the quiz! Your score is: "+ score
      for (let i = 0; i < buttons.length; i++) 
      {
        buttons[i].remove();
      }
    }
}

/* 
after the display function adds event 
listener it will inject the ith button to check if it is correct
*/
function correct(clickedIndex) 
{
  //if questionAnswered is true then it will exit the function
  if (questionAnswered) 
  {
  return;
  }

  //after button is clicked it will set questionAnswered to true so it cant be clicked again.
  questionAnswered = true;

  //loop to check if option is correct if correct:
  for (let i = 0; i < buttons.length; i++) 
  {

    if (questions[currentQuestionIndex].answer[i].correct) 
    {
      //it will change color to green and increment the score
      buttons[i].style.backgroundColor = "green";
      if (clickedIndex === i) 
      {
        score++;
        console.log("Score:", score);
      }
      //else it will make the background red
    }else 
    {
      buttons[i].style.backgroundColor = "red";
    }
  }
  //launches displayNextButton function
  displayNextButton();
}

function displayNextButton() 
{
  //appends the button to the box and gives it text of next, class list added and adds event listener.
  nextButton.innerText = "Next";
  buttonContainer.appendChild(nextButton);
  nextButton.classList = "next";
  nextButton.addEventListener("click", next);
}

/*after ther next button is clicked it will increment the index, remove the next button, set the questionAnswered
to false so it can be clicked againg and launch display funtion.*/
function next() 
{
  currentQuestionIndex++;
  nextButton.remove();
  questionAnswered = false;
  display();
}


//defining questions and answers so when the question is up it will display, and so answers have true/false linked to them.
const question1 = {
    question: "What is the best-selling video game of all time?",
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

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

//display at bottom so it can know what to pull from.
  display();
  