import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskData} from '../tasks/task.model';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary =  '';
  enteredDueDate = '';
  onCancel(){
    this.cancel.emit();
  }

  onSave() {
    this.add.emit({
      title: this.enteredTitle,
      summary : this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    this.onCancel()
  }
}
