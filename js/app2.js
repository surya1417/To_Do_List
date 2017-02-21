// Problem:
// Solution:

var taskInput = document.getElementById("new-task");//
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");//
var completedTasksHolder = document.getElementById("completed-tasks");//

//New Task List Item
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

// Add a new task
var addTask = function(){
    console.log("Add task...");
    // create a new list item with the text from # new-task
    var listItem = createNewTaskElement(taskInput.value);
    // each elements need to be modified and appended
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted)
    taskInput.value = "";
}

// Edit an existing task
var editTask = function(){
    var listItem= this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var containsClass =listItem.classList.contains("editMode");
    if(containsClass){
        label.innerText = editInput.value;
    }else{
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
    
}
 //when edit button is pressed
 // if the class of the parent is .editMode
 // Switch to .EditMode - label to inout value
 // else
 //
 // toggle to .editMode


// Delete an existing task
var deleteTask = function(){
    var listItem= this.parentNode;
    var ul =listItem.parentNode;
    ul.removeChild(listItem);
    

}
// Mark a task as complete
var taskCompleted = function(){
    var listItem= this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskInComplete);
   
    // Append the task list tiem to the #completed-tasks
}

var taskInComplete = function(){
   var listItem= this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

     // Append the task list tiem to the #incomplete-tasks
}

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
}


// Mark the taks as incomplete

// set the click handler to the the addTask button
addButton.onclick = addTask;