document.getElementById('addTaskBtn').addEventListener('click', function() {
     const taskInput = document.getElementById('taskInput');
     const taskText = taskInput.value.trim();
     if (taskText) {
         addTask(taskText);
         taskInput.value = '';
     }
 });
 
 function addTask(taskText) {
     const taskList = document.getElementById('taskList');
     const li = document.createElement('li');
     li.textContent = taskText;
     const completeBtn = document.createElement('button');
     completeBtn.textContent = 'Complete';
     completeBtn.addEventListener('click', function() {
         completeTask(li);
     });
     li.appendChild(completeBtn);
     taskList.appendChild(li);
 }
 
 function completeTask(taskItem) {
     taskItem.classList.add('completed');
     const completedList = document.getElementById('completedList');
     completedList.appendChild(taskItem);
     taskItem.removeChild(taskItem.querySelector('button'));
 }
 
 document.getElementById('clearBtn').addEventListener('click', function() {
     clearscreen();
 });
 function clearscreen(){
     const taskList = document.getElementById('taskList');
     const completedList = document.getElementById('completedList');
     taskList.innerHTML = '';
     completedList.innerHTML = '';
 }

 document.getElementById('clearTask').addEventListener('click', function() {
     cleartask();
 });
 function cleartask(){
     const taskList = document.getElementById('taskList');
     taskList.innerHTML = '';
 }
 
 document.getElementById('clearlist').addEventListener('click', function() {
     clearComList();
 });
 function clearComList(){
     const completedList = document.getElementById('completedList');
     completedList.innerHTML = '';
 }