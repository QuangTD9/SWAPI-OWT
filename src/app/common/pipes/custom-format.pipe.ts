import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'customFormat'
})
export class CustomFormatPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: any, ...args: any[]): any {

    if (value === 'unknown') {
      return '';
    } else {
      return this.currencyPipe.transform(value);
    }
  }
}
