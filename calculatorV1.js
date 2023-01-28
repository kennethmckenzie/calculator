// Version One

const output = document.querySelector("#output-box");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const point = document.querySelector("#point");
const del = document.querySelector("#del");

let currentValue = "";
let hasPoint = false;
let lastChar = "";
let numbersLength = numbers.length;
let operatorsLength = operators.length;

for (let i = 0; i < numbersLength; i++) {
    numbers[i].addEventListener("click", function () {
        if(currentValue === "0"){
            currentValue = numbers[i].value;
        }else{
            currentValue += numbers[i].value;
        } 
        display(currentValue);
    });
}

for (let i = 0; i < operatorsLength; i++) {
    operators[i].addEventListener("click", function () {  
        lastChar = currentValue.charAt(currentValue.length-1);
        if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
            currentValue += operators[i].value;
            hasPoint = false;
            display(currentValue );
        }
    });
}

point.addEventListener("click", function () {
    if(hasPoint === false){
        currentValue += point.value;
        hasPoint = true;
    }
    display(currentValue); 
});

clear.addEventListener("click", function () {
    currentValue = "0";
    hasPoint = false;
    display(currentValue);
});

del.addEventListener("click", function () {
    lastChar = currentValue.charAt(currentValue.length-1);
    if(lastChar === "."){
        hasPoint = false;
    }
    currentValue = currentValue.slice(0, -1);
    if(currentValue === ""){
        currentValue = "0";
    }
    display(currentValue);
});

equals.addEventListener("click", function () {
    lastChar = currentValue.charAt(currentValue.length-1);
    if(currentValue != ""  && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != "." ){
        currentValue = calculate(currentValue);
        currentValue = String(currentValue);
        display(currentValue);
    }
});

function calculate(fn) {
    return new Function('return ' + fn)();
}

function display(currentOutput){
    output.innerHTML = currentOutput;
};