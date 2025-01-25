const questions = [
    {
        question: "Janurary 19, 2007",
        correctAnswer: "Friday",
        explanation: `Using the charts,\n`+
                    `6+19+1 = 26\n`+
                    `Largest multiple of 7: 21\n`+
                    `Therefore, 26-21 = 5, which is Friday.`
    },
    {
        question: "Feburary 14, 2012",
        correctAnswer: "Tuesday",
        explanation: `Using the charts,\n` +
            `1+14+1 = 16\n` +
            `Largest multiple of 7: 14\n` +
            `Therefore, 16-14 = 2, which is Tuesday.`
    },
    {
        question: "June 20, 1993",
        correctAnswer: "Sunday",
        explanation: `Using the charts,\n` +
            `3+5+20 = 28\n` +
            `Largest multiple of 7: 21\n` +
            `Therefore, 26-21 = 5, which is Sunday.`
    },
    {
        question: "Janurary 19, 2007",
        correctAnswer: "Friday",
        explanation: `Using the charts,\n` +
            `6+19+1 = 26\n` +
            `Largest multiple of 7: 21\n` +
            `Therefore, 26-21 = 5, which is Friday.`
    },
    {
        question: "Janurary 19, 2007",
        correctAnswer: "Friday",
        explanation: `Using the charts,\n` +
            `6+19+1 = 26\n` +
            `Largest multiple of 7: 21\n` +
            `Therefore, 26-21 = 5, which is Friday.`
    },
    {
        question: "Janurary 19, 2007",
        correctAnswer: "Friday",
        explanation: `Using the charts,\n` +
            `6+19+1 = 26\n` +
            `Largest multiple of 7: 21\n` +
            `Therefore, 26-21 = 5, which is Friday.`
    }
];

let currentQuestion = 0;
let score = 0;
let final = false;

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
    if (currentQuestion < 6) {
        nextButton();
    } else {
        $('#next').hide();
        $("#showFinalScore").show();
        final = true;
    }
}

function showFinalScore() {
    $("[data-final='1']").each(function(){
        $(this).hide();
    });

    document.getElementById("result").textContent = `The Quiz is over! Your final score is: ${score} out of ${questions.length}. If you scored less than 3, please try again after reviewing the article. :)`;
}

function nextButton() {
    document.getElementById("next").addEventListener("click", function () {
        document.getElementById("explanation-box").style.display = "none";
        loadQuestion();
    });
}

function toggleSubmit() {
    answer = document.getElementById("answer");

    if (answer.value.length > 0) {
        $("#submit").prop('disabled', false);
    } else {
        $("#submit").prop('disabled', true);
    }
}

$("#answer").change(function () {
    toggleSubmit();
}
);

$("#submit").click(function () {
    answer = document.getElementById("answer").value;
    checkAnswer(answer);
}
);

$("#showFinalScore").click(function () {
    if (final == true) {
        showFinalScore();
    }
});

loadQuestion();
