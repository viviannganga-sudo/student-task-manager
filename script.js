// Get saved tasks from the browser.
function getTasks() {
    try {
        const savedTasks = JSON.parse(
            localStorage.getItem("studyTrackTasks") || "[]"
        );

        return Array.isArray(savedTasks) ? savedTasks : [];
    } catch {
        return [];
    }
}

// Save tasks in the browser.
function saveTasks(tasks) {
    localStorage.setItem(
        "studyTrackTasks",
        JSON.stringify(tasks)
    );
}

// Update the dashboard statistics.
function updateDashboard() {
    const totalElement = document.getElementById("totalTasks");
    const pendingElement = document.getElementById("pendingTasks");
    const completedElement = document.getElementById("completedTasks");

    // These elements exist on the dashboard only.
    if (!totalElement || !pendingElement || !completedElement) {
        return;
    }

    const tasks = getTasks();

    totalElement.textContent = tasks.length;

    pendingElement.textContent = tasks.filter(
        task => !task.completed
    ).length;

    completedElement.textContent = tasks.filter(
        task => task.completed
    ).length;
}

// Display tasks on the Tasks page.
function displayTasks() {
    const taskList = document.getElementById("taskList");
    const emptyMessage = document.getElementById("emptyMessage");

    // The task list exists on the Tasks page only.
    if (!taskList || !emptyMessage) {
        return;
    }

    const tasks = getTasks();

    taskList.replaceChildren();

    emptyMessage.hidden = tasks.length > 0;

    tasks.forEach(task => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute(
            "aria-label",
            `Mark ${task.name} as completed`
        );

        checkbox.addEventListener("change", () => {
            const updatedTasks = getTasks();

            const currentTask = updatedTasks.find(
                item => item.id === task.id
            );

            if (currentTask) {
                currentTask.completed = checkbox.checked;
                saveTasks(updatedTasks);
                displayTasks();
                updateDashboard();
            }
        });

        const taskName = document.createElement("span");
        taskName.textContent = task.name;
        taskName.className = "task-name";

        if (task.completed) {
            taskName.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", () => {
            const updatedTasks = getTasks().filter(
                item => item.id !== task.id
            );

            saveTasks(updatedTasks);
            displayTasks();
            updateDashboard();
        });

        listItem.append(checkbox, taskName, deleteButton);
        taskList.appendChild(listItem);
    });
}

// Add a new task.
const taskForm = document.getElementById("taskForm");

if (taskForm) {
    taskForm.addEventListener("submit", event => {
        event.preventDefault();

        const taskInput = document.getElementById("taskInput");
        const taskName = taskInput.value.trim();

        if (!taskName) {
            return;
        }

        const tasks = getTasks();

        tasks.push({
            id: crypto.randomUUID(),
            name: taskName,
            completed: false
        });

        saveTasks(tasks);

        taskInput.value = "";

        displayTasks();
        updateDashboard();
    });
}

// Run on whichever page is open.
displayTasks();
updateDashboard();