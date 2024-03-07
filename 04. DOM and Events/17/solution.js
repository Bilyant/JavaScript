function solve() {

  let elements = {
    generateBtn: document.querySelectorAll('button')[0],
    newFurnitureData: document.querySelector('#exercise textarea'),
    tBoby: document.querySelector('table tbody'),
  }

  elements.generateBtn.addEventListener('click', generateEventHandler)

  function generateEventHandler (e) {

    let furnitureJsonData = JSON.parse(elements.newFurnitureData.value);
    furnitureJsonData.forEach(el => {
        
      let newTrElemen = document.createElement('tr');

      let newTdImgElement = document.createElement('td');
      let newImgTagElement = document.createElement('img');
      newImgTagElement.src = `${el.img}`;
      newTdImgElement.appendChild(newImgTagElement)


      let newTdNameElement = document.createElement('td');
      let newParagraphNameEl = document.createElement('p');
      newParagraphNameEl.innerHTML = el.name;
      newTdNameElement.appendChild(newParagraphNameEl);

      let newTdPriceElement = document.createElement('td');
      let newParagraphPriceEl = document.createElement('p');
      newParagraphPriceEl.innerHTML = el.price;
      newTdPriceElement.appendChild(newParagraphPriceEl);

      let newTdDecFactorElement = document.createElement('td');
      let newParagraphDecFactorEl = document.createElement('p');
      newParagraphDecFactorEl.innerHTML = el.decFactor;
      newTdDecFactorElement.appendChild(newParagraphDecFactorEl);

      let newTdCheckBoxElement = document.createElement('td');
      let newCheckBoxInputEl = document.createElement('input');
      newCheckBoxInputEl.type = 'checkbox';
      newTdCheckBoxElement.appendChild(newCheckBoxInputEl);


      newTrElemen.appendChild(newTdImgElement);
      newTrElemen.appendChild(newTdNameElement);
      newTrElemen.appendChild(newTdPriceElement);
      newTrElemen.appendChild(newTdDecFactorElement);
      newTrElemen.appendChild(newTdCheckBoxElement);
      elements.tBoby.appendChild(newTrElemen);

    })
  }

  elements.newFurnitureData.value = '';

}


let buyBtn = document.querySelectorAll('button')[1];
let outputTextArea = document.querySelectorAll('textarea')[1];


buyBtn.addEventListener('click', buyClickHandler);

function buyClickHandler(e) {

let trElements = Array.from(document.querySelectorAll('tbody tr'));
let totalPrice = 0;
let boughtFurniture = [];
let decFatorTotal = 0;

  trElements
    .forEach(el => {
      let children = Array.from(el.children)

      if (children[children.length - 1].firstChild.checked) {
        let price = Number(children[2].firstChild.innerHTML);
        let name = children[1].firstChild.innerHTML;
        let decFactor = Number(children[3].firstChild.innerHTML);
        totalPrice += price;
        boughtFurniture.push(name);
        decFatorTotal += decFactor
      }
    })

    if (boughtFurniture.length > 0) {

      outputTextArea.removeAttribute('disabled');
      let averageFactor = decFatorTotal / boughtFurniture.length;

      outputTextArea.innerHTML = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
      outputTextArea.innerHTML += `Total price: ${totalPrice.toFixed(2)}\n`
      outputTextArea.innerHTML += `Average decoration factor ${averageFactor.toFixed(2)}`
    };

};

