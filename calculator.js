let display = document.getElementById("numbersDisplayed")
let numberButtons = document.querySelectorAll(".numberButtons");
let mathButtons = document.getElementsByClassName("mathButtons");
let clearDisplay = document.getElementById("clear");
let equalButton = document.getElementById("equals");

let numA = "";
let numB = "";
let mathOperator = "";

function chooseNumbers(e){
    if(mathOperator === ""){
        if(numA.length < 10){
            switch(e.currentTarget.dataset.number){
                //Add digit to end of numA; replace numA with new digit if numA == 0
                case "one":
                    if(numA !== "" && numA !== "0"){
                        numA += 1;
                    }else{
                        numA = "1";
                    }
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
                    if(numB !== ""){
                        numB += 0;
                    }else {
                        numB = ""
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
    console.log(numA, numB)
};

function chooseOperator(e){
    if(numB == ""){
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

function operate(){
    if(mathOperator != "" && numB != ""){
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
    }else{
        return;
    };
    stringC = numC.toString();
    if(stringC.length > 9){
        numA = stringC.slice(0, 8);
    }else{
        numA = numC;
    };
    numB = "";
    display.innerHTML = numC; 
};

function clearCalculator(){
    numA = "";
    numB = "";
    mathOperator = "";
    display.innerHTML = "";
};


numberButtons.forEach(numberButton => numberButton.addEventListener('click', chooseNumbers));
clearDisplay.addEventListener('click',clearCalculator);
equalButton.addEventListener('click',operate);

let add = document.getElementById("plus").addEventListener('click',chooseOperator);
let subtract = document.getElementById("minus").addEventListener('click',chooseOperator);
let multiply = document.getElementById("times").addEventListener('click',chooseOperator);
let divide = document.getElementById("dividedBy").addEventListener('click',chooseOperator);