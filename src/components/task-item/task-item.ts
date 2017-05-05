import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { Task } from '../../interfaces/task';
import { TaskProvider } from '../../providers/task';
import { Pause } from '../../pages/pause/pause'

@Component({
  selector: 'task-item',
  templateUrl: 'task-item.html'
})
export class TaskItem implements OnInit {

  @Input('task')
  task: Task;

  @Input('tasks')
  tasks: Array<Task>;

  constructor(private taskProvider: TaskProvider,
              private alertCtrl: AlertController,
              private navCtrl: NavController ){ }
  
  public ngOnInit(){

  }

  private doStart() {

    let date = new Date();

    this.task.dedications.unshift({
      date: date,
      start: date.getTime(),
      finish: 0,
      time: new Date(0).toISOString()
    });
    this.taskProvider.save(this.tasks);
  }

  private doPause() {
    this.navCtrl.push(Pause, {task: this.task});
  }
}
