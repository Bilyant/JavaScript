function extractText() {
    
    elements = {
        liItems: document.querySelectorAll('li'),
        textAreaEl: document.getElementById('result'),
    }

    for (let el of elements.liItems) {
        elements.textAreaEl.innerHTML += el.innerHTML + '\n';
    }

}