import { Component } from "@angular/core";

@Component({
  selector:'app-test',
  template:`
  <h1>Hello from test {{title}}</h1>
  `,
  styles : [
    `
    h1{
      border:solid blue 5px
    }
    `
  ]})
export class TestComponent{
   title:string = "Farid!";
}
