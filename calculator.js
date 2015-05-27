function calculate() {
    try {
        var Number1 = parseInt(validate(document.getElementById("Number1").value.trim()));
        var Number2 = parseInt(validate(document.getElementById("Number2").value.trim()));
        var operator = document.getElementById('operator').value;
        document.getElementById("result").value = operate(Number1, Number2, operator);

    } catch (err) {
        alert("There was a problem: " + err.messaqge);
    }
}


function operate(Number1, Number2, operator) {
    if (operator == 'addition') {
        return Number1 + Number2;
    } else if (operator == 'subtraction') {
        return Number1 - Number2;
    } else if (operator == 'division') {
        return Number1 / Number2;
    } else if (operator == 'multiplication') {
        return Number1 * Number2;
    } else if (operator == 'squared') {
        return Number1 * Number1;
    } else if (operator == 'square root') {
        return Math.sqrt(Number1);
    }
}

function validate(value) {
    if (value == null || value == "") {
        alert("Required Field");
        return 0;
    } else if (isNaN(value)) {
        alert("Must be a Number Field");
        return 0;
    } else return value;
}