// test inputs: New York; Barcelona, London

function attachEvents() {

    let LOCATION_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
    let CURRENT_WEATHER_URL = 'http://localhost:3030/jsonstore/forecaster/today'
    let THREE_DAY_FORECAST_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming'
    let weatherSymbols = {
        "Sunny": "&#x2600;",
        "Partly sunny": "&#x26C5;",
        "Overcast": "&#x2601;",
        "Rain": "&#x2614;",
        "Degrees": "&#176;",
    }

    let elements = {
        locationInput: document.getElementById('location'),
        submitBtn: document.getElementById('submit'),
        currentConditionsElement: document.getElementById('current'), 
        upcomingConditionsElement: document.getElementById('upcoming'), 
    }

    let locationCode = [];
    elements.submitBtn.addEventListener('click', submitHandler);

    function submitHandler() {

        fetch(`${LOCATION_URL}`)
            .then(res => res.json())
            .then(data => {
                let location = elements.locationInput.value.toLowerCase();

                for (let objElement of data) {
                    let { code, name } = objElement;
                    if (location == name.toLowerCase()) {
                        locationCode = code;
                        break;
                    };
                }

                fetch(`${CURRENT_WEATHER_URL}/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {
                        let { name, forecast } = data;

                        let { condition, high, low } = forecast;

                        elements.currentConditionsElement.parentElement.style.display = 'block';
                        if (elements.currentConditionsElement.children.length > 1) {
                            elements.currentConditionsElement.removeChild(elements.currentConditionsElement.lastChild);
                        }

                        let forecastDiv = document.createElement('div');
                        forecastDiv.classList.add('forecasts');
                        
                        let conditionSymbolSpan = document.createElement('span');
                        conditionSymbolSpan.classList.add('condition', 'symbol');
                        conditionSymbolSpan.innerHTML = weatherSymbols[condition]

                        let conditionSpan = document.createElement('span');
                        conditionSpan.classList.add('condition');
                        
                        let countryNameSpan = document.createElement('span');
                        countryNameSpan.classList.add('forecast-data');
                        countryNameSpan.innerHTML = name;

                        let temperatureSpan = document.createElement('span');
                        temperatureSpan.classList.add('forecast-data');
                        temperatureSpan.innerHTML = `${low}${weatherSymbols['Degrees']}/${high}${weatherSymbols['Degrees']}`

                        let weatherConditionSpan = document.createElement('span');
                        weatherConditionSpan.classList.add('forecast-data');
                        weatherConditionSpan.innerHTML = condition;

                        conditionSpan.appendChild(countryNameSpan);                        
                        conditionSpan.appendChild(temperatureSpan);                        
                        conditionSpan.appendChild(weatherConditionSpan);    
                        
                        forecastDiv.appendChild(conditionSymbolSpan);
                        forecastDiv.appendChild(conditionSpan);
                        elements.currentConditionsElement.appendChild(forecastDiv);

                        elements.locationInput.value = '';

                    })
                    
                fetch(`${THREE_DAY_FORECAST_URL}/${locationCode}`)
                    .then(res => res.json())
                    .then(data => {
                        let { forecast, name } = data;

                        if (elements.upcomingConditionsElement.children.length > 1) {
                            elements.upcomingConditionsElement.removeChild(elements.upcomingConditionsElement.lastChild);
                        }

                        let foreCastDiv = document.createElement('div');
                        foreCastDiv.classList.add('forecast-info');
                        
                        for (let dailyForecast of forecast) {
                            let { condition, high, low } = dailyForecast;

                            let upcomingWrapperSpan = document.createElement('span');
                            upcomingWrapperSpan.classList.add('upcoming');

                            let symbolSpan = document.createElement('span');
                            symbolSpan.classList = 'symbol';
                            symbolSpan.innerHTML = weatherSymbols[condition];

                            let temperatureSpan = document.createElement('span');
                            temperatureSpan.classList.add('forecast-data');
                            temperatureSpan.innerHTML = `${low}${weatherSymbols['Degrees']}/${high}${weatherSymbols['Degrees']}`

                            let weatherConditionSpan = document.createElement('span');
                            weatherConditionSpan.classList.add('forecast-data');
                            weatherConditionSpan.innerHTML = condition;

                            upcomingWrapperSpan.appendChild(symbolSpan);
                            upcomingWrapperSpan.appendChild(temperatureSpan);
                            upcomingWrapperSpan.appendChild(weatherConditionSpan);

                            foreCastDiv.appendChild(upcomingWrapperSpan);

                        }
                        elements.upcomingConditionsElement.appendChild(foreCastDiv);
                    });     
        });
    };
}

attachEvents();