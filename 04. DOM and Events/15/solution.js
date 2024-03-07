function solve() {

   elements = {
      searchBtn: document.getElementById('searchBtn'),
      searchInputElement: document.getElementById('searchField'),
      trElements: Array.from(document.querySelectorAll('tbody tr')),
   }

   elements.searchBtn.addEventListener('click', onClick)

   function onClick(e) {
      
      elements.trElements
         .forEach(el => {
            let data = Array.from(el.children);

            for (let row of data) {
               
               if (row.innerHTML.includes(elements.searchInputElement.value)) {
                  el.classList.add('select');
               }
            } 
         })

         elements.searchInputElement.value = '';
   }
}