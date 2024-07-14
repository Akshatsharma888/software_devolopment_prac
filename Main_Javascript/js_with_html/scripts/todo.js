const todolist = [
  {
    name: "make dinner",
    dueDate: "2022 - 12 - 22",
  },
  {
    name: "make coffee",
    dueDate: "2022 - 12 - 22",
  },
];
// JSON.parse(localStorage.getItem('todolist'));
render_todo();
function render_todo() {
  let todolisthtml = "";
  todolist.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `<div class="p-text">${name}</div>
                  <div class="p-text">${dueDate}</div>
                  <button class="delete-button js-delete">Delete</button>`;
    todolisthtml += html;
  });
  
  document.querySelector(".js-list").innerHTML = todolisthtml;
  
  document.querySelectorAll(".js-delete").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todolist.splice(index, 1);
      render_todo();
    });
  });
}

// localStorage.setItem('todolist',JSON.stringify(todolist))
function todofo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value; // Fixed: Added 'const' to declare 'Name' properly
  const dateInputElement = document.querySelector(".js-duedate");
  const dueDate = dateInputElement.value;
  todolist.push({
    // Name: name,
    // dueDate:dueDate
    // this below do the same thing as the lines of code above.
    name,
    dueDate,
  });
  inputElement.value = "";
  render_todo();
}
document.querySelector(".add-button").addEventListener("click", () => {
  todofo();
});
