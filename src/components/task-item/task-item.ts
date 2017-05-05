import { Component, Input } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { Task } from '../../interfaces/task';
import { TaskPage } from '../../pages/task/task'
import { TaskProvider } from '../../providers/task';
import { Pause } from '../../pages/pause/pause'


@Component({
  selector: 'task-item',
  templateUrl: 'task-item.html'
})
export class TaskItem {

  @Input('task')
  task: Task;

  @Input('tasks')
  tasks: Array<Task>;

  constructor(private taskProvider: TaskProvider,
              private alertCtrl: AlertController,
              private navCtrl: NavController ){ }

  public doStart($event) {

    $event.stopPropagation();

    let date = new Date();

    this.task.dedications.unshift({
      date: date.toISOString(),
      start: date.getTime(),
      finish: 0,
      time: new Date(0).toISOString()
    });
    this.taskProvider.save(this.tasks);
  }

  public doPause($event) {
    $event.stopPropagation();

    this.navCtrl.push(Pause, {task: this.task});
  }

  public doOpen() {
    this.navCtrl.push(TaskPage, { task: this.task });

  }
}
