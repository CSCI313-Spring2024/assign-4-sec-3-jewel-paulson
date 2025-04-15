import { Route } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

export const routes: Route[] = [
  { path: '', component: ContactListComponent },      // Home route (list of contacts)
  { path: 'add', component: AddContactComponent },    // Route for adding a contact
  { path: 'edit/:id', component: EditContactComponent }, // Route for editing a contact
];
