function addItem() {
    
    elements = {
        ulElement: document.getElementById('items'),
        newItemEl: document.getElementById('newItemText'),
    }

    let newLiItem = document.createElement('li');
    newLiItem.innerHTML = elements.newItemEl.value;

    elements.ulElement.appendChild(newLiItem);
    elements.newItemEl.value = '';
}