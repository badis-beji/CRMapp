// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-activities',
//   templateUrl: './contact-activities.component.html',
//   styleUrls: ['./contact-activities.component.css']
// })
// export class ContactActivitiesComponent {

// }
import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity/activity.interface';
import { ActivityService } from '../activity/activities.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-activities',
  templateUrl: './contact-activities.component.html',
  styleUrls: ['./contact-activities.component.css']
})
export class ContactActivitiesComponent implements OnInit {
  @Input() contact!: any;
  activities: Activity[] = [];
  search: any;
  contactId!: number;
  constructor(private activityService: ActivityService, private router: Router) {}

  ngOnInit(): void {
    this.getActivitiesByContactId();
    console.log(this.activities);
    
  }

  

  
  
  getActivitiesByContactId() {
    this.activityService.getContactActivities(this.contactId).subscribe(
      activities => {
        this.activities = activities;
      },
      error => {
        console.log(error);
      }
    );
  }
}
