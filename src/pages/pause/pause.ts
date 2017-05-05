import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Task } from '../../interfaces/task'

@Component({
  selector: 'page-pause',
  templateUrl: 'pause.html',
})
export class Pause implements OnInit{
  
  task: Task;

  constructor(private navCtrl: NavController,
              private navParams: NavParams) { }

  ngOnInit() {
    let date = new Date();
    this.task = this.navParams.get('task');

    this.task.dedications[0].date = date.toISOString();
    this.task.dedications[0].finish = date.getTime();
    this.task.dedications[0].time = new Date(this.task.dedications[0].finish - this.task.dedications[0].start).toISOString();
    this.task.time = new Date(new Date(this.task.time).getTime() + new Date(this.task.dedications[0].time).getTime()).toISOString();

  }
}
