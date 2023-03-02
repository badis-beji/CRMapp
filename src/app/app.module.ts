import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {  HttpClientModule } from '@angular/common/http';
import { ActivityUpdateComponent } from './activity-update/activity-update.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    ContactsComponent,
    ContactFormComponent,
    ActivityComponent,
    ActivityFormComponent,
    ActivityUpdateComponent,
    ContactUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
