const questions = [
    {
        question: "65*98",
        correctAnswer: "6370",
        explanation: `First we imagine the chart:\n`+
                    `6            5\n`+
                    `9            8\n`+
                    `Here, our first step is multiplying the two unit digits. 5* 8 = 40. Carry over the 4 into our cross multiplication. 4 + 6 * 8 + 5 * 9 = 4 + 48 + 45 = 97. Finally, carry over the 9 to our last product, 9* 6. 9 + 9 * 6 = 9 + 54 = 63. We do not need to carry over the 6, we just add all the unit digits(and the last number, 63) to find our answer: 6370`
    },
    {
        question: "46*73",
        correctAnswer: "yes",
        explanation: `Chart:\n
                        4            6\n
                        7            3\n
                        6 * 3 = 18\n
                        Carrying over the 1 to the cross multiplication, we have 4*3+ 6*7 + 1 = 12 + 42 + 1 = 55. Remember to “cross” multiply, instead of calculating 4*7 + 6*3 + 1. Lastly, 4*7 = 28. Adding the carried over 5, 28 + 5 = 33. Our final answer is 3385.`
    },
    {
        question: "987804, 9",
        correctAnswer: "yes",
        explanation: "We just add the digits:\n9+8+7+8+0+4 = 36\nBecause 36 is a multiple of 9; 36 = 4*9, 987804 is divisible by 9. "
    },
    {
        question: "1242658, 4",
        correctAnswer: "no",
        explanation: "We only need to test the last two digits for divisibility by 4. We could either just divide by long division, or divide by two twice, which is easier.\n58/2=29\nAs 29 is not divisible by 2, 58 is not divisible by 4. Therefore, 1242658 is not divisible by 4."
    },
    {
        question: "13264, 13",
        correctAnswer: "no",
        explanation: "First, let us get rid of the units digit. The smallest multiple of 13 that has a units digit of 4 is 13 * 8 = 104. We subtract 104 from 13264 to get: 13160. Deleting the unit digit, we have 1316. Now, we subtract 13*2=26.\n1316-26 = 1290\nDelete another zero: 129. Subtract 13*3:\n129 - 39 = 90\nOur final number is 9, which is NOT divisible by 13. Therefore, 13264 is not a multiple of 13."
    },
    {
        question: "835406, 23",
        correctAnswer: "yes",
        explanation: "To eliminate the 6, we subtract 23*2 = 46 from 835406 and calculate: 835360. Deleting the end zero, we have 83536. Now, we subtract 46 again to calculate 83536-46 = 83490. Again, we delete the last zero: 8349. Now, we subtract 23*3 = 69. 8349 - 69 = 8280. Remove the zero: 828. Subtract 23*6 = 138. 828-138 = 690. Deleting the zero, we have 69, which is 23*3. Therefore, 835406 is a multiple of 23."
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
