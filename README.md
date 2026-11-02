# 📚 StudyTrack — Student Task Manager

## About the Project

StudyTrack is a web application designed to help students organize their academic tasks, manage assignments, and monitor their progress.

The application has two main pages: a Dashboard and a My Tasks page. The Dashboard displays task statistics, while the My Tasks page allows users to add, view, complete, and delete tasks.

## Features

- **Dashboard:** View a summary of academic tasks.
- **Task Management:** Add and view tasks.
- **Task Completion:** Mark tasks as completed using checkboxes.
- **Task Deletion:** Remove tasks that are no longer needed.
- **Task Statistics:** View total, pending, and completed tasks.
- **Data Persistence:** Save tasks in the browser using localStorage.
- **Navigation:** Move between the Dashboard and My Tasks pages.
- **Responsive Design:** Adapt the layout to different screen sizes.

## Technologies Used

- HTML5 — Structures the web pages.
- CSS3 — Styles the application and provides responsive layouts.
- JavaScript — Adds interactivity and manages task data.
- Browser localStorage — Stores tasks locally in the browser.
- Visual Studio Code — Used for development.

## Project Structure

```text
student-task-manager/
│
├── index.html
├── tasks.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

### Prerequisites

Before running the application, make sure you have:

- A web browser, such as Chrome or Firefox.
- Visual Studio Code.
- The Live Server extension for VS Code (recommended).

### Installation

1. Clone the repository or download the project files.
2. Open the project folder in Visual Studio Code.
3. Ensure all five project files are in the same folder.
4. Open `index.html` using Live Server.
5. Navigate between the Dashboard and My Tasks pages.

## How to Use

1. Open the Dashboard.
2. Click **My Tasks** to access the task management page.
3. Enter an assignment or activity in the input field.
4. Click **Add Task** to save the task.
5. Use the checkbox to mark a task as completed.
6. Click **Delete** to remove a task.
7. Return to the Dashboard to view updated task statistics.

## Data Storage

StudyTrack uses browser localStorage to save tasks.

Tasks remain available after refreshing the page or navigating between the two pages in the same browser and origin.

Because the application uses local browser storage, tasks are not automatically synchronized across different devices or browsers.

## Future Improvements

Planned features include:

- Adding assignment deadlines.
- Introducing task priority levels.
- Adding search and filtering.
- Creating a calendar view.
- Adding user registration and login.
- Synchronizing tasks across devices.

## Learning Objectives

This project helps demonstrate practical skills in:

- HTML page structure.
- CSS styling and responsive design.
- JavaScript functions and event handling.
- DOM manipulation.
- Browser localStorage.
- Multi-page website navigation.
- Basic Git and GitHub workflows.

## Author

Created as a student software development project.

## License

This project is intended for educational and learning purposes.