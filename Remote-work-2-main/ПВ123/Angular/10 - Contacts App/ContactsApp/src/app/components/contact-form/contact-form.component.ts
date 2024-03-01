import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  model: Contact = {
    name:'',
    phone:'',
    id:''
  };


  onSubmit(){
console.log(this.model);

  }
}
