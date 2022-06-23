var buttons = document.getElementsByClassName("button");
var calculations = document.getElementById("calculations");
var operand1 = 0;
var operand2 = null;
var operator = null;


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var text = calculations.textContent.trim();
        if (value == '+') {
            operator = '+';
            operand1 = parseFloat(text);
            calculations.textContent = "";
            // console.log(operand1);
            // console.log(operator);
        } else if (value == '-') {
            operator = '-';
            operand1 = parseFloat(text);
            calculations.textContent = ""
        } else if (value == '*') {
            operator = '*';
            operand1 = parseFloat(text);
            calculations.textContent = "";
        } else if (value == '/') {
            operator = '/';
            operand1 = parseFloat(text);
            calculations.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            calculations.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                calculations.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            calculations.textContent = operand1
        }  else if (value == "ac") {
            calculations.textContent = "";
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            console.log(result);
            if (result) {
                calculations.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            calculations.textContent += value;
            calculations.style.textAlign = 'right';
            calculations.style.fontSize = '40px';
        }
    })
    
}


