import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contacts.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Activity } from '../activity/activity.interface';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  fetchContacts() {
    return this.http.get<Contact[]>(`${this.apiUrl}/contact`);
  }

  fetchActivities() {
    return this.http.get<any[]>(`${this.apiUrl}/activities`);
  }

 
  
  
  deleteContact(id: number) {
    return this.http.delete(`${this.apiUrl}/contact/${id}`);
  }
  getActivitiesForParticipant(participantName: string): Observable<string[]> {
    return this.http.get<any[]>('http://localhost:8080/activities').pipe(
      map((activities: any[]) => {
        return activities
          .filter(activity => activity.participants.includes(participantName))
          .map(activity => activity.activityType);
      })
    );
  }
  


  

}
