function toggle() {
    
    let elements = {
        spanEL: document.querySelector('.button'),
        extraTextDiv: document.getElementById('extra'),
    }

    if (elements.extraTextDiv.style.display == 'block') {
        elements.extraTextDiv.style.display = 'none';
        elements.spanEL.innerHTML = 'MORE';
    }
    else {
        elements.extraTextDiv.style.display = 'block';
        elements.spanEL.innerHTML = 'LESS';
    }
}