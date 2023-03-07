import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ActivityUpdateComponent } from './activity-update/activity-update.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"contacts" , component: ContactsComponent},
  {path: 'form' , component: ContactFormComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'activity-form', component: ActivityFormComponent},
  {path: 'update/:id', component: ActivityUpdateComponent},
  {path: 'updatec/:id', component:ContactUpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
