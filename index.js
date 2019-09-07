function calc() {
    //  declaring variables
    let value1, value2, oper, calculate;
    // accessing the dom elements
 
    value1 = parseInt(document.querySelector('#value1').value);
    value2 = parseInt(document.querySelector('#value2').value);
    oper = document.querySelector('#operator').value;
    
 
    // calculation taking place
    if (oper == 'add') {
          calculate = value1 + value2;
    }else if (oper == 'min') {
        calculate = value1 - value2;
    }else if (oper == 'div') {
        calculate = value1 / value2;
    }else if (oper == 'mul') {
        calculate = value1 * value2;
    }
 
    // writting the result 
   document.getElementById('result').innerHTML = calculate;
 }