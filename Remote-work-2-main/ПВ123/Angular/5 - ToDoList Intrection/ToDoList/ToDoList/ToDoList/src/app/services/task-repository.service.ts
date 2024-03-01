import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Guid } from '../Helpers/guid';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryService {
  private _tasks: Array<Task> = [];
  constructor() {}


public get tasks() : ReadonlyArray<Task> {
  return this._tasks;
}



  add(title: string) {
    let newTask: Task = {
      id: Guid.newGuid(),
      title: title,
    };

    this._tasks.push(newTask);
  }
  remove(id: string) {
    this._tasks = this._tasks.filter((x) => x.id != id);
  }

  save(): void {
    localStorage.setItem('list', JSON.stringify(this.tasks));
  }

  load(): void {
    let json = localStorage.getItem('list');
    if (json) {
      this._tasks = JSON.parse(json);
    }
  }
}
