function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    if (display.value.length > 0) {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
