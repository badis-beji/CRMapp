

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../activity/activity.interface';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activityId = +this.route.snapshot.paramMap.get('id')!;

     this.http.get<any[]>('http://localhost:3000/activityData').subscribe(data => {
      this.activityData = data;
    });
        this.activityForm = this.formBuilder.group({
      Date: [null],
      activityType: [null],
      subject: [null],
      participants: [null],
      note: [null],
      documents: [null]
    });
    this.http
      .get<Activity>(`http://localhost:3000/activityData/${this.activityId}`)
      .subscribe((data) => {
        this.activityForm.patchValue(data);
      });
  }

  onSubmit(): void {
    const updatedActivity: Activity = this.activityForm.value;
    this.http
      .put(`http://localhost:3000/activityData/${this.activityId}`, updatedActivity)
      .subscribe(
        () => {
          this.router.navigateByUrl('activity');
        },
        (error) => {
          console.error('Failed to update Activity:', error);
        }
      );
  }
}