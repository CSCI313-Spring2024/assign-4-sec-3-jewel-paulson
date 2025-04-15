import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactCardComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    public contactService: ContactService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  onEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  onDelete(id: number): void {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }
}
