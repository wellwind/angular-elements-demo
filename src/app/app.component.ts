import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter [counter]="10" (counterChange)="onCounterChange($event)"></app-counter>',
  styles: []
})
export class AppComponent {

  onCounterChange(val) {
    console.log(val);
  }
}
