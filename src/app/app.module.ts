import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventAddressComponent } from './events/event-address.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    EventAddressComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
