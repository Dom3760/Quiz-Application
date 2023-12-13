const question = document.getElementById("Question")
// const button1 = document.getElementById("answer-1")
// const button2 = document.getElementById("answer-2")
// const button3 = document.getElementById("answer-3")
// const button4 = document.getElementById("answer-4")
const buttons = document.querySelectorAll(".answers")

let currentQuestionIndex = 0


const question1 = {
    question: "What is the best-selling video game of all time?",
    // answer: "Tetris",
    answers:[
        {option: "Tetris", correct: true},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: false}
    ]
}

const question2 = {
    question: 'In what year was the game "Fortnite" first released?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: true},
        {option: "COD B03", correct: false}
    ],
}

const question3 = {
    question: 'Which company developed the game series "The Legend of Zelda"?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: true},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: false}
    ],
}

const question4 = {
    question: 'What is the objective of the game "Tetris"?',
    answer: [
        {option: "Tetris", correct: true},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: false}
    ],
}

const question5 = {
    question: 'Who is the main character in the game "Super Mario Bros."?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: true}
    ],
}

const question6 = {
    question: 'What genre does the game "Counter-Strike" belong to?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: true},
        {option: "COD B03", correct: false}
    ],
}

const question7 = {
    question: 'Which popular game features a battle royale mode and is set in the "Call of Duty" universe?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: true},
        {option: "COD B03", correct: false}
    ],
}

const question8 = {
    question: "What gaming console is produced by Sony Interactive Entertainment?",
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: true},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: false}
    ],
}

const question9 = {
    question: 'In the game "Pokémon," what type is effective against water-type Pokémon?',
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: false},
        {option: "COD B03", correct: true}
    ],
}

const question10 = {
    question: "What does RPG stand for in the context of video games?",
    answer: [
        {option: "Tetris", correct: false},
        {option: "Super Mario 64", correct: false},
        {option: "Minecraft", correct: true},
        {option: "COD B03", correct: false}
    ],
}

var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]