const inputBox = document.querySelector("#todo-text__input");
const todoList = document.querySelector("#todo-list");
const submitBtn = document.querySelector("#submit-btn");

function addTodo() {
  const regex = /^[a-zA-Zآ-ی\s]+$/;

  if (inputBox.value.trim() === "") {
    alert("You cannot leave nothing in the box :(");
  } 
  else if (!regex.test(inputBox.value.trim())) {
    alert("Only letters are allowed! No numbers or special characters.");
  } 
  else {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = inputBox.value;
    todoList.appendChild(todoItem);
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    todoItem.appendChild(deleteBtn);
  }
  inputBox.value = "";
  saveData();
}

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}
function showData() {
  todoList.innerHTML = localStorage.getItem("data");
}
showData();

inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
submitBtn.addEventListener("click", addTodo);
