import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

// Ajouter des tâches
myTodoList.addTask("Learn JavaScript modules");
myTodoList.addTask("Do the daily challenge");
myTodoList.addTask("Go to the gym");
myTodoList.addTask("Read a book");

// Lister toutes les tâches
myTodoList.listTasks();

// Marquer des tâches comme terminées
myTodoList.completeTask(1);
myTodoList.completeTask(3);
myTodoList.completeTask(10); 

// Lister à nouveau
myTodoList.listTasks();