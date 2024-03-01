import { Contact } from "../models/contact";

export abstract class ContactsService {

  contacts?:ReadonlyArray<Contact>;

  abstract get(id:string):Contact;
  abstract getAll():ReadonlyArray<Contact>;

  //get
  //getAll
  //add
  //remove
  //update
}
