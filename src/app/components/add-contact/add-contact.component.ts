import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = { id: 0, fName: '', lName: '', phoneNumber: '', email: '' };

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onSave() {
    const newId = this.contactService.getContacts().length + 1;
    this.contact.id = newId;
    this.contactService.addContact(this.contact);
    this.router.navigate(['/']);
  }
}
