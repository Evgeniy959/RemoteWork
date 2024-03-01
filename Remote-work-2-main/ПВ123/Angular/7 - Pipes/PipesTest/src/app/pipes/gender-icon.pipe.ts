import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderIcon'
})
export class GenderIconPipe implements PipeTransform {

  transform(value: string, ): string {
    if (value == 'female') return '🚺';
    else if(value == 'male') return '🚹';
    else return '❔';
  }

}
