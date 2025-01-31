const questions = [
    {
        question: "95 * 95",
        correctAnswer: 9025,
        explanation: "We can easily take numbers 90 and 100, each a difference of 5 from 95.\n90 * 100 = 9000\nWe add the difference squared, 5 squared to 9000 to calculate, 9000 + 5*5 = 9000 + 25 = 9025."
    },
    {
        question: "44 * 44",
        correctAnswer: 1936,
        explanation: "44+44 = 88.\nWe need to find two numbers such that they add to 88. There are two ways to do this; by rounding down to 40, or up to 50. Let us consider the latter:\n50 * (44-6) = 50 * 38 = 100/2 * 38 = 3800/2 = 1900.\nAlthough the first way of rounding down to 40 would allow us to receive the same answer, we want to choose the second, or 50, as 50 = 100/2. Finally, we add the difference squared:\n6 * 6 = 36\nFinally 1900+36 = 1936."
    },
    {
        question: "56 * 56",
        correctAnswer: 3136,
        explanation: "Similar to before, we are faced with two choices— rounding down to 50, or up to 60. Like the previous question, we round down to 50:\n50 * (56+6) = 50 * 62 = 100/2 * 62 = 6200/2 = 3100\ndifference squared = 6 * 6 = 36\nFinal Answer: 3100 + 36 = 3136."
    },
    {
        question: "87 * 87",
        correctAnswer: 7569,
        explanation: "Usually, though not always, rounding up or down depends on how far your number is to the next multiple of 10. Naturally, if the difference is less than 5, we round up; if it is equal to 5, it does not matter; and if it is less than five, we round down. This logic allows faster mental calculations, as your `difference squared` is smaller. Therefore, we round up to 90 in this case:\n90 * (87-3) = 90 * 84\nFrom here were can brute force the calculations, or we can substitute (100-10) for 90, through the following:\n90 * 84 = (100-10) * 84 = 100 * 84 - 10 * 84 = 8400 - 840 = 7560.\nLastly, add 3*3 = 9 to calculate 7560 + 9 = 7569."
    },
    {
        question: "879 * 879",
        correctAnswer: 772641,
        explanation: "Img. Steps: 879 is rounded up to 900 and the other number we get is 858. Multiplying these two together, we calculate 772,200 + 21*21. Easily, we can subtract and add one to 21 in order to find 21*21 = 20*22 + 1*1 = 440 + 1 = 441. Substituting into 772, 200 + 21*21, our final answer is 772, 641."
    },
    {
        question: "326 * 326",
        correctAnswer: 106276,
        explanation: "Steps: We round 326 down and up by 26 to obtain 300 and 352.\n300 * 352 = 105,600. Now, we must add 26 squared to this sum. Using the two-digit squaring method, we can calculate 26*26 in the following way:\nFirst round 26 up and down to 30 and 22.\n30*22 = 660\nAdding the difference squared (4*4), 26*26 = 660 + 4*4 = 660 + 16 = 676.\nFinal answer: 105, 600 + 676 = 106, 276."
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
    if (currentQuestion < 6) {
        nextButton();
    } else {
        document.getElementById('next').style.display = "none";
        document.getElementById("showFinalScore").style.display = "block";
        final = true;
    }
}

function showFinalScore() {
    document.getElementById("start").style.display = "none";
    document.getElementById("start2").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("showFinalScore").style.display = "none";
    document.getElementById("explanation-box").style.display = "none";
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

loadQuestion();