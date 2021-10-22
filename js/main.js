const NumButtons = document.getElementsByClassName("number");
const resultLog = document.getElementById("result");
// const regexOperators = /^(\+|-|\*|\/|>|<|>=|<=|&|\||%|!|\^|\(|\))$/;


for (button of NumButtons){
    button.addEventListener("click", getEntry);
}
  
// Take the value of the button and show it in the result div
function getEntry() {
    value = this.innerHTML;
    resultLog.innerHTML += value;
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