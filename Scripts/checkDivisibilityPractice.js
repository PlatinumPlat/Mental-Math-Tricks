const nums = [7, 13, 17, 23, 29, 31, 37]

let score = 0;
let final = false;
let num1 = 0;
let foo = "";
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
    indx = Math.floor(Math.random() * nums.length);
    const cq = nums[indx];
    answer = document.getElementById("answer");
    answer.value = "";
    document.getElementById("next").disabled = true;
    boolean = Math.floor(Math.random() * 2);
    if (boolean == 0) {
        num1 = cq * (Math.floor(Math.random() * 20));
        foo = "yes";
    }
    if (boolean == 1) {
        num1 = Math.floor(Math.random() * 1000);
        foo = "no";
    }
    document.getElementById("question").textContent = String(num1) +", " + cq;
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
