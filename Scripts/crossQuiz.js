const questions = [
    {
        question: "65 * 98",
        correctAnswer: "6370",
        explanation: `First we imagine the chart:\n` +
            `6            5\n` +
            `9            8\n` +
            `Here, our first step is multiplying the two unit digits. 5* 8 = 40.\n`+
            `Carry over the 4 into our cross multiplication. 4 + 6 * 8 + 5 * 9 = 4 + 48 + 45 = 97. \n`+
            `Finally, carry over the 9 to our last product, 9* 6. 9 + 9 * 6 = 9 + 54 = 63. \n`+
            `We do not need to carry over the 6, we just add all the unit digits (and the last number 63) to find our answer: 6370`
    },
    {
        question: "46 * 73",
        correctAnswer: "3385",
        explanation: `Chart:\n`+
                        `4            6\n`+
                        `7            3\n`+
                        `6 * 3 = 18\n`+
                        `Carrying over the 1 to the cross multiplication, we have 4*3+ 6*7 + 1 = 12 + 42 + 1 = 55.\n`+
                        `Remember to 'cross' multiply, instead of calculating 4*7 + 6*3 + 1.\n`+
                        `Lastly, 4*7 = 28. Adding the carried over 5, 28 + 5 = 33. Our final answer is 3385.`
    },
    {
        question: "22 * 23",
        correctAnswer: 506,
        explanation: `Chart:\n`+
                    `2            2\n`+
                    `2            3\n`+
                    `2*3 = 6\n`+
                    `We have no carry over, so we proceed to cross multiplying.\n`+
                    `2 * 3 + 2 * 2 = 6 + 4 = 10.\n`+
                    `Finally, adding the 1 from the previous calculation, 2 * 2 + 1 = 5.\n`+
                    `Our answer is: 506.\n`+
                    `If you have already taken the multiplication by eleven course, you may have used a different way:\n`+
                    `Notice that 22 = 11 * 2. 22 * 23 = 2 * 11 * 23 = 2 * 253 = 506.\n`+
                    `(To calculate 23 * 11, we had to add 2 + 3 = 5, then sandwich 5 in between 2 and 3)\n`+
                    `Remember, the point of these mental tricks is to keep you versatile in your calculations to the point that you have multiple strategies that can be used.\n` + 
                    `However, you must decide which one is the fastest or easier for you from experience.`
    },
    {
        question: "32 * 84",
        correctAnswer: 2688,
        explanation: `Chart:\n`+
                    `3            2\n`+
                    `8            4\n`+
                    `2*4 = 8\n`+
                    `We have no carry over, so we proceed to cross multiplying.\n`+
                    `3 * 4 + 2 * 8 = 12 + 16 = 28.\n`+
                    `Finally, carrying over the 2, 3 * 8 + 2 = 26.\n`+
                    `Our answer is: 2688.`
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

loadQuestion();