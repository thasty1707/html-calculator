let display = document.getElementById("numbersDisplayed")
let numberButtons = document.querySelectorAll(".numberButtons");
let mathButtons = document.getElementsByClassName("mathButtons");
let clearAll = document.getElementById("allClear");
let clearNum = document.getElementById("clear");
let equalButton = document.getElementById("equals");

let numA = "";
let numB = "";
let numC = "";
let mathOperator = "";

//function to choose the numbers
function chooseNumbers(e){
    if(mathOperator === ""){
        if(numA.length < 10){
          //Add digit or decimal to end of numA; replace numA with new digit if numA == 0
            switch(e.currentTarget.dataset.number){
                case "one":
                    if(numA !== "" && numA !== "0"){
                        numA += 1;
                    }else{
                        numA = "1"
                    };
                    break;
                case "two":
                    if(numA !== "" && numA !== "0"){
                        numA += 2;
                    }else {
                        numA = "2"
                    };
                    break;
                case "three":
                    if(numA !== "" && numA !== "0"){
                        numA += 3;
                    }else {
                        numA = "3"
                    };
                    break;
                case "four":
                    if(numA !== "" && numA !== "0"){
                        numA += 4;
                    }else {
                        numA = "4"
                    };
                    break;
                case "five":
                    if(numA !== "" && numA !== "0"){
                        numA += 5;
                    }else {
                        numA = "5"
                    };
                    break;
                case "six":
                    if(numA !== "" && numA !== "0"){
                        numA += 6;
                    }else {
                        numA = "6"
                    };
                    break;
                case "seven":
                    if(numA !== "" && numA !== "0"){
                        numA += 7;
                    }else {
                        numA = "7"
                    };
                    break;
                case "eight":
                    if(numA !== "" && numA !== "0"){
                        numA += 8;
                    }else {
                        numA = "8"
                    };
                    break;
                case "nine":
                    if(numA !== "" && numA !== "0"){
                        numA += 9;
                    }else {
                        numA = "9"
                    };
                    break;
                case "zero":
                    if(numA !== "" && numA !== "0"){
                        numA += 0;
                    }else {
                        numA = "0"
                    };
                    break;
                case "decimal":
                    if(numA !== ""){
                        if(numA.indexOf(".") == -1){
                            numA += '\.';
                        };
                    }else{
                        numA = "0.";
                    };
                    break;
                };
                display.innerHTML = numA;
            }else{
                return;
        };
    }else{
        //function to choose second number after choosing operation
        if(numB.length < 10){
            switch(e.currentTarget.dataset.number){
                case "one":
                    if(numB !== "" && numB !== "0"){
                        numB += 1;
                    }else {
                        numB = "1"
                    };
                    break;
                case "two":
                    if(numB !== "" && numB !== "0"){
                        numB += 2;
                    }else {
                        numB = "2"
                    };
                    break;
                case "three":
                    if(numB !== "" && numB !== "0"){
                        numB += 3;
                    }else {
                        numB = "3"
                    };
                    break;
                case "four":
                    if(numB !== "" && numB !== "0"){
                        numB += 4;
                    }else {
                        numB = "4"
                    };
                    break;
                case "five":
                    if(numB !== "" && numB !== "0"){
                        numB += 5;
                    }else {
                        numB = "5"
                    };
                    break;
                case "six":
                    if(numB !== "" && numB !== "0"){
                        numB += 6;
                    }else {
                        numB = "6"
                    };
                    break;
                case "seven":
                    if(numB !== "" && numB !== "0"){
                        numB += 7;
                    }else {
                        numB = "7"
                    };
                    break;
                case "eight":
                    if(numB !== "" && numB !== "0"){
                        numB += 8;
                    }else {
                        numB = "8"
                    };
                    break;
                case "nine":
                    if(numB !== "" && numB !== "0"){
                        numB += 9;
                    }else{
                        numB = "9"
                    };
                    break;
                case "zero":
                    if(numB !== "" && numB !== "0"){
                        numB += 0;
                    }else {
                        numB = "0"
                    };
                    break;
                case "decimal":
                    if(numB !== ""){
                        if(numB.indexOf(".") == -1){
                            numB += '\.';
                        };
                    }else{
                        numB = "0.";
                    };
                    break;
                };
            display.innerHTML = numB;
            }else{
                return;
        };
    };
    console.log("numA=",numA, "numB=",numB, "numC=",numC);
};

//function to choose addition, subtraction, multiplication, or division
function chooseOperator(e){
    if(mathOperator == ""){
        switch(e.currentTarget.dataset.operators){
            case "plus":
                mathOperator = "add"
            break;
            case "minus":
                mathOperator = "subtract"
            break;
            case "times":
                mathOperator = "multiply"
            break;
            case "dividedBy":
                mathOperator = "divide"
            break;
        };
    }else{
        return;
    };
};

//function to execute operation
function operate(){
    if(numB === 0 && mathOperator === "divide"){
        alert("Cannot divide by 0\! Please try again\.")
    }else if(numA != "" && numB != "" && mathOperator != ""){
        switch(mathOperator){
            case 'add':
                numC = parseFloat(numA) + parseFloat(numB);
                break;
            case 'subtract':
                numC = numA - numB;
                break;
            case 'multiply':
                numC = numA * numB;
                break;
            case 'divide':
                numC = numA/numB;
                break;
        };
        mathOperator = "";
    }else if(numA == "" && numC != "" && numB != "" && mathOperator != ""){
        switch(mathOperator){
            case 'add':
                numC += parseFloat(numB);
                break;
            case 'subtract':
                numC -= numB;
                break;
            case 'multiply':
                numC *= numB;
                break;
            case 'divide':
                numC /= numB;
                break;
        };
        mathOperator = "";
    }else{
        return;
    };
    stringC = numC.toString();

    //Reduce the length of the number to fit the display area
    if(stringC.length > 10){
        numC = stringC.slice(0, 9);
    }else{
        numC = Number(stringC);
    }
    display.innerHTML = numC;
    numA = "";    
    numB = "";
    mathOperator = "";
};

//function to reset calculator
function clearCalculator(){
    numA = "";
    numB = "";
    mathOperator = "";
    display.innerHTML = "";
};

//function to clear last number entered
function clearEntry(){
    if(display.innerHTML == numA){
        numA = "";
        display.innerHTML = numA;
    }else if(display.innerHTML == numB){
        numB = "";
        display.innerHTML = numB;
    }else{
        numC = "";
        display.innerHTML = numC;
    };
};

//function to make numbers positive or negative
function positiveOrNegative(){
    if(display.innerHTML === numA){
        if(numA >= 0){
            numA = "\-" + numA;
            display.innerHTML = numA;
        }else{
            numA = numA.slice(1,9);
            display.innerHTML = numA;
        };
    }else if(display.innerHTML === numB){
        if(numB >= 0){
            numB = "\-" + numB;
            display.innerHTML = numB;
        }else{
            numB = numB.slice(1,9);
            display.innerHTML = numB;
        };
    }else if (display.innerHTML === numC){
        if(numC >= 0){
            numC = "\-" + numC;
            display.innerHTML = numC;
        }else{
            numC = numC.slice(1,9);
            display.innerHTML = numC;
        };
    }else{
        return;
    };
};

//function to delete entry 1 digit at a time
function backspace(){
    if(mathOperator !== ""){
        mathOperator = "";
    }else if(display.innerHTML == numA){
        let numStr = numA.toString();
        numA = numStr.slice(0, numStr.length-1);
        display.innerHTML = numA;    
    }else if(display.innerHTML == numB){
        let numStr = numB.toString();
        numB = numStr.slice(0, numStr.length-1);
        display.innerHTML = numB;    
    }else if(display.innerHTML == numC){
        let numStr = numC.toString();
        numC = numStr.slice(0, numStr.length-1);
        display.innerHTML = numC;   
    }else{
        return;
    };
};

numberButtons.forEach(numberButton => numberButton.addEventListener('click', chooseNumbers));
clearAll.addEventListener('click',clearCalculator);
clearNum.addEventListener('click',clearEntry);
equalButton.addEventListener('click',operate);

let add = document.getElementById("plus").addEventListener('click',chooseOperator);
let subtract = document.getElementById("minus").addEventListener('click',chooseOperator);
let multiply = document.getElementById("times").addEventListener('click',chooseOperator);
let divide = document.getElementById("dividedBy").addEventListener('click',chooseOperator);
let posNeg = document.getElementById("positiveNegative").addEventListener('click',positiveOrNegative);
let correction = document.getElementById("backspace").addEventListener('click',backspace);