export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = { id: this.tasks.length + 1, title, completed: false };
    this.tasks.push(task);
    console.log(`Task added: "${title}"`);
  }

  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);

    if (!task) {
      console.log(`Task with id ${id} not found.`);
      return;
    }

    task.completed = true;
    console.log(`Task completed: "${task.title}"`);
  }

  listTasks() {
    if (this.tasks.length === 0) {
      console.log("No tasks in the list.");
      return;
    }

    console.log("\n--- Todo List ---");
    this.tasks.forEach((task) => {
      const status = task.completed ? "[x]" : "[ ]";
      console.log(`${task.id}. ${status} ${task.title}`);
    });
    console.log("-----------------\n");
  }
}