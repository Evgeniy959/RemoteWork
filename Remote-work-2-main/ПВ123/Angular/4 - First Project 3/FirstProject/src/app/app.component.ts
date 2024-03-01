import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Farid!!!';
  helpText: string = 'This is my first project';
  isAdmin: boolean = true;
  size: number = 50;
  currentColor:Color = Color.Red;
  Color = Color;
  products:Array<string> = ["banana","apple","orange"];

  onButtonClick(): void {
    this.name = 'Clicked!!!';
  }

  onNumberClick(num:number){
    console.log(num);
    console.log(this.products[num]);


  }

  onButtonChangeColor():void{
      // this.currentColor = ++this.currentColor;
      // if (this.currentColor==Color.Max) {
      //   this.currentColor = Color.Red;
      // }
      // this.name = (this.currentColor as number).toString();

      // if (this.currentColor == Color.Red) {
      //   this.currentColor = Color.Green;
      //   return;
      // }

      // if (this.currentColor == Color.Blue) {
      //   this.currentColor = Color.Red;
      //   return;
      // }

      // if (this.currentColor == Color.Green) {
      //   this.currentColor = Color.Blue;
      //   return;
      // }


      if (this.currentColor == Color.Red) {
        this.currentColor = Color.Blue;
      }else  if (this.currentColor == Color.Blue) {
        this.currentColor = Color.Green;
      }else  if (this.currentColor == Color.Green) {
        this.currentColor = Color.Max;
      }else{
        this.currentColor = Color.Red;
      }


  }

  onButtonChangeStatus(){
    this.isAdmin = !this.isAdmin;
  }
}


enum Color { Red , Green , Blue,Max}
