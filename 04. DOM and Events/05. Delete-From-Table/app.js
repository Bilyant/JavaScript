function deleteByEmail() {

    let childToRemove;
    
    elements = {
        tableEl: document.getElementById('customers'),
        tBodyEl: document.querySelector('table tbody'),
        tableRowsElements: document.querySelectorAll('tbody tr'),
        tableTdElements: document.querySelectorAll('tbody tr td:nth-child(even)'),
        inputEmailEl: document.querySelector('input[name=email]'),
        resultEl: document.getElementById('result'),
    };

    for (let td of elements.tableTdElements) {
        
        if (td.innerHTML == elements.inputEmailEl.value) {
            childToRemove = td.parentElement;
        };
    }

    if (childToRemove) {
        elements.tBodyEl.removeChild(childToRemove);
        elements.resultEl.innerHTML = 'Deleted';
    }
    else {
        elements.resultEl.innerHTML = 'Not found';
    };

};