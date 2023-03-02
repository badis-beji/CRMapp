export interface Activity {
    id:number;
    date: Date;
    activityType: string;
    participants: string[];
    subject: string;
    note: string;
    documents: string[];
  }