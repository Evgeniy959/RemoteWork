import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

contact?:Contact ;

  constructor(public contactService:ContactsService,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    console.log('Contact details');
   // this.route.paramMap.subscribe(x=>console.log(x));
   let id:any = this.route.snapshot.paramMap.get('id');
   console.log(id);
   this.contact = this.contactService.get(id);



  }


}
