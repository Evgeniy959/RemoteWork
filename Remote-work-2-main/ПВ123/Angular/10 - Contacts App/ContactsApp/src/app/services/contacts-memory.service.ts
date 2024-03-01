import { Injectable } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsMemoryService implements ContactsService {
  public contacts: Array<Contact> = [];

  /**
   *
   */
  constructor() {
    this.contacts = fakeContacts;
  }

  getAll(): ReadonlyArray<Contact> {
    console.log('Get all');
    return this.contacts;
  }

  get(id: string): Contact | any {
    console.log('Get by id : ' + id);

    return this.contacts.find(x=>x.id == id);
  }
}

const fakeContacts: Array<Contact> = [
  {
    id: '78caea78-a38e-4158-a31e-4353c17c570d',
    name: 'Jarib',
    surname: 'Anfrey',
    email: 'janfrey0@icio.us',
    phone: '484-944-2840',
  },
  {
    id: 'dd8027e9-3821-4982-b75d-cfb890401e2a',
    name: 'Iorgos',
    surname: 'Girtin',
    email: undefined,
    phone: '855-762-4601',
  },
  {
    id: '39a91177-20ad-488f-b754-bcdcf5eaff5d',
    name: 'Gayla',
    surname: 'Colum',
    email: undefined,
    phone: '349-875-5598',
  },
  {
    id: '6e2a1277-4881-4b93-9aad-0d4bfb55545a',
    name: 'Kirsteni',
    surname: 'Beedle',
    email: 'kbeedle3@weibo.com',
    phone: '702-664-5702',
  },
  {
    id: '7523abc0-d7ee-46cf-9108-755732db031f',
    name: 'Maxwell',
    surname: undefined,
    email: 'mchavrin4@sina.com.cn',
    phone: '896-473-0110',
  },
  {
    id: '30b46a95-ee60-48f8-946e-801d448af739',
    name: 'Patric',
    surname: 'Jachtym',
    email: undefined,
    phone: '706-562-9811',
  },
  {
    id: '70d8992d-40fc-4134-89d1-2646d7a7f208',
    name: 'Berkley',
    surname: 'Guichard',
    email: undefined,
    phone: '614-664-7231',
  },
  {
    id: '87df4d4c-3a83-409a-bbb0-42345718b679',
    name: 'Cilka',
    surname: 'Lampart',
    email: 'clampart7@indiatimes.com',
    phone: '919-339-1825',
  },
  {
    id: 'f4d05c7d-e172-4714-bda3-e437518a9865',
    name: 'Hayward',
    surname: undefined,
    email: undefined,
    phone: '695-807-2519',
  },
  {
    id: 'ddc8ec52-4a8f-4bb2-b2ee-53798210ba25',
    name: 'Mei',
    surname: 'Barringer',
    email: undefined,
    phone: '137-434-1974',
  },
];
