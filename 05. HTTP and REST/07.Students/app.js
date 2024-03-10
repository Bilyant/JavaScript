function attachEvents() {

  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  
  let elements = {
    submitBtn: document.getElementById('submit'),
    firstNameInputElement: document.querySelector('input[name=firstName]'),
    lastNameInputElement: document.querySelector('input[name=lastName]'),
    facultyNumberInputElement: document.querySelector('input[name=facultyNumber]'),
    gradeInputElement: document.querySelector('input[name=grade]'),
    tHeadElement: document.querySelector('#results thead'),
    tBodyElement: document.querySelector('#results tbody'),
  };

  elements.submitBtn.addEventListener('click', submitHandler);

  function submitHandler() {

    let firstName = elements.firstNameInputElement.value;
    let lastName = elements.lastNameInputElement.value;
    let facultyNumber = elements.facultyNumberInputElement.value;
    let grade = elements.gradeInputElement.value;

    if (firstName && lastName && facultyNumber && grade) {

      let newObjData = { firstName, lastName, facultyNumber, grade }

      fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(newObjData)
      })
        .then(res => res.json())
        .catch(error => console.log(error));
  
      elements.firstNameInputElement.value = '';
      elements.lastNameInputElement.value = '';
      elements.facultyNumberInputElement.value = '';
      elements.gradeInputElement.value = '';
  
  
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => {
        elements.tBodyElement.innerHTML = '';
        Object.entries(data)
          .forEach(objElement => {
            let [objId, objData] = objElement;
            let { firstName, lastName, facultyNumber, grade, _id } = objData;
            
            let newTrElement = document.createElement('tr');
            let thFirstName = document.createElement('th');
            thFirstName.textContent = firstName;
            let thLastName = document.createElement('th');
            thLastName.textContent = lastName;
            let thfacultyNumber = document.createElement('th');
            thfacultyNumber.textContent = facultyNumber;
            let thgrade = document.createElement('th');
            thgrade.textContent = grade;
  
            newTrElement.appendChild(thFirstName);
            newTrElement.appendChild(thLastName);
            newTrElement.appendChild(thfacultyNumber);
            newTrElement.appendChild(thgrade);
            elements.tBodyElement.appendChild(newTrElement);
          })
      })  
    }
  };
}

attachEvents();