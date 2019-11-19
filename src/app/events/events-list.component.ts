import { Component } from '@angular/core';


// inline html
@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming  Angular Events</h1>
    <hr>
    <div class="well hoverwell thumbnail">    <h2>{{ event.name }}</h2>
    <div>Date:  {{ event.date }}</div>
    <div>Time:  {{ event.time }}</div>
    <div>Price:  \${{ event.price }}</div>
    <span> Location: {{ event.location.address }}</span>
    <span> &nbsp </span>
    <span> {{ event.location.city }} , {{ event.location.country }}</span>
    </div>.
    `
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
  