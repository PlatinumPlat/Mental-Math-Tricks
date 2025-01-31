const questions = [
    {
        question: "62 * 11",
        correctAnswer: 682,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 682."
    },
    {
        question: "41 * 11",
        correctAnswer: 451,
        explanation: "Similar to the first question, we add 4+1 first to get 5. Afterwards, our answer is simply 451."
    },
    {
        question: "27 * 11",
        correctAnswer: 297,
        explanation: "Like the previous two questions, we first calculate 2+7=9. Our answer is 297."
    },
    {
        question: "86 * 11",
        correctAnswer: 946,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 628."
    },
    {
        question: "91 * 11",
        correctAnswer: 1001,
        explanation: "We add 6+2 to calculate 8, which we then smack in the middle of the 6 and 2 to end up with 628."
    },
    {
        question: "49 * 11",
        correctAnswer: 539,
        explanation: "Add the carried over digit of 13(1) to 4. 4+1 = 5."
    },
    {
        question: "Bonus: 854 * 11",
        correctAnswer: 9394,
        explanation: "Bonus question explanation. Answer is 9394."
    }
];

let currentQuestion = 0;
let score = 0;
let final = false;

function toggleSubmit() {
    input = document.getElementById("answer");

    if (input.value === "" || isNaN(input.value)) {
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
      }
}

function loadQuestion() {
    answer = document.getElementById("answer");
    answer.value = "";
    document.getElementById("next").disabled = true;
    const questionObj = questions[currentQuestion];
    document.getElementById("question").textContent = questionObj.question;
    document.getElementById("result").textContent = "";
    toggleSubmit();
}

function checkAnswer(answer) {
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;
    const questionObj = questions[currentQuestion];

    document.getElementById("explanation-box").style.display = "block";
    if (answer == questionObj.correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${questionObj.correctAnswer}.`;
    }

    document.getElementById("explanation").textContent = questionObj.explanation;
    document.getElementById("explanation").textContent = questionObj.explanation;


    currentQuestion++;
    if (currentQuestion < 7) {
        nextButton();
    } else {
        document.getElementById('next').style.display = "none";
        document.getElementById("showFinalScore").style.display = "block";
        final = true;
    }
}

function showFinalScore() {
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("showFinalScore").style.display = "none";
    document.getElementById("result").textContent = `The Quiz is over! Your final score is: ${score} out of ${questions.length}. If you scored less than 3, please try again after reviewing the article. :)`;
}

function nextButton() {
    document.getElementById("next").addEventListener("click", function () {
        document.getElementById("explanation-box").style.display = "none";
        loadQuestion();
    });
}

if (document.getElementById("submit").disabled === false) {
    document.getElementById("submit").addEventListener("click", function () {
        answer = document.getElementById("answer").value;
        checkAnswer(answer);
      });
}

document.getElementById("showFinalScore").addEventListener("click", function () {
    if (final == true) {
        showFinalScore();
    }
});

loadQuestion()