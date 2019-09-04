import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, key: string): any[] {
    if (filterString.length === 0) {
      return value;
    }

    return value.filter(item => item[key] === filterString);
  }
}
