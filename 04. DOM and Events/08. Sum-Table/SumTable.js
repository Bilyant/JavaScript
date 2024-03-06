function sumTable() {

    elements = {
        tdElements: Array.from(document.querySelectorAll('table tbody td:nth-child(even)')),
        sumElement: document.getElementById('sum'),
    }
    let total = 0;

    elements.tdElements
        .forEach(el => {
            total += Number(el.innerHTML);
        })

    elements.sumElement.innerHTML = total;
};