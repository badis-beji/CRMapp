

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../activity/activity.interface';
import { activityTypes } from '../activity-form/activityTypes';
import { Contact } from '../contacts/contacts.interface';
import { ActivityFormComponent } from '../activity-form/activity-form.component';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {
  activityForm!: FormGroup;
  activityId!: number;
  activityData!: Activity[]  
  activity!: Activity;
  Activitytypes = activityTypes;
  contacts!: Contact[]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.fetchContacts();
  }

  ngOnInit(): void {
    this.activityId = +this.route.snapshot.paramMap.get('id')!;

     this.http.get<any[]>('http://localhost:8080/activities').subscribe(data => {
      this.activityData = data;
    });
        this.activityForm = this.formBuilder.group({
      date: [null],
      type: [null],
      subject: [null],
      participants: [null],
      note: [null],
      documents: [null]
    });
    this.http
      .get<Activity>(`http://localhost:8080/activities/${this.activityId}`)
      .subscribe((data) => {
        this.activityForm.patchValue(data);
      });
  }

  onSubmit(): void {
    const updatedActivity: Activity = this.activityForm.value;
    this.http
      .put(`http://localhost:8080/activities/${this.activityId}`, updatedActivity)
      .subscribe(
        () => {
          this.router.navigateByUrl('activity');
        },
        (error) => {
          console.error('Failed to update Activity:', error);
        }
      );
  }
  fetchContacts(): void {
    this.http.get<Contact[]>('http://localhost:8080/contact')
      .subscribe((data) => {
        this.contacts = data;
      });
  }
}