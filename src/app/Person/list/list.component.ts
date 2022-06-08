import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  persons: Person[] | undefined;

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getPersons().subscribe((data) => (this.persons = data));
  }

  edit(person: Person): void {
    localStorage.setItem('id', person.id.toString());
    this.router.navigate(['edit']);
  }

  delete(person: Person): void {
    this.service
      .deletePerson(person)
      .subscribe(
        (data) => (this.persons = this.persons.filter((p) => p !== person))
      );
      alert("Person deleted")
  }
}
