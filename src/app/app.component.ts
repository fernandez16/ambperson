import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ambperson';

  constructor(private router: Router) {}

  list(): any {
    this.router.navigate(['list']);
  }

  new(): any {
    this.router.navigate(['add']);
  }
}
