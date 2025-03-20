# js-todo-app

# What should the To-Do list app do?

1.  Add Task
    -   Users should be able to add new tasks.
2.  Display Tasks
    -   Tasks should be displayed in a list format.
3.  Mark Tasks as Completed
    -   Users should be able to mark tasks as complete or incomplete.
4.  Delete Tasks
    -   Users should be able to delete tasks.
5.  Save Tasks (Optional)
    -   Use localStorage to persist tasks even after the page reloads.
6.  Optional Extras (Once basic functionality is done)
    -   Save Tasks - Use localStorage to persist tasks even after the page reloads.
    -   Edit Tasks
    -   Filter Tasks (all, completed, pending)
    -   Drag and Drop - Reorder tasks.

# Components of the app

1.  Input Field
    -   Where users type the task they want to add.
    -   Button for adding the task
2.  Task List
    -   A container that holds all the tasks. Possibly as list items < ul > < li >
3.  Each Task
    -   The task itself will have:
        -   The task name (text).
        -   A button to mark it as complete.
        -   A button to delete the task.

# Structure

## HTML

-   An input field with an add task button.
-   A list container to display tasks.
-   Each task item will be a list item (< li >) with options to mark it complete or delete it.

## CSS

-   Use Bootstrap for simple styling.

## JavaScript

The logic will need to handle:

-   Reading input from the input field.
-   Adding tasks to the list.
-   Changing task status.
-   Deleting tasks from the list.

1. Define Types
    - Define a type for a task, e.g., Task with properties such as text (string) and completed (boolean).
2. Create Functions
    - add tasks
    - delete tasks
    - toggle completion status
    - save tasks to localStorage
3. Handle DOM Manipulation
    - Use TS to add event listeners to the buttons and input field.

# Actions

1.  HTML

-   [x] Basic structure
-   [x] Add an input field.
-   [x] Add a button to add tasks.
-   [x] Add an empty unordered list to store the li items.

2.  CSS

-   [x] Use Bootstrap for basic styling

3.  TS

### Add Task Functionality

-   [x] When button is clicked, the text from the input field should be added as a new task to the list.
-   [x] Create a new list element and APPEND it to the unordered list.

### Task Complete Functionality

-   [ ] Button press to mark as completed.
    -   [ ] When clicked, toggle a class, (e.g., completed), that changes the text style (strike-through).

### Delete Task Functionality

-   [x] Button press to delete each task.
    -   [x] When clicked, remove the task from the list

### Save to localStorage for Persistence

-   [x] localStorage to store the tasks.
    -   [x] On page load, check if any tasks are stored in localStorage, and if so, display them.
