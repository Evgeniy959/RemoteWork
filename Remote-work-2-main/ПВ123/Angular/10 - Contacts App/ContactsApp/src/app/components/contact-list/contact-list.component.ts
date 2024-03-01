import { Component, OnInit } from '@angular/core';
import { ContactsMemoryService } from 'src/app/services/contacts-memory.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit{
  constructor(public contactService: ContactsService) {}



  ngOnInit(): void {
   //  this.contactService.get('123');
  }
}
