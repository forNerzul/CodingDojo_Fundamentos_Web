var displayDiv = document.querySelector("#display");

function press(number) {
    if (displayDiv.innerHTML == "0") {
        displayDiv.innerHTML = number;
    } else {
        displayDiv.innerHTML += number;
    }
}

function setOP(operation) {
    displayDiv.innerHTML += operation;
}

function clr() {
    displayDiv.innerHTML = "0";
}

function calculate() {
    displayDiv.innerHTML = eval(displayDiv.innerHTML);
}
