import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractDate'
})
export class ExtractDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('T')[0];
  }

}
