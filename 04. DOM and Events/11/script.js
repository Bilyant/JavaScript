function create(words) {

   let elements = {
      contentEl: document.getElementById('content'),
   }
   
   words.forEach(el => {
      let newDivEl = document.createElement('div');
      let newParagraphEl = document.createElement('p');
      newParagraphEl.style.display = 'none';
      newParagraphEl.innerHTML = el;

      newDivEl.appendChild(newParagraphEl);
      elements.contentEl.appendChild(newDivEl);

      newDivEl.addEventListener('click', clickEventHandler);

      function clickEventHandler(e) {

         if (e.target.firstChild.style.display == 'block'){
            e.target.firstChild.style.display = 'none';
         }
         else {
            e.target.firstChild.style.display = 'block';
         }
      }
   })
}