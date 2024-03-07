function addItem() {
    
    let elements = {
        selectElement: document.getElementById('menu'),
        inputTextElement: document.getElementById('newItemText'),
        inputValueElement: document.getElementById('newItemValue'),
    }

    let newOptionElement = document.createElement('option');
    newOptionElement.innerHTML = elements.inputTextElement.value;
    newOptionElement.value = elements.inputValueElement;

    elements.selectElement.appendChild(newOptionElement);

    elements.inputTextElement.value = '';
    elements.inputValueElement.value = '';

}