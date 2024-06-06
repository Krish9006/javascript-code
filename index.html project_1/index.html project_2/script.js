    document.addEventListener("DOMContentLoaded",()=>{
    const taskInput = document.getElementById("taskButton");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click",addTask);

    function addTask(){
     const taskText = taskInput.value.trim();


     if(taskText === "") {
     alert("Enter your task");
     return;
}
      const taskitem=document.createElement("li");
      taskitem.textContent = taskText;
      const deletebutton =document.createElement("button");
      deletebutton.textContent= "Deletes";
         

} 
});