import { Component } from '@angular/core';


// inline html
@Component({
    selector: 'events-list',
    template :`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <events-thumbnail [event]= "event1"></events-thumbnail>
    </div>
    `
  })
  
  export class EventsListComponent {
    event1 = {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2020',
      time: '10:00 am',
      price : 599.99,
      imageUrl : '/assets/images/angularconnect-sheld.png',
      location:{
        address : '1057 D1',
        city : 'London',
        country : 'England'
      }
       
    }
  }
  