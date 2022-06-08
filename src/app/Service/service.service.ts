import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Model/person';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url: string = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) {}

  getPersons() {
    return this.http.get<Person[]>(this.Url);
  }

  createPerson(person: Person) {
    return this.http.post<Person>(this.Url, person);
  }

  getPersonId(id: number) {
    return this.http.get<Person>(this.Url + '/' + id);
  }

  updatePerson(person: Person) {
    return this.http.put<Person>(this.Url + '/' + person.id, person);
  }

  deletePerson(persona: Person) {
    return this.http.delete<Person>(this.Url + '/' + persona.id);
  }
}
