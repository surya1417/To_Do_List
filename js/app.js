//problem : doest not intract
//sol: add intertivty to use
var taskInput = document.getElementById("new-task");// 
var addButton = document.getElementsByTagName("button")[0];
var inclompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");

  //input (checkbox)
  var checkBox = document.createElement("input"); // checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); // text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  
  //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}




// add a new task
var addTask = function(){
    console.log("add task");


//create a new list item with the text from # new-task
var listItem = createNewTaskElement(taskInput.value);

//each ele needs to be modified and appended

inclompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
    taskInput.value = " ";



// when we add button is clicked



// create a new list item with text for # new-task
//input()check box

//label
//input text
//button.edit
//button.delete
//each elements needs to be modified and appended


}


// edit an the exixting task

var editTask = function(){
    console.log("Edit task");

    //hwen edit button is pressed
    //if the class of the parent is .editMode
    //switch to .EditMode - label to input value
    //else
    // toggle to .editMode
}
// delete an existing task

var deleteTask = function(){
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
    //when delete is pressed the item should be removed from ul. 


//mark a task as completed

var completedTask= function(){
    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    blindTaskEvents(listItem,taskInComplete);
    
}

// mark the tasks as inclomplete
 var bindTaskEvents = function(taskEventHandler){
     console.log("Bind list Item ");
     var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
  var ajaxRequest = function(){
      console.log("ajaxrequest");
  }
}
 }
// set the click handler to the addtask button
addButton.onclick = addTask;