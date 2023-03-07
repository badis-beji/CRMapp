import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from './activities.service';
import { Activity } from './activity.interface';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
[x: string]: any;
  activities: Activity[] = [];
  search: any;
  p :number = 1;

  constructor(private router: Router, private activityService: ActivityService) { }

  ngOnInit(): void {
    this.fetchActivities();
  }

  fetchActivities(): void {
    this.activityService.getActivities()
      .subscribe((data) => {
        this.activities = data;
      });
  }

  addActivity(): void {
    this.router.navigateByUrl('activity-form');
  }

  editActivity(activity: Activity): void {
    this.router.navigate(['/update', activity.id]);
  }

  deleteActivity(id: number): void {
    this.activityService.deleteActivity(id).subscribe(() => {
      this.activities = this.activities.filter(activity => activity.id !== id);
    }, error => {
      console.error('Failed to delete Activity:', error);
    });
  }
  
}



