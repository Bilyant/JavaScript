function solve() {

    let BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule'
    let firstStop = 'depot';
    let nextStop;

    let elements = {
        departBtn: document.getElementById('depart'),
        arriveBtn: document.getElementById('arrive'),
        infoBox: document.getElementById('info'),
        currentStop: document.querySelector('#info .info'),
    }

    function depart() {

        fetch (`${BASE_URL}`)
            .then(res => res.json())
            .then(data => {

                if (elements.currentStop.innerHTML == 'Not Connected'){
                    nextStop = data[firstStop];                      
                }

                elements.currentStop.innerHTML = `Next stop ${nextStop.name}`;
                nextStop = data[nextStop.next];
                
                elements.departBtn.setAttribute('disabled', 'true');
                elements.arriveBtn.removeAttribute('disabled');

            })
            .catch(error => {
                elements.currentStop.innerHTML = 'Error!'
                elements.departBtn.setAttribute('disabled', 'true');
                elements.arriveBtn.setAttribute('disabled', 'true');
            });
    }

    function arrive() {

            elements.currentStop.innerHTML = `Arriving at ${nextStop.name}`
            elements.arriveBtn.setAttribute('disabled', 'true');
            elements.departBtn.removeAttribute('disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();