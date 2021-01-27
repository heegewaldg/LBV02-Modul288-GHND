// close button bei jedem Item in der Liste kreieren
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// tasks auf local storage speichern
const saveTasks = (myUL) => {

    localStorage.setItem('myUL', JSON.stringify(myUL));
    showTasks();
}

// auf close button klicken um Item in der Liste zu entfernen
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// checked symbol wenn man auf Item in der Liste klickt


// neues List Item wenn man auf hinzufügen klickt
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Du musst etwas schreiben!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    // Liste zurücksetzen
    function removeAll() {
        document.getElementById("checkList").innerHTML = "";
    }
}

// Titel farbig anzeigen
function mouseDown() {
    document.getElementById("mouseover").style.color = "blue";
}

function mouseUp() {
    document.getElementById("mouseover").style.color = "white";
}

let movies = [];

const addMovie = (ev) => {
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value
    }
    movies.push(movie);
    document.forms[0].reset();
    ;


    console.warn('added', { movies });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);


    localStorage.setItem('Anmeldungen', JSON.stringify(movies));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addMovie);
});
