import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class App {
  name = 'Test Salt';
}

bootstrapApplication(App);
