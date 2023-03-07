import { NumberValueAccessor } from "@angular/forms";

export interface Contact {
  id?: number;
    firstName?: string;
    lastName?: string;
    contactOwner?: Contact;
    email?: string;
    phone?: string;
    company?: string;
    jobTitle?: string;
    address?: string;
    city?: string;
    country?: string;
    state?: string;
    zipCode?: number;
  }
  