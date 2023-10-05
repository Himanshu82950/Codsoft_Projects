// Initialize the display value
let displayValue = '';

// Function to append a value to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('inputmessage').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('inputmessage').value = '';
}

// Function to calculate the result
function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('inputmessage').value = displayValue;
    } catch (error) {
        document.getElementById('inputmessage').value = 'Error';
        displayValue = '';
    }
}
