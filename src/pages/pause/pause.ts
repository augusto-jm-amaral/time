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

    this.task.dedications[0].date = date;
    this.task.dedications[0].finish = date.getTime();
    this.task.dedications[0].time = new Date(this.task.dedications[0].finish - this.task.dedications[0].start).toISOString();
    this.task.time += this.task.dedications[0].time;

  }

  getTimeFormated(time: number): string{
    let seconds = time / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
 
    return      Math.floor(hours % 24) + "<span>H</span> " + 
                Math.floor(minutes % 60) + "<span>Min</span> " + 
                Math.floor(seconds % 60) + "<span>s</span>";
  }

  getTimeFormatedDots(time: number): string{
    let seconds = time / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;

    return      Math.floor(hours % 24) + ":" + 
                Math.floor(minutes % 60) + ":" + 
                Math.floor(seconds % 60);
  }

}
