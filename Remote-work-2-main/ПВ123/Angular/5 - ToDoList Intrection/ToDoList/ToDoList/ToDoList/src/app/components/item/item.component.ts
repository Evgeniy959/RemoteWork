import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Task = { title: '', id: '' };
  @Output() removed:EventEmitter<Task> = new EventEmitter();

  onRemoveTask(): void {
    this.removed.emit(this.item);
    console.log(this.item.id);
  }
}
