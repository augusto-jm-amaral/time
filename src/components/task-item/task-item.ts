import { Component, Input, OnInit } from '@angular/core';
import { Events, AlertController, NavController } from 'ionic-angular';

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

  constructor(private taskProvider: TaskProvider,
              private events: Events,
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
      time: 0
    });
    this.taskProvider.update(this.task);
  }

  private doPause() {

    //this.elapsedTime = (new Date().getTime() - this.task.start);
    //this.task.start = 0;
    this.navCtrl.push(Pause, {task: this.task});

  }
}
