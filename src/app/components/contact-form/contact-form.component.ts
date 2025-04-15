import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() contact: Contact | null = null;
  @Output() save = new EventEmitter<Contact>();

  contactForm = new FormGroup({
   fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required),
   email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {
    if (this.contact) this.contactForm.patchValue(this.contact);
  }
  
}
