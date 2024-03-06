function calc() {

    let elements = {
        firstNumEl: document.getElementById('num1'),
        secondNumEl: document.getElementById('num2'),
        sumEl: document.getElementById('sum'),
    }

    elements.sumEl.value = sumEl = Number(elements.firstNumEl.value) + Number(elements.secondNumEl.value);
}
