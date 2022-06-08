import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  person = new Person();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.edit();
  }

  edit(): void {
    let id = localStorage.getItem('id');
    this.service.getPersonId(+id).subscribe((data) => {
      this.person = data;
    });
  }

  update(person: Person) {
    this.service.updatePerson(person).subscribe((data) => {
      this.person = data;
      alert('Successfull update');
      this.router.navigate['list'];
    });
  }
}
