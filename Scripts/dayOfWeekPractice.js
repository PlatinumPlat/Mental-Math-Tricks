const nums = [2, 3, 4, 5, 6, 8, 9, 10, 11]

let score = 0;
let final = false;
let num1 = 0;
let indx = 0;

function toggleSubmit() {
    answer = document.getElementById("answer");

    if (answer.value.length > 0) {
        $("#submit").prop('disabled', false);
    } else {
        $("#submit").prop('disabled', true);
    }
}

function loadQuestion() {
    $("#submit").prop('disabled', true);
    year = Math.floor(Math.random() * 1246) + 1753;
    month = Math.floor(Math.random() * 13);
    day = Math.floor(Math.random() * 28);
    answer = document.getElementById("answer");
    answer.value = "";
    document.getElementById("next").disabled = true;
    document.getElementById("question").textContent = String(year) + "/" + String(month) + "/" + String(day);
    document.getElementById("result").textContent = "";
}


function checkAnswer(answer) {
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;
    if (answer == foo) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${foo}.`;
    }
}


document.getElementById("next").addEventListener("click", function () {
    loadQuestion();
});


document.getElementById("submit").addEventListener("click", function () {
    answer = document.getElementById("answer").value;
    checkAnswer(answer);
});

loadQuestion();
