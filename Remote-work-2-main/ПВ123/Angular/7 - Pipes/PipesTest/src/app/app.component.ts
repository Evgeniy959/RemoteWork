import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PipesTest';
  peopleCount:number = 10;
  constructor(
    public http:HttpClient
  ){ }

  async ngOnInit(): Promise<void> {
     try{
      this.people = await this.http.get('assets/people.json').toPromise() as Array<Person>;
     }catch(error){ }
  }
  people:Array<Person> = [];
}

