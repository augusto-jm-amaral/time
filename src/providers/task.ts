import { Injectable, OnInit } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Task } from '../interfaces/task';

@Injectable()
export class TaskProvider implements OnInit {

  constructor(private storage: Storage,
              private events: Events) { }
  ngOnInit() {
      
  }

  public exists(tasks: Array<Task>, task: Task): boolean{

    tasks.forEach(value => {
      
      if(value.name == task.name)
        return true;

    });

    return false;
  }

  public save(tasks: Array<Task>): Promise<boolean> {
    
    return new Promise((resolve, reject) => {

      this.storage.ready().then(() => this.storage.set('tasks', tasks));
      
    });
  }

  public get(): Promise<Array<Task>>{
    let self = this;

    return new Promise((resolve, reject)=> {
        self.storage.ready().then(() => {
          self.storage.get('tasks').then((val) => {
            resolve(val || []);  
          });
        });
      } 
    );
  }

  public getNewTask():Task {
    return {
      name: '',
      description: '',
      time: new Date(0).toISOString(),
      dedications: [],
      color: {
        name: 'Teal',
        hex: '#009688',
        class: ''
      }
    };
  }

}
