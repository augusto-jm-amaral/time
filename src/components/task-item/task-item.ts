import { Component, Input } from '@angular/core';

import { Task } from '../../interfaces/task';

@Component({
  selector: 'task-item',
  templateUrl: 'task-item.html'
})
export class TaskItem {

  @Input('task')
  task: Task;

}
