/// Function to perform addition
function faultyAddition(num1, num2) {
 
    return num1 + num2 + Math.floor(Math.random() * 10);
}

// Function to perform subtraction
function faultySubtraction(num1, num2) {
  
    return num1 - num2 - Math.floor(Math.random() * 10);
}

// Function to perform multiplication
function faultyMultiplication(num1, num2) {
   
    return num1 * num2 * Math.floor(Math.random() * 10);
}

// Function to perform division
function faultyDivision(num1, num2) {
   
    return num1 / num2 / (Math.floor(Math.random() * 10) + 1);
}


console.log("Faulty Addition: " + faultyAddition(20, 9)); 
console.log("Faulty Subtraction: " + faultySubtraction(40, 2)); 
console.log("Faulty Multiplication: " + faultyMultiplication(30, 9)); 


// ---------------------------------------------

// Define a function for the faulty calculator
function faultyCalculator(operator, num1, num2) {
    let result;

    // Introduce some random errors
    const randomNumber = Math.random();
    if (randomNumber < 0.3) {
        // Randomly return the sum instead of the actual result
        result = num1 + num2;
    } else if (randomNumber < 0.6) {
        // Randomly return the product instead of the actual result
        result = num1 * num2;
    } else {
        // Otherwise, perform the calculation normally
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            // Check if divisor is not zero
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero!";
            }
        } else {
            result = "Error: Invalid operator!";
        }
    }

    // Return the result
    return result;
}

// Test the faulty calculator
console.log(faultyCalculator('+', 50, 30));   // This might return 8 (correct) or something else (faulty)
console.log(faultyCalculator('-', 100, 40));  // This might return 6 (correct) or something else (faulty)
console.log(faultyCalculator('*', 70, 20));   // This might return 14 (correct) or something else (faulty)
console.log(faultyCalculator('/', 80, 20));   // This might return 4 (correct) or something else (faulty)
console.log(faultyCalculator('/', 8, 0));   // This might return "Error: Division by zero!" (correct) or something else (faulty)
console.log(faultyCalculator('?', 8, 2));   // This might return "Error: Invalid operator!" (correct) or something else (faulty)
