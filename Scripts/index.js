var taskList = document.getElementsByTagName("li");
var i;

for (i = 0; i < taskList.length; i++) {
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var j;

for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var k;

for (k = 0; k < taskList.length; k++) {
    var span = document.createElement("span")
    var txt = document.createTextNode("Edit");
    span.className = "edit";
    span.appendChild(txt);
    taskList[k].appendChild(span);
}

var edit = document.getElementsByClassName("edit");
var l;
for (var l = 0; l < edit.length; l++) {
    edit[l].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var tasks = document.querySelector('ul');

tasks.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var taskValue = document.getElementById("nextTask").value;
    var text = document.createTextNode(taskValue);

    li.appendChild(text);

    if (taskValue === '') {
        alert("You must write something!");
    } if (taskValue.length > 49){
        alert("You have exceeded the character limit.")
    } else {
        document.getElementById("taskCollection").appendChild(li);
    }

    document.getElementById("nextTask").value = "";

    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var editSpan = document.createElement("span")
    var editTxt = document.createTextNode("Edit");
    editSpan.className = "edit";
    editSpan.appendChild(editTxt);
    li.appendChild(editSpan);

    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

    editSpan.onclick = function () {
        var div = this.parentElement;
        document.getElementById("nextTask").value = div.firstChild.textContent;
        div.style.display = "none";
    }
}
