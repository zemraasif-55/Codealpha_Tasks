
// elements
let display = document.getElementById("display");
let historyBox = document.getElementById("history");

// click sound
let clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

function playSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}

// append value
function appendValue(value){
    playSound();
    display.value += value;
}

// clear
function clearDisplay(){
    playSound();
    display.value = "";
    historyBox.innerText = "";
}

// delete last
function deleteLast(){
    playSound();
    display.value = display.value.slice(0, -1);
}

// calculate
function calculate(){
    try{
        playSound();

        let result = eval(display.value);

        historyBox.innerText = display.value;
        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

// keyboard support
document.addEventListener("keydown", function(e){

    if(e.key >= "0" && e.key <= "9") appendValue(e.key);

    else if("+-*/%".includes(e.key)) appendValue(e.key);

    else if(e.key === "Enter") calculate();

    else if(e.key === "Backspace") deleteLast();

    else if(e.key === "Escape") clearDisplay();

    else if(e.key === ".") appendValue(".");
});