import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Movie{
  Poster:string;
  Title:string;
  Type:string;
  Year:string;
  imdbID:string;
}

interface MovieResponse{
  Response:string;
  Search:Array<Movie>;
  totalResults:string;
}


@Component({
  selector: 'app-root',
  template: `
  <form (submit)="onButtoClick()">
  <input name="xxx" type="text" [(ngModel)]="searchTitle">
  <button type="submit">Click</button>
  </form> `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Movies';
  searchTitle:string='';

  constructor(public http: HttpClient) {}

 async onButtoClick() {
    try{
      console.log('Good');
      console.log(this.searchTitle);

    let result:MovieResponse | undefined = await this.http.get<MovieResponse>(`https://omdbapi.com/?s=${this.searchTitle}&apikey=5b9b7798`).toPromise();
    console.log(result);
    }catch(error){
console.error(error);

    }

  }
}
