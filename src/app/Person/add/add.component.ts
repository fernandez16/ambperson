import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/person';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  modelPerson = new Person();

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  save(person: Person) {
    this.service.createPerson(person).subscribe((data) => {
      alert('added successfully');
      this.router.navigate([]);
    });
  }
}
