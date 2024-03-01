import { Component } from '@angular/core';
import { Guid } from '../helpers/guid';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  list: Array<Task> = [];
  text:string = '';


  constructor(){
        this.load();
  }

  removeTask(id:string):void{
      this.list = this.list.filter(x=>x.id!=id);

    this.save();
  }

  clearTasks():void{
    this.list =[];
    this.save();
  }


  save():void{
    localStorage.setItem("list",JSON.stringify(this.list));
  }

  load():void{
      let json = localStorage.getItem("list");
      if (json) {
        this.list = JSON.parse(json);
      }
  }

  addTask():void{
    if (this.text!='') {
      console.log("Good add");

      let newTask:Task =
      {
        id:Guid.newGuid(),
        title:this.text
      };

      this.list.push(newTask);
      this.text ='' ;

    this.save();
    }

  }
}


