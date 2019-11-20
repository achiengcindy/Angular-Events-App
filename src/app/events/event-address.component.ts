import { Component, Input } from '@angular/core';
@Component({
  selector: 'event-address',
  template: `
  <span> Location: {{ address.address }}</span>
  <span> {{ address.city }} , {{ address.country }}</span>
  `

})

export class EventAddressComponent {
  @Input() address

}



