const addTask = document.getElementById("addTask");

const addTaskName = document.getElementById("addTaskName");
const taskList = document.getElementById("taskList");

// Add task function will add element to table with edit delete and mark as complete buttons
addTask.addEventListener("click", function () {
  if (addTaskName.value != "") {
    const task = document.createElement("tr");
    task.setAttribute("class", "task-name");

    // Adding table row to the element
    task.innerHTML += `
    <td><span id = "taskName" class="task-name">${addTaskName.value}</span></td>
    <td id = "complete"><i class="fa-solid fa-x" style="color: #ff0000;"></i></td>
    <td> <button id="editTask" class="edit-task">Edit</button>
        <button id="deleteTask" class="delete-task">Delete</button>
        <button id="MarkAsComplete" class="mark-as-complete">Complete</button>
        </td>
    `;

    // Delete Task
    const deleteTask = task.querySelector("#deleteTask");
    deleteTask.addEventListener("click", () => {
      task.remove();
    });

    // Mark As Complete
    const MarkAsComplete = task.querySelector("#MarkAsComplete");
    MarkAsComplete.addEventListener("click", () => {
      task.querySelector("#complete").innerHTML =
        '<i class="fa-solid fa-check" style="color: #00ff40;"></i>';
    });

    // Edit task
    const editTask = task.querySelector("#editTask");
    const taskName = task.querySelector("#taskName");
    editTask.addEventListener("click", () => {
      const editedName = prompt("Edit task name:", addTaskName.value);
      if (editedName.value != "") {
        taskName.textContent = editedName;
      }
    });
    taskList.appendChild(task);
    addTaskName.value = "";
  } else {
    alert("Please enter a task name");
  }
});

// Filter section
const allTasks = document.getElementById("allTasks");
const CompletedTasks = document.getElementById("CompletedTasks");
const ActiveTasks = document.getElementById("ActiveTasks");

const tableRows = document.getElementsByTagName("tr");
// show all tasks
allTasks.addEventListener("click", () => {
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].removeAttribute("hidden");
  }
});

CompletedTasks.addEventListener("click", () => {
  for (let i = 1; i < tableRows.length; i++) {
    if (!tableRows[i].innerHTML.includes("fa-check")) {
      tableRows[i].setAttribute("hidden", "true");
    } else {
      tableRows[i].removeAttribute("hidden");
    }
  }
});

ActiveTasks.addEventListener("click", () => {
  for (let i = 1; i < tableRows.length; i++) {
    if (tableRows[i].innerHTML.includes("fa-check")) {
      tableRows[i].setAttribute("hidden", "false");
    } else {
      tableRows[i].removeAttribute("hidden");
    }
  }
});
