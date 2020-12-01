let number1 = "" , number2 = "";
let secondval = false, notCleared = true, reset = false;
let currentOperation, final;

function joinNumber(value){
  if(reset){
    number1 = "";
    number2 = "";
    secondval = false, notCleared = true;
    reset = false;
    document.getElementById("result").innerHTML = null;
  }
  
  if(secondval){
    if(NotCleared = true){
      document.getElementById("result").innerHTML = value;
      notCleared = false;
      number2 += value;
    } else {
        number2 += value;
        document.getElementById("result").innerHTML += value;
    }

  } else {
    number1 += value;
    document.getElementById("result").innerHTML += value;
  } 
}

function operation(type){ //1 plus 2 minus 3 razy 4 dzielic
  currentOperation = type;
  secondval = true;
}

function equals(){
  switch (currentOperation) {
    case '1':
      final = parseFloat(number1) + parseFloat(number2);
      break;

    case '2':
      final = parseFloat(number1) - parseFloat(number2);
      break;

    case '3':
      final = parseFloat(number1) * parseFloat(number2);
      break;

    case '4':
      final = parseFloat(number1) / parseFloat(number2);
      break;
  
    default:
      break;
  }
  
  document.getElementById("result").innerHTML = final;
  reset = true;
}