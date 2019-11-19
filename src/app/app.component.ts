import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// inline html

@Component({
  selector: 'app-root',
  template: '<events-list></events-list>'
})

export class AppComponent {
  title = 'ng-fundamentals';
}


