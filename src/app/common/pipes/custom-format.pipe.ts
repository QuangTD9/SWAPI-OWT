import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFormat'
})
export class CustomFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'unknown') {
      return 0;
    } else {
      return value;
    }
  }

}
