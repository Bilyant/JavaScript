window.addEventListener("load", solve);

function solve() {
  
  let elements = {
    firstNameInput: document.getElementById('first-name'),
    lastNameInput: document.getElementById('last-name'),
    ageInput: document.getElementById('age'),
    storyTitleInput: document.getElementById('story-title'),
    genreSelectElement: document.getElementById('genre'),
    storyTextAreaElement: document.getElementById('story'),
    publishInputAsButton: document.getElementById('form-btn'),
    previewUlElement: document.getElementById('preview-list'),
    mainContainer: document.getElementById('main'),
  }

  elements.publishInputAsButton.addEventListener('click', publishStoryHandler);

  function publishStoryHandler() {

    let firstName = elements.firstNameInput.value;
    let lastName = elements.lastNameInput.value;
    let age = elements.ageInput.value;
    let storyTitle = elements.storyTitleInput.value;
    let storyText = elements.storyTextAreaElement.value;
    let genre = elements.genreSelectElement.value; 

    let allInfoProvided = true;

    if (!(firstName && lastName && age && storyText && storyTitle && genre)) {
      allInfoProvided = false;
    }

    if (allInfoProvided) {

      for (let element in elements) {
        elements[element].value = '';
      }

      let newLi = document.createElement('li');
      newLi.classList.add('story-info');

      let newArticle = document.createElement('article');

      let newh4Heading = document.createElement('h4');
      newh4Heading.textContent = `Name: ${firstName} ${lastName}`;

      let newAgeParagraph = document.createElement('p');
      newAgeParagraph.textContent = `Age: ${age}`;

      let newTitleParagraph = document.createElement('p');
      newTitleParagraph.textContent = `Title: ${storyTitle}`

      let newGenreParagraph = document.createElement('p');
      newGenreParagraph.textContent = `Genre: ${genre}`;

      let newStoryTextParagraph = document.createElement('p');
      newStoryTextParagraph.textContent = `"${storyText}"`;

      let newBtnSave = document.createElement('button');
      newBtnSave.textContent = 'Save Story';
      newBtnSave.classList.add('save-btn');
      newBtnSave.addEventListener('click', saveStoryHandler)

      let newBtnEdit = document.createElement('button');
      newBtnEdit.textContent = 'Edit Story';
      newBtnEdit.classList.add('edit-btn');
      newBtnEdit.addEventListener('click', editStoryHandler)

      let newBtnDelete = document.createElement('button');
      newBtnDelete.textContent = 'Delete Story';
      newBtnDelete.classList.add('delete-btn');
      newBtnDelete.addEventListener('click', deleteStoryHandler)

      newArticle.appendChild(newh4Heading);
      newArticle.appendChild(newAgeParagraph);
      newArticle.appendChild(newTitleParagraph);
      newArticle.appendChild(newGenreParagraph);
      newArticle.appendChild(newStoryTextParagraph);

      newLi.appendChild(newArticle);
      newLi.appendChild(newBtnSave);
      newLi.appendChild(newBtnEdit);
      newLi.appendChild(newBtnDelete);

      elements.previewUlElement.appendChild(newLi);

      function saveStoryHandler() {

        elements.mainContainer.textContent = '';
        
        let newh1Heading = document.createElement('h1');
        newh1Heading.textContent = 'Your scary story is saved!';

        elements.mainContainer.appendChild(newh1Heading);

      };

      function editStoryHandler() {

        elements.firstNameInput.value = firstName;
        elements.lastNameInput.value = lastName;
        elements.ageInput.value = age;
        elements.storyTitleInput.value = storyTitle;
        elements.storyTextAreaElement.value = storyText;
        elements.genreSelectElement.value = genre;

        elements.previewUlElement.removeChild(newLi);

      };

      function deleteStoryHandler() {
        elements.previewUlElement.removeChild(newLi);
      };
    } 
  };
}
