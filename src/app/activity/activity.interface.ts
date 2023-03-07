import { Contact } from "../contacts/contacts.interface";

export interface Activity {
    id:number;
    Date: Date;
    type: string;
    participants?: Contact[];
    subject: string;
    note: string;
    document: string[];
  }