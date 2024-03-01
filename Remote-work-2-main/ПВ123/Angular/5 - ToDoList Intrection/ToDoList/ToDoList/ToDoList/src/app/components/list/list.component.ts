import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Guid } from 'src/app/Helpers/guid';
import { Task } from 'src/app/models/task';
import { TaskRepositoryService } from 'src/app/services/task-repository.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  //,OnChanges,DoCheck,OnDestroy {
  list: Array<Task> = [];

  removeTask(id: string): void {
    this.taskRepository.remove(id);
    this.taskRepository.save();
  }

  addTask(taskName:string):void{
      this.taskRepository.add(taskName);
      this.taskRepository.save();

    }

  constructor(public taskRepository: TaskRepositoryService) {}
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
  // ngDoCheck(): void {
  //   console.log('ngOnChanges');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  // }
  ngOnInit(): void {
    this.taskRepository.load();
  }

  // removeTask(id:string):void{
  //     this.list = this.list.filter(x=>x.id!=id);

  //   this.save();
  // }

  // clearTasks():void{
  //   this.list =[];
  //   this.save();
  // }

  // addTask(taskName:string):void{
  //   if (taskName!='') {

  //     let newTask:Task =
  //     {
  //       id:Guid.newGuid(),
  //       title:taskName
  //     };

  //     this.list.push(newTask);

  //   this.save();
  //   }

  // }
}
