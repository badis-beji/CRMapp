import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from './activities.service';
import { Activity } from './activity.interface';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
// export class ActivityComponent {
//   activities: Activity[] = [];
//   search : any;
//   constructor(private router : Router, private http : HttpClient) {
//     this.fetchActivities()
//   }
//   fetchActivities(): void {
//     this.http.get<Activity[]>('http://localhost:3000/activityData?_limit=100')
//       .subscribe((data) => {
//         this.activities = data;
//       });
//   }
//   addActivity(){
//      this.router.navigateByUrl("activity-form")
//    }

//   editActivity( activity: Activity) {
//     this.router.navigate(['/update', activity.id]);
//   }

//   deleteActivity(id: number) {
//     this.http.delete(`http://localhost:3000/activityData/${id}`).subscribe(() => {
//       this.activities = this.activities.filter(activity => activity.id !== id);
//     }, error => {
//       console.error('Failed to delete Activity:', error);
//     });
//   }
  
// }
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];
  search: any;

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



