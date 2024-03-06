function colorize() {
    
    elements = {
        tableRowElements: Array.from(document.querySelectorAll('table tr:nth-child(even')),
    }

    // for (let el of elements.tableRowElements) {
    //     el.style.backgroundColor = 'blue';
    // }

    elements.tableRowElements
        .forEach(el => {
            el.style.backgroundColor = 'blue';
        })
}