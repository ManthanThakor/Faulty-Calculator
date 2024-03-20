/// Function to perform addition
function faultyAddition(num1, num2) {
    // Introduce a fault by adding a random number to the result
    return num1 + num2 + Math.floor(Math.random() * 10);
}

// Function to perform subtraction
function faultySubtraction(num1, num2) {
    // Introduce a fault by subtracting a random number from the result
    return num1 - num2 - Math.floor(Math.random() * 10);
}

// Function to perform multiplication
function faultyMultiplication(num1, num2) {
    // Introduce a fault by multiplying the result with a random number
    return num1 * num2 * Math.floor(Math.random() * 10);
}

// Function to perform division
function faultyDivision(num1, num2) {
    // Introduce a fault by dividing the result by a random number
    return num1 / num2 / (Math.floor(Math.random() * 10) + 1);
}

// Example usage
console.log("Faulty Addition: " + faultyAddition(20, 9)); 
console.log("Faulty Subtraction: " + faultySubtraction(40, 2)); 
console.log("Faulty Multiplication: " + faultyMultiplication(30, 9)); 