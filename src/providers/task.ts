import { Injectable, OnInit } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Task } from '../interfaces/task';

@Injectable()
export class TaskProvider implements OnInit {

  private tasks: Array<Task>;

  constructor(private storage: Storage,
              private events: Events) {
    
  }

  ngOnInit() {
      
  }

  public update(task) {
    this.getList()
      .then((tasks) => {

        for (var i = 0; i < tasks.length; i++) {
          
          if(tasks[i].name == task.name)
            tasks[i] = task
        }


        this.storage.set('tasks', tasks).then((res) => {
          this.events.publish('task:update');
        });
      });
  }

  public exists(tasks: Array<Task>, task: Task): boolean{

    tasks.forEach(value => {
      
      if(value.name == task.name)
        return true;

    });

    return false;
  }

  public save(task: Task): Promise<boolean> {
    
    return new Promise((resolve, reject) => {

      this.storage.ready().then(() => {

        this.storage.get('tasks').then((val) => {
          if(val){

            val.push(task);
            val.sort(function(a,b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            })
            this.storage.set('tasks', val);
            this.events.publish('new:create');
          }else{
            val = []
            val.push(task);
            this.storage.set('tasks', val);
            this.events.publish('new:create');
          }
        })
      });
    });
  }

  public getList(): Promise<Array<Task>>{
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
      time: 0,
      dedications: [],
      color: {
        name: 'Teal',
        hex: '#009688',
        class: ''
      }
    };
  }

}
