const nums = [2, 3, 4, 5, 6, 8, 9, 10, 11]

let score = 0;
let final = false;
let num1 = 0;
let indx = 0;
let week = '';
let year = 0;
let month = 0;
let day = 0;
let foo = 'Monday';

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
    month = Math.floor(Math.random() * 12) + 1;
    day = Math.floor(Math.random() * 28) + 1;
    answer = document.getElementById("answer");
    answer.value = "";
    document.getElementById("next").disabled = true;
    document.getElementById("question").textContent = String(year) + "/" + String(month) + "/" + String(day);
    document.getElementById("result").textContent = "";
}


function checkAnswer(answer) {
    document.getElementById("submit").disabled = true;
    document.getElementById("next").disabled = false;
    foo = findAnswer(year, month, day);
    if (answer == findAnswer(year, month, day)) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${foo}.`;
    }
}

function findAnswer(year, month, day) {
    x = 0;
    y = 0;
    m = 0;
    add = 0;

    if (month == 1 || month == 10) {
        m = 6;
    } 
    
    if (month == 4 || month == 7) {
        m = 5;
    }

    if (month == 9 || month == 12) {
        m = 4;
    }

    if (month == 6) {
        m = 3;
    }

    if (month == 3 || month == 11) {
        m = 2;
    }

    if (month == 8) {
        m = 1;
    }

    if (month == 5) {
        m = 0;
    }

    if (year >= 2000 && year <= 2099) {
        x = year - 2000;
        y = (((x - (x % 4)) / 4) + x) % 7;
    }

    if (year >= 1900 && year <= 1999) {
        x = year - 1900;
        y = (((x - (x % 4)) / 4) + x) % 7;
        add = 1;
    }

    if (year >= 1800 && year <= 1899) {
        x = year - 1800;
        y = (((x - (x % 4)) / 4) + x) % 7;
        add = 3;
    }

    if (year >= 2100 && year <= 2199) {
        x = year - 2100;
        y = (((x - (x % 4)) / 4) + x) % 7;
        add = -2;
    }

    if (year >= 1753 && year <= 1799) {
        x = year - 1700;
        y = (((x - (x % 4)) / 4) + x) % 7;
        add = -2;
    }

    total = ((day + m + y) % 7) + add;

    if (total == 0) {
        return "Sunday";
    }

    if (total == 1) {
        return "Monday";
    }

    if (total == 2) {
        return "Tuesday";
    }

    if (total == 3) {
        return "Wednesday";
    }

    if (total == 4) {
        return "Thursday";
    }

    if (total == 5) {
        return "Friday";
    }

    if (total == 6) {
        return "Saturday";
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
