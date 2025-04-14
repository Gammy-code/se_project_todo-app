import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import Popup from "../components/Popup.js";

import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const forms = document.querySelectorAll(".popup__form");

// instantiation
const section = new Section({
  items: initialTodos,
  renderer: (item) => generateTodo(item),
  containerSelector: ".todos__List",
});

section.renderItems();

//Instantiation

const addPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const date = new Date(inputValues.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const id = uuidv4();
    const values = { name: inputValues.name, date, id };
    const todoElement = generateTodo(values);
    section.addItem(todoElement);
    addPopup.close();
  },
});

//set eventListeners method

addPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addPopup.open();
});

// const closeModal = (modal) => {
//   modal.classList.remove("popup_visible");
// };

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

// const renderTodo = (item) => {
//   const todo = generateTodo(item);
//   todosList.appendChild(todo); //use add item instead
// };

// addTodoButton.addEventListener("click", () => {
//   addPopup.open();
// });

// addTodoCloseBtn.addEventListener("click", () => {
//   addPopup.close();
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };

//   renderTodo(values);

//   addPopup.close();
// });

// initialTodos.forEach((item) => {
//   renderTodo(item);
// });

forms.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
});
