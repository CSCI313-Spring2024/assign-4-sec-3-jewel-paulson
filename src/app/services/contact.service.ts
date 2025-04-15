import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, fName: 'John', lName: 'Doe', phoneNumber: '701-000-1000', email: 'john.doe@example.com' },
    { id: 2, fName: 'Jane', lName: 'Smith', phoneNumber: '701-000-1001', email: 'jane.smith@example.com' }
  ];

  constructor() {}

  // Get all contacts
  getContacts(): Contact[] {
    return this.contacts;
  }

  // Add a new contact
  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  // Get contact by id
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  // Delete contact
  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
