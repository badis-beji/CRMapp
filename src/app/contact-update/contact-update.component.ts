import { jobTitles } from './../contact-form/jobtitle';
import { Contact } from './../contacts/contacts.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent {
  contactForm!: FormGroup;
  contactId!: number;
  contactData!: Contact[]  
  contact!: Contact;
  contacts!: Contact[]
  JobTitles=jobTitles;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.fetchContacts()
  }
  fetchContacts(): void {
    this.http.get<Contact[]>('http://localhost:8080/contact')
      .subscribe((data) => {
        this.contacts = data;
      });
  }
  ngOnInit(): void {
    this.contactId = +this.route.snapshot.paramMap.get('id')!;

     this.http.get<any[]>('http://localhost:8080/contact').subscribe(data => {
      this.contactData = data;
    });
        this.contactForm = this.formBuilder.group({
          firstName: [null ],
          lastName: [null],
          email: [null],
          phone:[null],
          contactOwner: [null],
          jobTitle: [null],
          company: [null],
          address: [null],
          country:[null],
          zipCode:[null],
          city: [null],
          state: [null]
      
    });
    this.http
      .get<Contact>(`http://localhost:8080/contact/${this.contactId}`)
      .subscribe((data) => {
        this.contactForm.patchValue(data);
      });
  }

  onSubmit(): void {
    const updatedContact: Contact = this.contactForm.value;
    this.http
      .put(`http://localhost:8080/contact/${this.contactId}`, updatedContact)
      .subscribe(
        () => {
          this.router.navigateByUrl('contacts');
        },
        (error) => {
          console.error('Failed to update Activity:', error);
        }
      );
  }
}

