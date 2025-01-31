let currentQuestion = 0;
let score = 0;
let final = false;
let num1 = 0;


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
    boolean = Math.floor(Math.random() * 2);
    if (boolean == 0) {
        num1 = Math.floor(Math.random() * 100);
    }
    if (boolean == 1) {
        num1 = Math.floor(Math.random() * 1000);
    }
    document.getElementById("question").textContent = String(num1) +" * " + String(num1);
    document.getElementById("result").textContent = "";
    toggleSubmit();
}

function checkAnswer(answer) {
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;

    if (answer == num1*num1) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${num1*11}.`;
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