import { Component } from '@angular/core';
import { TOPICS } from './topics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = TOPICS;
}
