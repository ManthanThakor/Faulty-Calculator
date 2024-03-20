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