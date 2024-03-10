function attachEvents() {

  let BASE_URL = 'http://localhost:3030/jsonstore/collections/books';
  
  let elements = {
    loadBtn: document.getElementById('loadBooks'),
    submitBtn: document.querySelector('#form button'),
    nameInputElemens: document.querySelector('input[name=title]'),
    authorInputElemens: document.querySelector('input[name=author]'),
    tbodyElement: document.querySelector('table tbody'),
    formHeadingElement: document.querySelector('#form h3'),
  }

  elements.loadBtn.addEventListener('click', loadBooksHandler);

  function loadBooksHandler() {

    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        elements.tbodyElement.textContent = '';
        Object.entries(data)
          .forEach(objElement => {
            let [objId, objData] = objElement;
            let { author, title } = objData;
            
            let newTr = document.createElement('tr');

            let newTdTitle = document.createElement('td');
            newTdTitle.textContent = title;

            let newTdAuthor = document.createElement('td');
            newTdAuthor.textContent = author;

            let newTdEditAndDeleteBtn = document.createElement('td');

            let newEditBtn = document.createElement('button');
            newEditBtn.textContent = 'Edit';
            newEditBtn.addEventListener('click', editBookHandler)

            let newDeleteBtn = document.createElement('button');
            newDeleteBtn.textContent = 'Delete';
            newDeleteBtn.addEventListener('click', deleteBookHandler)

            newTdEditAndDeleteBtn.appendChild(newEditBtn);
            newTdEditAndDeleteBtn.appendChild(newDeleteBtn);

            newTr.appendChild(newTdTitle);
            newTr.appendChild(newTdAuthor);
            newTr.appendChild(newTdEditAndDeleteBtn);
            elements.tbodyElement.appendChild(newTr);

            function editBookHandler() {

              elements.authorInputElemens.value = author;
              elements.nameInputElemens.value = title;
              elements.formHeadingElement.textContent = 'Edit Form';
              elements.submitBtn.textContent = 'Save';
              elements.submitBtn.addEventListener('click', saveChangesHandler);

            };

            function saveChangesHandler() {

              let editedAuthor = elements.authorInputElemens.value;
              let editedTitle = elements.nameInputElemens.value;

              if (editedAuthor && editedTitle) {

                let editedObj = {
                  author: editedAuthor,
                  title: editedTitle,
                }

                fetch(`${BASE_URL}/${objId}`, {
                  method: 'PUT',
                  body: JSON.stringify(editedObj)
                })
                  .then(res => res.json())
                  .then(() => {
                    elements.authorInputElemens.value = '';
                    elements.nameInputElemens.value = '';
                    elements.formHeadingElement.textContent = 'Form';
                    elements.submitBtn.textContent = 'Submit';
                    loadBooksHandler();
                  })
                  .catch(error => console.log(error))
              }
            };

            function deleteBookHandler() {

              fetch(`${BASE_URL}/${objId}`, {
                method: 'DELETE'
              })
                .then(res => res.json())
                .then(() => loadBooksHandler())
                .catch(error => console.log(error));
            };
          })
      })
      .catch(error => console.log(error));
  };

  // ------------ SUBMIT ------------

  elements.submitBtn.addEventListener('click', submitBookHandler);

  function submitBookHandler() {

    if (elements.submitBtn.textContent == 'Submit') {
      
          let newAuthorValue = elements.authorInputElemens.value;
          let newTitleValue = elements.nameInputElemens.value;
      
          if (newTitleValue && newAuthorValue) {
      
            let newBookObj = {
              author: newAuthorValue,
              title: newTitleValue,
            }
      
            fetch(BASE_URL, {
              method: 'POST',
              body: JSON.stringify(newBookObj)
            })
              .then(res => res.json())
              .then(() => {
                elements.authorInputElemens.value = '';
                elements.nameInputElemens.value = '';
                loadBooksHandler()
              })
              .catch(error => console.log(error));
          }
    }
  };
}

attachEvents();