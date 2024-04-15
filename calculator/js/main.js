function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultContainer = document.getElementById('result');
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        resultContainer.innerHTML = '<div class="alert alert-danger">Please enter valid numbers.</div>';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultContainer.innerHTML = '<div class="alert alert-danger">Cannot divide by zero.</div>';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultContainer.innerHTML = '<div class="alert alert-danger">Invalid operation.</div>';
            return;
    }

    resultContainer.innerHTML = '<div class="alert alert-success">Result: ' + result + '</div>';
}
