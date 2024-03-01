import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Person';

@Pipe({
  name: 'stringSort'
})
export class StringSortPipe implements PipeTransform {

compareNames(first:Person,second:Person):number{
  if (first.fullName > second.fullName) {
    return 1;
  }else if (first.fullName < second.fullName) {
    return -1;
  }else{
    return 0;
  }
}


  transform(arr: Array<Person>): Array<Person> {
    return arr.sort(this.compareNames);
  }

}
