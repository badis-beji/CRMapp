import { HttpClient } from '@angular/common/http';
import { Contact } from './contacts.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  search: any;
  contacts: Contact[] = [];
  activities!:any[]
  
constructor(private http : HttpClient,private router: Router){
  this.fetchContacts();
  this.fetchActivities();
}
fetchContacts(): void {
  this.http.get<Contact[]>('http://localhost:3000/contactsData')
    .subscribe((data) => {
      this.contacts = data;
    });
}

fetchActivities(): void {
  this.http.get<any[]>('  http://localhost:3000/activityData')
    .subscribe((data) => {
      this.activities = data;
      console.log(this.activities);
    });
}
getActivitiesForParticipant(participantName: string): string[] {
     console.log(this.activities)

  return this.activities
    .filter(activity => activity.participants.includes(participantName))
    .map(activity => activity.activityType);
}

AddContact(): void {
this.router.navigateByUrl('form');
}
deleteActivity(id: number) {
  this.http.delete(`http://localhost:3000/contactsData/${id}`).subscribe(() => {
    this.contacts = this.contacts.filter(contact=>contact.id !==id);
  }, error => {
    console.error('Failed to delete Activity:', error);
  });
}
editContact(contact : Contact){
  
    this.router.navigate(['/updatec', contact.id]);
  
}

}
