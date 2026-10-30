const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const totalTasks = document.querySelector("#totalTasks");
const pendingTasks = document.querySelector("#pendingTasks");
const completedTasks = document.querySelector("#completedTasks");

if (
    !(taskForm instanceof HTMLFormElement) ||
    !(taskInput instanceof HTMLInputElement) ||
    !(taskList instanceof HTMLUListElement) ||
    !(totalTasks instanceof HTMLElement) ||
    !(pendingTasks instanceof HTMLElement) ||
    !(completedTasks instanceof HTMLElement)
) 
    


function updateTaskCounts() {
    const items = taskList.querySelectorAll(".task-item");
    const completedCount = taskList.querySelectorAll(
        ".task-item input[type='checkbox']:checked"
    ).length;

    totalTasks.textContent = String(items.length);
    pendingTasks.textContent = String(items.length - completedCount);
    completedTasks.textContent = String(completedCount);
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = taskInput.value.trim();
    if (!title) {
        return;
    }

    const item = document.createElement("li");
    item.className = "task-item";

    const label = document.createElement("label");
    label.className = "task-name";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        item.classList.toggle("completed", checkbox.checked);
        updateTaskCounts();
    });

    const name = document.createElement("span");
    name.textContent = title;
    label.append(checkbox, name);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        item.remove();
        updateTaskCounts();
    });

    item.append(label, deleteButton);
    taskList.append(item);
    taskInput.value = "";
    taskInput.focus();
    updateTaskCounts();
});

updateTaskCounts();