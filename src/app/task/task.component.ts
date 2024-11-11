import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TasksComponent} from './tasks/tasks.component';
import {NewTasksComponent} from './new-tasks/new-tasks.component';
import {NewTaskData} from './tasks/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    TasksComponent,
    NewTasksComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) name! : string;
  @Input({required:true}) userId! : string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Dominar Angular',
      summary:
        'Aprender Angular para poder desenvolver aplicações web',
      dueDate: '31/11/2024',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Construir um protótipo do site da loja online',
      summary: 'Construir um protótipo do site da loja online para a loja de roupas',
      dueDate: '15/12/2024',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar e descrever um modelo de problema',
      summary:
        'Preparar e descrever um modelo de problema para a disciplina de matemática',
      dueDate: '30/1/2025',
    },
  ];

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
  this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData : NewTaskData) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.isAddingTask = false;
  }
}
