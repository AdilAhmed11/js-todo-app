    var json_data = [];

    var myList = document.getElementById("todo-list");
 
    json_data.forEach(element => {
       newTodo(element.title);
    });
    registerEventListeners();
    function registerEventListeners() {
      var closeButtons = document.getElementsByClassName("delete"); //Grabs every delete button
      for (var i = 0; i < closeButtons.length; i++) { //Loops through every delete button
          closeButtons[i].addEventListener('click', deleteTodo, false); //Adds event listener to each button, and the deleteTodo function
      }
    }
    function deleteTodo() {
        var li = this.parentElement; //Grabs the parent list element (the text and delete button are children)
        myList.removeChild(li);
      }
    function newTodo(todoTitle) {
       if (!todoTitle) { //If not empty then do this
        todoTitle = document.getElementById("todoTitle").value;
       }
       var listItem = document.createElement("li");
       listItem.appendChild(
         document.createTextNode(todoTitle) 
       );
       var deleteLink = document.createElement("a");
       deleteLink.href = "#";
       deleteLink.className = "btn btn-sm btn-danger m-1 delete";
       deleteLink.appendChild(
         document.createTextNode("Delete") 
       );
       listItem.appendChild(deleteLink);
       myList.appendChild(listItem);
       registerEventListeners();
     }