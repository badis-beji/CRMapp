import { HttpClient } from '@angular/common/http';
import { jobTitles } from './jobtitle';
import { Router } from '@angular/router';
import { Contact } from './../contacts/contacts.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactsData } from './../contacts/data';
import { countries } from './countries';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
contactForm! : FormGroup;  
JobTitles = jobTitles;
contacts!: Contact[] ;
Countries = countries;
emailRegex! : RegExp;
phoneRegex! : RegExp;
constructor(private formBuilder : FormBuilder, private router : Router, private http : HttpClient ){
  this.fetchContacts();
}
fetchContacts(): void {
  this.http.get<Contact[]>('http://localhost:3000/contactsData')
    .subscribe((data) => {
      this.contacts = data;
    });
}

ngOnInit() : void {
  this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  this.phoneRegex = /129\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  this.contactForm = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required, Validators.pattern(this.emailRegex)],
    phone:[null, Validators.pattern(this.phoneRegex)],
    contactOwner: [null],
    jobTitle: [null],
    company: [null],
    address: [null],
    country:[null],
    zipCode:[null],
    city: [null],
    state: [null]

})
}
onSubmit(): void {
  console.log(this.contactForm.value);
  const newContact: Contact = this.contactForm.value;
  this.http.post<Contact>('http://localhost:3000/contactsdata', newContact).subscribe(() => {
      this.contacts.push(newContact);
      this.router.navigateByUrl('contacts');
    }, error => {
      console.error('Failed to save contact:', error);
    });
  

}
}