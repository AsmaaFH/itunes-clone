import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  standalone: true,
  pure: false
})
export class ImpurePipe implements PipeTransform {
  transform(value: number[]): string {
    if (!Array.isArray(value)) {
      return '';
    }
    console.log('ImPure Pipe ' + value);
    return value.join(', ');
  }
}
