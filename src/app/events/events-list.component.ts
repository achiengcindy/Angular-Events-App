import { Component } from '@angular/core';


// inline html
@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
  })
  
  export class EventsListComponent {
    event = {
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
  