const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

let elements = {
    productNameInput: document.getElementById('product'),
    countInput: document.getElementById('count'),
    priceInput: document.getElementById('price'),
    addBtn: document.getElementById('add-product'),
    updateBtn: document.getElementById('update-product'),
    loadAllProductsBtn: document.getElementById('load-product'),
    tbody: document.querySelector('table tbody'),
};

elements.addBtn.addEventListener('click', addProductHandler);
elements.loadAllProductsBtn.addEventListener('click', loadAllProductsHandler);

function addProductHandler(event) {

    event.preventDefault();

    let product = elements.productNameInput.value;
    let count = elements.countInput.value;
    let price = elements.priceInput.value;

    if (product && count && price) {

        let newProduct = { product, count, price }

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(() => {
                elements.productNameInput.value = '';
                elements.countInput.value = '';
                elements.priceInput.value = '';
                loadAllProductsHandler(event);
            })
            .catch(error => console.log(error));
    }
};

function loadAllProductsHandler(event) {

    event.preventDefault();

    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            elements.tbody.textContent = '';
            Object.entries(data)
            .forEach(el => {

                let [ objId, objData ] = el;
                let { product, count, price } = objData;
                
                let newTr = document.createElement('tr');

                let newNameTd = document.createElement('td');
                newNameTd.classList.add('name');
                newNameTd.textContent = product;

                let newCountTd = document.createElement('td');
                newCountTd.classList.add('count-product');
                newCountTd.textContent = count;

                let newPriceTd = document.createElement('td');
                newPriceTd.classList.add('product-price');
                newPriceTd.textContent = price;

                let newButtonsTd = document.createElement('td');
                newButtonsTd.classList.add('btn');
                
                let newUpdateBtn = document.createElement('button');
                newUpdateBtn.classList.add('update');
                newUpdateBtn.textContent = 'Update';
                newUpdateBtn.addEventListener('click', updateSecondaryBtn);

                let newDeleteBtn = document.createElement('button');
                newDeleteBtn.classList.add('delete');
                newDeleteBtn.textContent = 'Delete';
                newDeleteBtn.addEventListener('click', deleteProductHandler);

                newButtonsTd.appendChild(newUpdateBtn);
                newButtonsTd.appendChild(newDeleteBtn);
                newTr.appendChild(newNameTd);
                newTr.appendChild(newCountTd);
                newTr.appendChild(newPriceTd);
                newTr.appendChild(newButtonsTd);
                elements.tbody.appendChild(newTr);

                function updateSecondaryBtn() {

                    elements.productNameInput.value = product;
                    elements.countInput.value = count;
                    elements.priceInput.value = price;

                    elements.updateBtn.addEventListener('click', updateMainBtn);
                    elements.updateBtn.removeAttribute('disabled');
                    elements.addBtn.setAttribute('disabled', 'true');

                    function updateMainBtn() {

                        let updatedName = elements.productNameInput.value;
                        let updatedCount = elements.countInput.value;
                        let updatedPrice = elements.priceInput.value;

                        if (updatedName && updatedCount && updatedPrice) {

                            let updatedProduct = { 
                                product: updatedName,
                                count: updatedCount,
                                price: updatedPrice 
                            }

                            fetch(`${BASE_URL}/${objId}`, {
                                method: 'PATCH',
                                body: JSON.stringify(updatedProduct)
                            })
                                .then(res => res.json())
                                .then(() => {
                                    elements.productNameInput.value = '';
                                    elements.priceInput.value = '';
                                    elements.countInput.value = '';
                                    elements.updateBtn.setAttribute('disabled', 'true');
                                    elements.addBtn.removeAttribute('disabled');
                                    loadAllProductsHandler(event);
                                })
                                .catch(error => console.log(error));
                        }
                    }
                };

                function deleteProductHandler() {

                    fetch(`${BASE_URL}/${objId}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(() => {
                        loadAllProductsHandler(event);
                    })
                };
            })
        })
        .catch(error => console.log(error));
};
