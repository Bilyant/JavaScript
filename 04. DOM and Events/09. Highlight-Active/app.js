function focused() {
    
    elements = {
        inputElements: Array.from(document.querySelectorAll('div > input')), 
    }

    elements.inputElements
        .forEach(el => {
                // el.addEventListener('focus', () => {
                //     el.parentElement.classList.add('focused');
                // });
                el.addEventListener('focus', focusEventHandler);
                el.addEventListener('blur', blurEventHandler);
        });

    function focusEventHandler(e) {
        e.target.parentNode.classList.add('focused');
    }

    function blurEventHandler(e) {
        e.target.parentNode.classList.remove('focused');
    }

};