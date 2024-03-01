import { Pipe, PipeTransform } from '@angular/core';
import { Person } from "../Person";

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(arr: Array<any>, num:number): any {
    return arr.slice(0,num);
  }

}
