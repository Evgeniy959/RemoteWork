import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
text:string="";
@Output() added:EventEmitter<string> = new EventEmitter();

onFormSubmit(){
  this.added.emit(this.text);
  this.text = '' ;
}
}
