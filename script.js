function addMainTask() {
  const taskList = document.getElementById("taskList");
  const taskInput = document.getElementById("mainTaskInput");

  if (taskInput.value.trim() === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const header = document.createElement("div");
  header.className = "task-header";

  const title = document.createElement("h3");
  title.textContent = taskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.onclick = () => taskDiv.remove();

  header.appendChild(title);
  header.appendChild(deleteBtn);

  const subtaskContainer = document.createElement("div");

  const subtaskInputDiv = document.createElement("div");
  subtaskInputDiv.className = "subtask-input";

  const subtaskInput = document.createElement("input");
  subtaskInput.placeholder = "Add subtask...";

  const subtaskAddBtn = document.createElement("button");
  subtaskAddBtn.textContent = "Add";
  subtaskAddBtn.onclick = () => {
    if (subtaskInput.value.trim() === "") return;
    addSubtask(subtaskContainer, subtaskInput.value);
    subtaskInput.value = "";
  };

  subtaskInputDiv.appendChild(subtaskInput);
  subtaskInputDiv.appendChild(subtaskAddBtn);

  taskDiv.appendChild(header);
  taskDiv.appendChild(subtaskContainer);
  taskDiv.appendChild(subtaskInputDiv);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
}

function addSubtask(container, text) {
  const subtaskDiv = document.createElement("div");
  subtaskDiv.className = "subtask";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.onclick = () => subtaskDiv.remove();

  subtaskDiv.appendChild(checkbox);
  subtaskDiv.appendChild(span);
  subtaskDiv.appendChild(deleteBtn);

  container.appendChild(subtaskDiv);
}
