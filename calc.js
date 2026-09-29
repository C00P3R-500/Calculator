const nums = document.querySelectorAll(".nbtns .nums");
const ops = document.querySelectorAll(".ebtns button");
const iBox = document.querySelector("#input");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let userNum = 0;
let userOp = 0;
let num1;
let num2;
let oper;

let equal = () => {
    let [num1, num2] = iBox.textContent.split(oper);
    num1 = Number(num1);
    num2 = Number(num2);
    let result;

    if(oper === "+"){
        result = iBox.textContent = add(num1, num2);
    }
    if(oper === "-"){
        result = iBox.textContent = subtract(num1, num2);
    }
    if(oper === "*"){
        result = iBox.textContent = multiply(num1, num2);
    }
    if(oper === "/"){
        result = iBox.textContent = divide(num1, num2);
    }

    iBox.textContent = String(result);

    userNum = 1;
    userOp = 0;
}

nums.forEach((num) => {
    num.addEventListener("click", () => {
        if(userNum === 0){
            iBox.textContent = "";
            userNum++;
        }
        iBox.textContent += num.textContent;
    });
});


ops.forEach((op) => {
    op.addEventListener("click", () => {
        if(userNum === 0){
            alert("You must enter a number first.")
        }
        else if(userNum == 1 && userOp === 0){
            iBox.textContent += op.textContent;
            userOp++;
            oper = op.textContent;
        }
        else{
            equal();
            userNum = 1;
            userOp = 1;
            oper = op.textContent;
            iBox.textContent += op.textContent;
        }        
    });
});




const undoBtn = document.querySelector("#undoBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");

equalBtn.addEventListener("click", equal);

clearBtn.addEventListener("click", () => {
    userNum = 0;
    userOp = 0;
    let num1 = 0;
    let num2 = 0;
    let oper = "";
    iBox.textContent = "0";
});

backBtn.addEventListener("click", () => {
    if (iBox.textContent.length > 1) {
        iBox.textContent = iBox.textContent.slice(0, -1);
    }
    else if(iBox.textContent.length === 1) {
        iBox.textContent = 0;
        userNum = 0;
        userOp = 0;
    }
});
