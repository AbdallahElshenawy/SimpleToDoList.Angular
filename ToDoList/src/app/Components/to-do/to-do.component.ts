import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';
  errorMessage: string = '';
  addTask() {
    if (!this.newTask.trim()) {
      this.errorMessage = 'Task name cannot be empty!';
      return;
    }
    this.tasks.push({ name: this.newTask, completed: false });
    this.newTask = '';
    this.errorMessage = '';
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  editTask(index: number) {
    const updatedTask = prompt('Edit Task', this.tasks[index].name);
    if (updatedTask !== null && updatedTask.trim() !== '') {
      this.tasks[index].name = updatedTask.trim();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
