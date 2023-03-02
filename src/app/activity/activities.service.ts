// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ActivitiesServiceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = 'http://localhost:3000/activityData?_limit=100';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl);
  }

  deleteActivity(id: number): Observable<{}> {
    const url = `http://localhost:3000/activityData/${id}`;
    return this.http.delete(url);
  }
}
