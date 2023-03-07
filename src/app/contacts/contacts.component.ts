import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './contacts.interface';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactActivitiesComponent } from '../contact-activities/contact-activities.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  search: any;
  contacts: Contact[] = [];
  activitiesForContact: string[] = [];
  activities$!: Observable<any[]>;
  p: number = 1;
  selectedContact: Contact | null = null;
  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private modalService : NgbModal
  ) {}

  ngOnInit() {
    this.fetchContacts();
    this.fetchActivities();
  }

  fetchContacts() {
    this.contactsService.fetchContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  fetchActivities() {
    this.activities$ = this.contactsService.fetchActivities();
  }

  deleteContact(id: number) {
    this.contactsService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    });
  }
  editContact(contact: Contact) {
    this.router.navigate(['/updatec', contact.id]);
  }

  addContact() {
    this.router.navigateByUrl('form');
  }
  key: string = 'Date';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  showActivitiesWindow(contact: Contact) {
    this.selectedContact = contact;
    const modalRef = this.modalService.open(ContactActivitiesComponent);
    modalRef.componentInstance.contact = contact;
    modalRef.componentInstance.contactId = contact.id;
  }
}
