const firstMeal = document.getElementById('firstMeal');
const secondMeal = document.getElementById('secondMeal');
const thirdMeal = document.getElementById('thirdMeal');
const fourthMeal = document.getElementById('fourthMeal');
const fifthMeal = document.getElementById('fifthMeal');
const sixthMeal = document.getElementById('sixthMeal');
const seventhMeal = document.getElementById('seventhMeal');
const retrievePassword = document.getElementById('retrievePassword');
const formOutput = document.getElementById('formOutput');
const editListBtn = document.getElementById('editListBtn');
const deleteListBtn = document.getElementById('deleteListBtn');
const form = document.getElementById('form');

window.onload = () => {
  formOutput = JSON.parse(localStorage.getItem('formData'));
};

const handleForm = (eventForm) => {
  eventForm.preventDefault();

  const listInputData = {
    firstMeal: firstMeal.value,
    secondMeal: secondMeal.value,
    thirdMeal: thirdMeal.value,
    fourthMeal: fourthMeal.value,
    fifthMeal: fifthMeal.value,
    sixthMeal: sixthMeal.value,
    seventhMeal: seventhMeal.value,
    retrievePassword: retrievePassword.value,
  };
  //console.log(listInputData);

  formOutput.innerHTML = ` 
  <li class="list-group-item">${listInputData.firstMeal}</li>
  <li class="list-group-item">${listInputData.secondMeal}</li>
  <li class="list-group-item">${listInputData.thirdMeal}</li>
  <li class="list-group-item">${listInputData.fourthMeal}</li>
  <li class="list-group-item">${listInputData.fifthMeal}</li>
  <li class="list-group-item">${listInputData.sixthMeal}</li>
  <li class="list-group-item">${listInputData.seventhMeal}</li>
  <div class="d-flex justify-content-between">
  <a href="editPage.html?pageId=${listInputData.retrievePassword}"><button type="button"  class="btn btn-secondary my-3" id="editListBtn">Edit</button></a>
            <a href=""   class="align-self-center"><i class="bi bi-trash-fill  fs-3 text-danger" id="deleteListBtn"></i></a>
            </div> 
  `;

  localStorage.setItem('formData', JSON.stringify(listInputData));

  form.reset();
};

const retrieveItem = () => {
  JSON.parse(localStorage.getItem('formData'));
};
