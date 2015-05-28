// This block of code is design to preform a task, specifically to check if there are any errors.
// For example, putting a letter instead of a number. It can only use numbers to calculate. If there are any errors,
// a message will pop up saying that there was an error.

function calculate() { // Naming a function that'll be used later on, and to preform a certain task.
    try { // Makes the code to try these variables for any errors on the calculator
        var Number1 = parseInt(validate(document.getElementById("Number1").value.trim())); // Making Number1 to a value. 
        //parseInt means whatever is inserted into Number1, like text or numbers, it is converted into an integer so 
        //that it can be easily processed. Validate is a function to check if there is a number inserted into Number1. 
        // document.getElementById is having access to an input. .value returns the value of the option, so it gives out something
        // whether it be a text or numbers. .trim removes white space from where the user puts its numbers so that there won't be
        // errors when the user adds a space or tabbing or any text that's invisible.
        var Number2 = parseInt(validate(document.getElementById("Number2").value.trim())); // Making Number2 to a value. 
        //parseInt means whatever is inserted into Number2, like text or numbers, it is converted into an integer so 
        //that it can be easily processed. Validate is a function to check if there is a number inserted into Number2. 
        // document.getElementById is having access to an input. .value returns the value of the option, so it gives out something
        // whether it be a text or numbers. .trim removes white space from where the user puts its numbers so that there won't be
        // errors when the user adds a space or tabbing or any text that's invisible.
        var operator = document.getElementById('operator').value; //Making operator to a value. document.getElementById is having 
        // access to an input. .value returns the value of the option, so it gives out something whether it be a text or numbers.
        document.getElementById("result").value = operate(Number1, Number2, operator); // document.getElementById is having access 
        // to an input. .value returns the value of the option, so it gives out something whether it be a text or numbers.
        // Uses the function "operate" to do a certain task with the following variables.

    } catch (err) { //It lets the programmer to handle the error, makes it do a task when the user puts an invalid input.
        alert("There was a problem: " + err.messaqge); // Displays an alert box and has text written in it, in this case 
        // "There was a problem".
    }
}

// This is where the calculator gives it's outputs, or answers to certain problems that the user puts in.

function operate(Number1, Number2, operator) { // Naming a function that does a certain task with these three variables.
    if (operator == 'addition') { // If the user chooses addition, the function is going to do this.
        return Number1 + Number2; // The output will be these two variables added together, processes the values.
    } else if (operator == 'subtraction') { // If the user chooses subtraction, the function is going to do this.
        return Number1 - Number2; // The output will be these two variables subtracted together, processes the values.
    } else if (operator == 'division') { // If the user chooses division, the function is going to do this.
        return Number1 / Number2; // The output will be these two variables dividing it together, processes the values.
    } else if (operator == 'multiplication') { // If the user chooses multiplication, the function is going to do this.
        return Number1 * Number2; // The output will be these two variables multiplying it together, processes the values.
    } else if (operator == 'squared') { // If the user chooses squared, the function is going to do this.
        return Number1 * Number1; // The output will be the same value multiplied by itself, processes the values.
    } else if (operator == 'square root') { // If the user chooses square root, the function is going to do this.
        return Math.sqrt(Number1); // The output will be square rooting the value. There is a specific line of code 
        //that does the square root of the input. Also it processes the values.
    }
}

// It makes the user add an input to both boxes or else the code won't process any input. It is making sure there are
// inputs where they belong. If not, it alerts the user.

function validate(value) { //Naming a function to check if there are inputs on both boxes
    if (value == null || value == "") { //If the inputs are empty OR (|| means "or" in English) the values have no characters
        // on the input(s).
        alert("Required Field"); // Opens up an alert box saying "Required field"
        return 0; // Gives the output as zero instead of a random number. Letting the user know it's not working from the 
        // inputs.
    } else if (isNaN(value)) { // If the values aren't numbers (letters, symbols, etc.).
        alert("Must be a Number Field"); // Opens up a box saying "Must be a Number Field"
        return 0; // Gives the output as zero instead of a random number. Letting the user know it's not working from the 
        // inputs.
    } else return value; // If none of these are true, then the function is good to go and it will give the user the output.
}