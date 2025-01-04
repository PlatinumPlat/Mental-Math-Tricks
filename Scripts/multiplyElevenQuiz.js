const questions = [
    {
        id: 1,
        question: "62 * 11",
        correctAnswer: 628,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 628."
    },
    {
        id: 2,
        question: "41 * 11",
        correctAnswer: 451,
        explanation: "Similar to the first question, we add 4+1 first to get 5. Afterwards, our answer is simply 451."
    },
    {
        id: 3,
        question: "27 * 11",
        correctAnswer: 297,
        explanation: "Like the previous two questions, we first calculate 2+7=9. Our answer is 297."
    },
    {
        id: 4,
        question: "86 * 11",
        correctAnswer: 946,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 628."
    },
    {
        id: 5,
        question: "91 * 11",
        correctAnswer: 1001,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 628."
    },
    {
        id: 6,
        question: "49 * 11",
        correctAnswer: 539,
        explanation: "Add the carried over digit of 13(1) to 4. 4+1 = 5."
    },
    {
        id: 7,
        question: "Bonus: 854 * 11",
        correctAnswer: 9394,
        explanation: "Bonus question explanation. Answer is 9394."
    }
];

let currentQuestion = 1;
let score = 0;

function loadQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById("question").textContent = questionObj.question;
    document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
    const questionObj = questions[currentQuestion];
    if (answer === questionObj.correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${questionObj.correctAnswer}.`;
    }

    currentQuestion++;
    if (currentQuestion < 7) {
        nextButton();
    } else {
        document.getElementById('next').style.display = "none";
        setTimeout(showFinalScore, 1500);
    }
}

function showFinalScore() {
    document.getElementById("submit").style.display = "none";
    document.getElementById("result").textContent = `The Quiz is over! Your final score is: ${score} out of ${questions.length}. If you scored less than 3, please try again after reviewing the article. :)`;
}

function nextButton() {
    document.getElementById("next").addEventListener("click", function () {
      loadQuestion();
    });
}

if (document.getElementById("submit").disabled === false) {
    console.log("HI!")
    document.getElementById("submit").addEventListener("click", function () {
        checkAnswer(answer);
      });
}

loadQuestion()