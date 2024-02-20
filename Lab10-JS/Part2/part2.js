document.addEventListener("DOMContentLoaded", function () {
  var tasksList = document.getElementById("tasks-list");
  var savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasksList.innerHTML = savedTasks;
  }
});

function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task name.");
    return;
  }

  var tasksList = document.getElementById("tasks-list");

  var taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.innerHTML = `
    <span>${taskName}</span>
    <span class="actions">
      <span class="done" onclick="toggleTaskStatus(this)">✔</span>
      <span class="delete" onclick="deleteTask(this)">✖</span>
    </span>
  `;

  tasksList.appendChild(taskElement);
  taskInput.value = "";

  saveTasks();
}

function toggleTaskStatus(doneButton) {
  var taskElement = doneButton.parentNode.parentNode;
  taskElement.classList.toggle("done");

  saveTasks();
}

function deleteTask(deleteButton) {
  var taskElement = deleteButton.parentNode.parentNode;
  var tasksList = document.getElementById("tasks-list");
  tasksList.removeChild(taskElement);

  saveTasks();
}

// Save tasks to local storage
function saveTasks() {
  var tasksList = document.getElementById("tasks-list");
  var tasks = tasksList.innerHTML;

  localStorage.setItem("tasks", tasks);
}
