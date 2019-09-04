import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any[], key: string): any {
    return value.sort((prevItem, nextItem) => {
      if (prevItem[key] < nextItem[key]) {
        return -1;
      }

      if (prevItem[key] > nextItem[key]) {
        return 1;
      }

      return 0;
    });
  }
}
