// MVP Calculator - Basic Operations

/*-------------------------------- Constants --------------------------------*/
const operations = {

    firstNumber: '',
    operator: '',
    secondNumber: '',
    total: 0

};

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');


/*-------------------------------- Variables and Initializations --------------------------------*/
displayElement.innerText = '0'


/*----------------------------- Event Listeners -----------------------------*/

// Handles the buttons presses, computing the Mathematical operations and shows the result on the calculator display 
calculator.addEventListener('click', (event) => {

    if (event.target.classList.contains('number')) {

        // Skip initial zeros
        if (displayElement.innerText === '0' && event.target.innerText === '0') return;

        /*When the user presses the 'equal' button, the firstNumber should store the total result, so if the user presses any operator button afterward the computation will be done using the total that is stored in the firstNumber.
        */
        if (operations.total !== 0 && operations.operator === '' && operations.firstNumber !== '') {
            operations.firstNumber = event.target.innerText
            updateDisplay(true, operations.firstNumber)

            /* When the user presses the operator button now the calculator should wait for the secondNumber 'first digit' to be entered, this is only incase when the user presses the operator button multiple times.
            */
        } else if (operations.total !== 0 && operations.operator !== '' && operations.secondNumber === '') {
            operations.secondNumber = event.target.innerText
            updateDisplay(true, operations.secondNumber)
        }

        /*Here we have to check if ther user pressed the operator button yet, if not then any new pressed number should concat to the value of the firstNumber, otherwise to concat with the secondNumber if the user already pressed one of the operators buttons.*/
        else {
            operations.operator === '' ? operations.firstNumber += event.target.innerText : operations.secondNumber += event.target.innerText
            updateDisplay(false, event.target.innerText)
        }
    }

    // Occurs when the user presses the operator button
    if (event.target.classList.contains("operator")) {

        // When the users presses the operator button again after presses first, second number and operator. In that case the getResult will compute the total of the two numbers and wait for the user to enter new number to be added to the totatl.
        if (operations.firstNumber !== '' && operations.secondNumber !== '') {
            getResult();
        } else {
            updateDisplay(true, '0')
        }

        // Assign the captured operator button value to the operations.operator value
        operations.operator = event.target.innerText;

        // Captures when the user's presses the 'C' button, to clear the display accordingly.
        if (event.target.innerText === 'C') {
            clearResults();
        }
    }

    // Captures when the user presses the '=' button to compute the Mathematical operation on the first and second numbers.
    if (event.target.classList.contains("equals")) {

        // Here to make sure we are not passing null values to the getResult() function
        if (operations.firstNumber && operations.operator && operations.secondNumber) {
            getResult();
        }

    }

    // Print the operations object to the console log
    console.log(operations)

});


/*Call the computeResult function to compute the total, update the display with the total, and updatge the operation object perpreties values.
Note: firstName and secondName are both strings and sent to computeResult() function using parseInt() method to convert them to integer values.
*/
const getResult = () => {
    operations.total = computeResult(parseInt(operations.firstNumber), parseInt(operations.secondNumber), operations.operator)
    updateDisplay(true, operations.total)
    operations.firstNumber = operations.total;
    operations.secondNumber = ''
    operations.operator = ''
}


/*-------------------------------- Functions --------------------------------*/

/*Computes the Mathimatecal operation based on the operator selected by the user, and returns the result. */
const computeResult = (firstValue, secondValue, selectedOperation) => {


    if (selectedOperation === "+")
        return firstValue + secondValue

    else if (selectedOperation === "-")
        return firstValue - secondValue

    else if (selectedOperation === "/")
        return firstValue / secondValue

    else if (selectedOperation === "*")
        return firstValue * secondValue

}

/* Clears the result when the users presses the 'C' button, accordignly the 'operation' object reintialized.*/
const clearResults = () => {
    operations.firstNumber = '';
    operations.secondNumber = '';
    operations.operator = '';
    operations.total = 0;
    updateDisplay(true, '0')
}

/* Updates the display data every time a new event occurs, it keeps the code clean while calling this function when needed, 
accepts two parameters:
- newDigits: boolean type, used differentiate whether to concat data on the display or not,
- data: string type, those string data sent to the function to be displayed on the displayElement 'The calculator display')

Some of user's input data need to be concatenated such as pressing number buttons more than once to compute numbers with two or more digits.
and some time the user only presses the 'equal' button so the total will be shown as a whole without the need for concatenation.
*/
const updateDisplay = ((newDigits, data) => {
    if (displayElement.innerText === '0') displayElement.innerText = data
    else
        newDigits ? displayElement.innerText = data : displayElement.innerText += data;
});


// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Full Operational Calculator

/*-------------------------------- Story --------------------------------
This is will be an enhanced version of the MVP Calculator provided in the Assignment, I've decided to create it to practice more.

As suggested in the Assignment that to start with a story to easily capture the requirement of the developed code.

The story shall be like the following:

1- The calculator shall capture users click event on buttons exactly like the givent assignment
2- Once a button number or operation is clicked it should be added to an array 'allOperations'
3- The operation array will capture all pressed number as well as operators to compute the total multiple numbers and distinct operations
4- If operation is selected it shall also be added to the array
5- It also show those number or operations on the display of the calculator 'including' operations' such as '1 + 4 / 6 * 3'
6- If 'equal' button pressed it shall check the operation array and do all the Mathematical operations and show the final results, and save the result to the 'Result' variable
7- Operations should be done based on the priority of operaions.
8- If clear button pressed it shall clear the results array, and shows '0' on the display
9- If the result is error value (ex dividing over zero) it shall show error on the display and clear the result value.
10 If an operator button is clicked multiple times, the most recent operator should replace the previously selected one.
*/


/*-------------------------------- References --------------------------------*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
// https://www.w3schools.com/CSSref/sel_active.php
// https://www.w3schools.com/cssref/sel_hover.php


/*-------------------------------- Constants --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const newCalculator = document.querySelector('#newCalculator');
const newDisplay = document.querySelector('.newDisplay')


/*-------------------------------- Variables & Initializations --------------------------------*/
let allOperations = []; // This shall handle all operations ex. ['1', '+', '2', '-', '3',]
let finalResult = 0;
let doubleLastResult = false;
let clearOperaions = false;

newDisplay.innerText = '0';

/*----------------------------- Event Listeners -----------------------------*/
newCalculator.addEventListener('click', (event) => {

    // If digits exceeds 19 on the display then return, to avoid overflow outside the display bounds
    if (newDisplay.innerText.length > 19 && event.target.innerText !== 'C' && event.target.innerText !== '=') return;

    // When a number has been pressed then...
    if (event.target.classList.contains('number')) {

        // if no digits on the display only '0' and user pressed '0' again then return to avoid repeated unneccessary zeros.
        if (allOperations[0] === '0' && event.target.innerText === '0') return;

        // If user already pressed '=' then pressed a number, the 'allOperation' should be erased to start with new chain of operations.
        if (finalResult && allOperations.length === 1){
            allOperations.pop();
            finalResult = 0;
            doubleLastResult = 0;
        } 
            // Add the new pressed number to the Array
            allOperations.push(event.target.innerText)
        

        // Display the chain of operations stored in the Array
        newDisplay.innerText = allOperations.join().replaceAll(',', "")

      // When an operator symbole pressed then ...
    } else if (event.target.classList.contains('operator')) {

        // If the operations Array is empty then return, to avoid an neccessary operator in the begining.
        if (allOperations.length === 0) return;

        // When the 'C' button pressed then clear the Array and Display. Show '0' on the display storing it in the Array.
        if (event.target.innerText === 'C'){
            allOperations = []
            newDisplay.innerText = '0'
            console.log(allOperations)
            return
        }
        
        // If last item in the Array is an operator and the user decided to change the operation (ex. Addition to Subtraction, ..etc)
        // then replace the last item in the Array with the new pressed one
        if (['+', '-', '*', '/'].includes(allOperations[allOperations.length - 1])) {
            allOperations[allOperations.length - 1] = event.target.innerText

        // Othewise Store the operator in the Array, and make sure to clear the findResultsand doubleLastResult variables.    
        } else {
            finalResult = 0;
            doubleLastResult = 0;
            allOperations.push(event.target.innerText)
        }

        // Display 'allOperations' Array chain of operations
        newDisplay.innerText = allOperations.join().replaceAll(',', "")

    // Compute the total of the operations stored in teh Array, when the '=' symbole pressed
    } else if (event.target.classList.contains('equals')) {
        getTotal();
    }


console.log(allOperations)
});

/*-------------------------------- Functions --------------------------------*/
const getTotal = () => {

    // remove last element in the 'allOperations' array if it is an operator
    if (['+', '-', '*', '/'].includes(allOperations[allOperations.length - 1])) {
        allOperations.pop()
    }

    /*If the user pressed the '=' more than once then double the result value,
    Otherwise just compute the final result
    
    #How the final result computed:
    As 'allOperations' array stores each 'number' or 'operator' in the Array as 'string' type, 
    then we need to convert 'number' to integers and 'operator' to real Mathematical operator not a string
    
    Number could be converted to integers easily using parseInt() function, 
    but using operators will not work (As per my knowledge and trial ----> parseInt('+') or parseInt('1+1'))

    Thus, I've used instead, 'eval' function, which is coverting arguments to scripts as per MDN it is working for computing
    the total of chain of operations,

    Example: 
    1- allOperations Array content = ["2", "+", "5", "*", "10"]
    2- First we need to convert the Array to string using join() got ---> "2,+,5,*,10"
    3- Then using replaceAll() I've removed all 'commas' got -------> "2+5*10"
    4- Using eval function got -----> eval("2+5*10") -----> 52 as Integer 
    */
    if (doubleLastResult) {
        finalResult = finalResult * finalResult;
    } else {
        finalResult = eval(allOperations.join().replaceAll(',', ""));
    }

    // Clear the Array and Store the result in the first element
    allOperations = [finalResult];

    // Enable doubling last result variable unless later in the code above, 
    // the user presses numbers or operators, then that variable is set to false in the above code inside newCalculator.addEventListener()
    doubleLastResult = true;

    // Display the final results on the newDisplay
    newDisplay.innerText = finalResult;
}