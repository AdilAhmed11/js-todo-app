/*var json_data = [
       {
         "title": "sample todo item",
         "completed": false
       }
     ];*/
var json_data = JSON.parse(localStorage.getItem("json_data"));
var myList = document.getElementById("todo-list");

if (json_data) {
    json_data.forEach((element) => {
        newTodo(element.title);
    });
}
registerEventListeners();
function registerEventListeners() {
    var closeButtons = document.getElementsByClassName("delete"); //Grabs every delete button
    for (var i = 0; i < closeButtons.length; i++) {
        //Loops through every delete button
        closeButtons[i].addEventListener("click", deleteTodo, false); //Adds event listener to each button, and the deleteTodo function
    }
}
function deleteTodo() {
    var li = this.parentElement; //Grabs the parent list element (the text and delete button are children)
    myList.removeChild(li);
}
function newTodo(todoTitle) {
    if (!todoTitle) {
        //If not empty then do this
        todoTitle = document.getElementById("todoTitle").value;
        storeTodoLocal(todoTitle);
    }
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todoTitle));
    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.className = "btn btn-sm btn-danger m-1 delete";
    deleteLink.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(deleteLink);
    myList.appendChild(listItem);
    registerEventListeners();
    console.log("new todo added");
    console.log(listItem);
}

function storeTodoLocal(todoTitle) {
    //This function takes todoTitle as an argument, which represents the text of the new to-do item
    var json_temp = JSON.parse(localStorage.getItem("json_data")); //This retrieves the existing list of to-do items and parses it into JSON format (converts the JSON string into a JS array)

    if (!json_temp) {
        json_temp = [];
    }

    // add new todo object to JSON
    json_temp.push({
        title: todoTitle,
        completed: false,
    });

    // log updated JSON to console
    console.log(json_temp);

    // stringify updated JSON and store back in localStorage
    localStorage.setItem("json_data", JSON.stringify(json_temp));
}
