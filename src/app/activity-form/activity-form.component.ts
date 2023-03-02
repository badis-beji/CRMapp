import { Contact } from './../contacts/contacts.interface';
import { HttpClient } from '@angular/common/http';
import { Activity } from './../activity/activity.interface';
import { Router } from '@angular/router';
import { contactsData } from './../contacts/data';
import { activityTypes } from './activityTypes';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {
  activityForm! : FormGroup;
  Activitytypes = activityTypes;
  Participants = contactsData
  contacts!: Contact[]
  participants: FormArray = this.formbuilder.array([]);

constructor(private formbuilder : FormBuilder, private router : Router, private http : HttpClient){
  this.fetchContacts()
}
ngOnInit(): void {
this.activityForm = this.formbuilder.group ({
  date: ["15/02/2023"],
    activityType: [null],
    subject: [null],
    participants: [],
    note: [null],
    documents: ["file.pdf"]
})
}
fetchContacts(): void {
  this.http.get<Contact[]>('http://localhost:3000/contactsData')
    .subscribe((data) => {
      this.contacts = data;
    });
}
onSubmit(): void {
  console.log(this.activityForm.value);
  const newActivity: Activity = this.activityForm.value;
  this.http.post<Activity>('http://localhost:3000/activityData', newActivity).subscribe(() => {
      this.router.navigateByUrl('activity');
    }, error => {
      console.error('Failed to save Activity:', error);
    });
  

}
}
