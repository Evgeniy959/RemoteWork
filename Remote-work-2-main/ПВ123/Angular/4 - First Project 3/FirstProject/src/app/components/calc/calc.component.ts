import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent {
  text: string = 'Empty';
  num1: number = 0;
  num2: number = 0;
  operation: string = '+';
  operations:Array<string> =['+','-','*','/'];

 get result():number{
   switch (this.operation) {
    case '+': {
     return this.num1 + this.num2;
    }
    case '-': {
     return  this.num1 - this.num2;
    }
    case '*': {
    return  this.num1 * this.num2;
    }
    case '/': {
     return this.num1 / this.num2;
    }
  }

  return 0;
}

  // onCalcl(): void {
  //   switch (this.operation) {
  //     case '+': {
  //       this.result = this.num1 + this.num2;
  //       break;
  //     }
  //     case '-': {
  //       this.result = this.num1 - this.num2;
  //       break;
  //     }
  //     case '*': {
  //       this.result = this.num1 * this.num2;
  //       break;
  //     }
  //     case '/': {
  //       this.result = this.num1 / this.num2;
  //       break;
  //     }
  //   }
  // }

  onTextClick(): void {
    //this.text = "CLICKED!!";
    console.log(this.text);

    console.log('Click');
  }

  onKeyUp(event: any): void {
    console.log(event);
    this.text = event.target.value;
  }
}
