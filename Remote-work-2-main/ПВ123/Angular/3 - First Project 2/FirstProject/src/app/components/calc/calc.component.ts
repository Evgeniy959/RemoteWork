import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent {
  text: string = 'Empty';
  result: number = 0;
  num1: number = 0;
  num2: number = 0;
  operation: string = '+';

  onCalcl(): void {
    switch (this.operation) {
      case '+': {
        this.result = this.num1 + this.num2;
        break;
      }
      case '-': {
        this.result = this.num1 - this.num2;
        break;
      }
      case '*': {
        this.result = this.num1 * this.num2;
        break;
      }
      case '/': {
        this.result = this.num1 / this.num2;
        break;
      }
    }
  }

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
