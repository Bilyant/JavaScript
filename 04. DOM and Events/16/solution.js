function solve(e) {
  
  let elements = {
    formatBtn: document.getElementById('formatItBtn'),
    outpitContainerEl: document.getElementById('output'),
    textAreaEl: document.getElementById('input'),
  }

  let sentences = elements.textAreaEl.value.split('.');

  while (sentences.length > 0) {

    let currentSentence = sentences.shift();
    let paragraphContent = [];

    while (paragraphContent.length < 3 && sentences.length > 0) {

      paragraphContent.push(currentSentence);

      if (paragraphContent.length < 3) {
        currentSentence = sentences.shift();
      }
    }

    let newParagraph = document.createElement('p');
    paragraphContent = paragraphContent.join('.')
    console.log(paragraphContent)
    newParagraph.innerHTML = `<p>${paragraphContent}.</p>`;
    elements.outpitContainerEl.appendChild(newParagraph);
  } 
}
