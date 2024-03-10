function attachEvents() {
    
    let elements = {
        sendBtn: document.getElementById('submit'),
        refreshBtn: document.getElementById('refresh'),
        nameInputElement: document.querySelectorAll('#controls input')[0],
        messageInputElement: document.querySelectorAll('#controls input')[1],
        messagesTextArea: document.getElementById('messages'),
    };

    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    elements.sendBtn.addEventListener('click', sendEventHandler);

    function sendEventHandler() {

        let name = elements.nameInputElement.value;
        let message = elements.messageInputElement.value;
        let fetchData = {
            method: 'POST',
            body: JSON.stringify({
                author: name,
                content: message,
            })
        }

        fetch(BASE_URL, fetchData)
        elements.nameInputElement.value = '';
        elements.messageInputElement.value = '';
        refreshEventHandler()

    };
    

    elements.refreshBtn.addEventListener('click', refreshEventHandler);

    function refreshEventHandler() {

        elements.messagesTextArea.innerHTML = '';

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(objElement =>{
                        let [objId, objData] = objElement;
                        let { author, content } = objData;
                        elements.messagesTextArea.textContent += `${author}: ${content}\n`;
                    })
            })
    };
}

attachEvents();