import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "eat breakfast",
    "take a shower",
    "drink up smoothie",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTask(t => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    setTask(t => t.filter((_, i) => i !== index));
  }

  function moveUpTask(index) {
    if (index === 0) return;
    setTask(t => {
      const newTasks = [...t];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      return newTasks;
    });
  }

  function moveDownTask(index) {
    if (index === task.length - 1) return;
    setTask(t => {
      const newTasks = [...t];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      return newTasks;
    });
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="Addtask" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="up-button" onClick={() => moveUpTask(index)}>
                Up
              </button>
              <button className="down-button" onClick={() => moveDownTask(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;