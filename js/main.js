const NumButtons = document.getElementsByClassName("number");
// const OperatorButtons = document.getElementsByClassName("operator");
const resultLog = document.getElementById("result");
// const operatorsRegex = /^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$/;


for (button of NumButtons){
    button.addEventListener("click", getEntry);
}
  
// Take the value of the button and show it in the result div
function getEntry() {
    value = this.innerHTML;
    let validation = resultLog.innerHTML += value;
    return validation;
}               

function calc() {
    let calcul = resultLog.innerHTML;
    let result = eval(calcul);
    resultLog.innerHTML = result;
}

function erase(){
    resultLog.innerHTML = "";
}

function del(){
     resultLog.innerHTML = resultLog.innerHTML.substring(0, resultLog.innerHTML.length-1);
}