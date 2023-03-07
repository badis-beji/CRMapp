
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl);
  }

  deleteActivity(id: number): Observable<{}> {
    const url = `http://localhost:8080/activities/${id}`;
    return this.http.delete(url);
  }
  
  getContactActivities(id : number) : Observable<Activity[]>{
    // return this.http.get<Activity[]>(`http://localhost:8080/by-contact/${id}`)
    return this.http.get<Activity[]>(`http://localhost:8080/by-contact?contactId=${id}`);
  }
}
