let currentQuestion = 0;
let score = 0;
let final = false;
let num1 = 0;
const maxNum = 1000;

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
    boolean1 = Math.floor(Math.random() * 2);
    boolean2 = Math.floor(Math.random() * 2);
    num1 = Math.floor(Math.random() * maxNum);
    num2 = Math.floor(Math.random() * maxNum);

    if (boolean1 == 0) {
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
    }
    if (boolean1 == 1) {
        num1 = Math.floor(Math.random() * 1000);
        num2 = Math.floor(Math.random() * 1000);
    }

    document.getElementById("question").textContent = String(num1) + " * " + String(num2);
    document.getElementById("result").textContent = "";
    toggleSubmit();
}

function checkAnswer(answer) {
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;

    if (answer == num1*11) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${num1*num2}.`;
    }
}


document.getElementById("next").addEventListener("click", function () {
    loadQuestion();
});


document.getElementById("submit").addEventListener("click", function () {
    answer = document.getElementById("answer").value;
    checkAnswer(answer);
});

loadQuestion()