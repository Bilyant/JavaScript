function subtract() {
    
    elements = {
        firstNum: document.getElementById('firstNumber'),
        secondNum: document.getElementById('secondNumber'),
        result: document.getElementById('result'),
    }

    let sum = Number(elements.firstNum.value) - Number(elements.secondNum.value);
    elements.result.innerHTML = sum;
}