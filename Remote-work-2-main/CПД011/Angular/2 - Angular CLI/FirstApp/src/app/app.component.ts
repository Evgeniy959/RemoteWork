import { Component } from "@angular/core";


@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'My first angular app';
  helpText:string = "Test Farid";
  isAdmin:boolean=false;
  size:number=100;
  currentColor:Color=Color.Red;
  products:Array<string> = ["banana","apple","orange"];
 counts:number=0;


 onPlusPlus():void{
this.counts++;
 }

  classes:any = {
    "red-text":this.isAdmin,
    "consolas":!this.isAdmin,
    "underline-text":this.isAdmin
  }


  styles:any = {
    "color":"red",
    "background-color":"green",
    "font-size":"300px"
  }

  onButtonClick():void{
    this.title = "Clicked!";
    this.isAdmin = !this.isAdmin;


    switch (this.currentColor) {
      case 0:
        this.currentColor = Color.Green;
        break;
      case 1:
        this.currentColor = Color.Blue;
        break;
      case 2:
        this.currentColor = Color.Red;
        break;
    
      default:
        break;
    }
  }
}


enum Color {Red,Green,Blue};
