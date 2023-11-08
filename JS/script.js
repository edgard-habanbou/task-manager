const addTask = document.getElementById("addTask");
const dateInput = document.getElementById("dueDate");
const addTaskName = document.getElementById("addTaskName");
const taskList = document.getElementById("taskList");

// Add task function will add element to table with edit delete and mark as complete buttons
addTask.addEventListener("click", function () {
  if (addTaskName.value != "") {
    const task = document.createElement("tr");
    task.setAttribute("class", "task-name");
    let selectedDate = dateInput.value;
    if (selectedDate == "") {
      selectedDate = "-";
    }
    // Adding table row to the element
    task.innerHTML += `
    <td id = "complete"><i class="fa-solid fa-x fa-xl" style="color: #ff0000;"></i></td>
    <td><span id = "taskName" class="task-name">${addTaskName.value}</span></td>
    <td><span id = "taskName" class="task-name">${selectedDate}</span></td>
    <td class="action-btns"> 
      <div class="tooltip"><button id="editTask" class="edit-task action-btn"><i class="fa-solid fa-pen-to-square  fa-2x"></i></button><span class="tooltiptext">Edit</span></div>
      <div class="tooltip"><button id="deleteTask" class="delete-task action-btn"><i class="fa-solid fa-trash fa-2x"></i></button><span class="tooltiptext">Delete</span></div>
      <div class="tooltip"><button id="MarkAsComplete" class="mark-as-complete action-btn"><i class="fas fa-check-square fa-2x"></i></button><span class="tooltiptext">Mark As Comlete</span></div>
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
        '<i class="fa-solid fa-check fa-2x" style="color: #00ff40;"></i>';
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
    taskList.appendChild(task); //adding the row to the tablev
    addTaskName.value = "";
  } else {
    alert("Please enter a task name");
  }
});
// Due date section start

const dateButton = document.getElementById("datePicker");

dateButton.addEventListener("click", () => {
  dateInput.showPicker();
});

dateInput.addEventListener("input", () => {
  // You can perform additional actions here when the date is selected
  const selectedDate = dateInput.value;
  console.log("Selected date:", selectedDate);
});

// Due date section end
// Filter section start
const tableRows = document.getElementsByTagName("tr");

// Show all tasks
const allTasks = document.getElementById("allTasks");
allTasks.addEventListener("click", () => {
  for (let i = 0; i < tableRows.length; i++) {
    tableRows[i].removeAttribute("hidden");
  }
});

// Show completed tasks
const CompletedTasks = document.getElementById("CompletedTasks");
CompletedTasks.addEventListener("click", () => {
  for (let i = 1; i < tableRows.length; i++) {
    // check if row has a check sign(✔️) or ❌
    if (!tableRows[i].innerHTML.includes(" fa-check ")) {
      tableRows[i].setAttribute("hidden", "true");
    } else {
      tableRows[i].removeAttribute("hidden");
    }
  }
});

// Show active tasks
const ActiveTasks = document.getElementById("ActiveTasks");
ActiveTasks.addEventListener("click", () => {
  for (let i = 1; i < tableRows.length; i++) {
    // check if row has a check sign(✔️) or ❌
    if (tableRows[i].innerHTML.includes(" fa-check ")) {
      tableRows[i].setAttribute("hidden", "false");
    } else {
      tableRows[i].removeAttribute("hidden");
    }
  }
});
// Filter section end
