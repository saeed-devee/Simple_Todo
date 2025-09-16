const inputBox = document.querySelector("#todo-text__input");
const todoList = document.querySelector("#todo-list");
const submitBtn = document.querySelector("#submit-btn");

function addTodo() {
  const regex = /^[a-zA-Zآ-ی\s]+$/;

  if (inputBox.value.trim() === "") {
    alert("لطفا باکس متن رو پر کنین و بعد دکمه تایید رو بزنید :)");
  } 
  else if (!regex.test(inputBox.value.trim())) {
    alert("لطفا فقط از حروف فارسی استفاده بکنید. نه کاراکتر های خاص و شماره ها.");
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
