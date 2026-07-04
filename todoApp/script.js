'use strict';

const input = document.getElementById("todo-input");
const addBTn = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// addBTn.onclick = function () {
//   let newLi = document.createElement('li');
//   newLi.textContent = input.value, document.createElement('button');

//   todoList.appendChild(newLi);
// }

input.addEventListener('input', () => {
  addBTn.disabled = input.value.trim() === '';
});

addBTn.addEventListener('click', newe);

  function newe () {
    let newLi = document.createElement('li');
    let deleteBtn = document.createElement('button');
  newLi.textContent = input.value;
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(newLi);
  });

  newLi.appendChild(deleteBtn);
  todoList.appendChild(newLi);
  }

  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addBTn.click();
    }
  });