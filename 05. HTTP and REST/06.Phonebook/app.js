function attachEvents() {

    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';

    let elements = {
        loadBtn: document.getElementById('btnLoad'),
        createBtn: document.getElementById('btnCreate'),
        ulPhoneBookElement: document.getElementById('phonebook'),
        personNameInputElement: document.getElementById('person'),
        phoneNumberInputElement: document.getElementById('phone'),
    }

    elements.loadBtn.addEventListener('click', loadNumbersHandler);

    function loadNumbersHandler() {

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                elements.ulPhoneBookElement.textContent = '';
                Object.entries(data)
                    .forEach(objElement => {
                        let [objId, numberData] = objElement;
                        let { person, phone, _id } = numberData;
                        
                        let newLiItem = document.createElement('li');
                        newLiItem.textContent = `${person}: ${phone}`;

                        let newDeleteBtn = document.createElement('button');
                        newDeleteBtn.textContent = 'Delete';
                        newDeleteBtn.style.marginLeft = '1rem';
                        newDeleteBtn.addEventListener('click', deleteNumberHandler);

                        newLiItem.appendChild(newDeleteBtn)
                        elements.ulPhoneBookElement.appendChild(newLiItem);


                        function deleteNumberHandler() {

                            fetch(`${BASE_URL}/${objId}`, {
                                method: 'DELETE'
                            })
                                .then(res => res.json())
                                .then(() => {
                                    elements.ulPhoneBookElement.textContent = '';
                                    loadNumbersHandler()
                                })
                                .catch(error => console.log(error));  
                        };
                    })
            })
    };


    elements.createBtn.addEventListener('click', createNumberHandler);

    function createNumberHandler() {

        let personName = elements.personNameInputElement.value;
        let phoneNumber = elements.phoneNumberInputElement.value;

        fetch(`${BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify({
                person: personName,
                phone: phoneNumber
            })
        })
            .then(res => res.json())
            .then(() => {
                elements.personNameInputElement.value = '';
                elements.phoneNumberInputElement.value = '';
                loadNumbersHandler();
            })
            .catch(error => console.log(error));
    };
};

attachEvents();