function addItem() {

    elements = {
        inputEl: document.getElementById('newItemText'),
        ulEl: document.getElementById('items'),
    }

    let newLiEl = document.createElement('li');
    newLiEl.innerHTML = elements.inputEl.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', () => {
        newLiEl.remove();
    })

    newLiEl.appendChild(deleteBtn);
    elements.ulEl.appendChild(newLiEl);
    elements.inputEl.value = '';

}