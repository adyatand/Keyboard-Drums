function play(str) {
    var audio = document.getElementById(str);
    audio.play();
    document.getElementById("display").innerText = audio.id;
};

var display = document.getElementById("display");
var audioQ = document.getElementById("Heater-1");
var audioW = document.getElementById("Heater-2");
var audioE = document.getElementById("Heater-3");
var audioA = document.getElementById("Heater-4");
var audioS = document.getElementById("Clap");
var audioD = document.getElementById("Open-HH");
var audioZ = document.getElementById("Kick-n -Hat");
var audioX = document.getElementById("Kick");
var audioC = document.getElementById("Closed-HH");

function addClass(arr) {
    var element = document.getElementById(arr);
    element.classList.add("active");
}

window.addEventListener("keydown", function(event) {
    if(event.key == "q" || event.key == "Q") {
        audioQ.play()
        audioQ.currentTime = 0;
        display.innerText = audioQ.id;
        addClass("Q");
        setTimeout(function() {
            document.getElementById("Q").classList.remove("active")
        }, 200);
    } else if (event.key == "w" || event.key == "W") {
        audioW.play();
        audioW.currentTime = 0;
        display.innerText = audioW.id;
        addClass("W")
        setTimeout(function() {
            document.getElementById("W").classList.remove("active")
        }, 200);
    } else if (event.key == "e" || event.key == "E") {
        audioE.play();
        audioE.currentTime = 0;
        display.innerText = audioE.id;
        addClass("E")
        setTimeout(function() {
            document.getElementById("E").classList.remove("active")
        }, 200);
    } else if (event.key == "a" || event.key == "A") {
        audioA.play();
        audioA.currentTime = 0;
        display.innerText = audioA.id;
        addClass("A")
        setTimeout(function() {
            document.getElementById("A").classList.remove("active")
        }, 200);
    } else if (event.key == "s" || event.key == "S") {
        audioS.play();
        audioS.currentTime = 0;
        display.innerText = audioS.id;
        addClass("S")
        setTimeout(function() {
            document.getElementById("S").classList.remove("active")
        }, 200);
    } else if (event.key == "d" || event.key == "D") {
        audioD.play();
        audioD.currentTime = 0;
        display.innerText = audioD.id;
        addClass("D")
        setTimeout(function() {
            document.getElementById("D").classList.remove("active")
        }, 200);
    } else if (event.key == "z" || event.key == "Z") {
        audioZ.play();
        audioZ.currentTime = 0;
        display.innerText = audioZ.id;
        addClass("Z")
        setTimeout(function() {
            document.getElementById("Z").classList.remove("active")
        }, 200);
    } else if (event.key == "x" || event.key == "X") {
        audioX.play();
        audioX.currentTime = 0;
        display.innerText = audioX.id;
        addClass("X")
        setTimeout(function() {
            document.getElementById("X").classList.remove("active")
        }, 200);
    } else if (event.key == "c" || event.key == "C") {
        audioC.play();
        audioC.currentTime = 0;
        display.innerText = audioC.id;
        addClass("C")
        setTimeout(function() {
            document.getElementById("C").classList.remove("active")
        }, 200);
    }
});
