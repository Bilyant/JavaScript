function getInfo() {

    let elements = {
        stopInputData: document.getElementById('stopId'),
        checkBtn: document.getElementById('submit'),
        resultElement: document.getElementById('result'),
        stopNameElement: document.getElementById('stopName'),
        ulBuses: document.getElementById('buses'),
    }

    let url = 'http://localhost:3030/jsonstore/bus/businfo/';
    let method = { method: 'GET' }
    let stopNumber = elements.stopInputData.value;
    
    fetch(`${url}${stopNumber}`, method)
        .then(result => result.json())
        .then(data => {
            let buses = data.buses;
            let name = data.name;
            console.log(buses);
            console.log(name);

            elements.stopNameElement.innerHTML = name;
            elements.ulBuses.innerHTML = '';

            for(let key in buses) {
                let newLiItem = document.createElement('li');
                newLiItem.innerHTML = `Bus ${key} arrives in ${buses[key]} minutes`;
                elements.ulBuses.appendChild(newLiItem);
            }

        })
        .catch(() => {
            elements.stopNameElement.innerHTML = 'Error!';
        })
        .finally(() => {
            elements.stopInputData.value = '';
        })
}