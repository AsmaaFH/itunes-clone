import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true,
  pure: true,
})
export class PurePipe implements PipeTransform {
  transform(value: number[]): string {
    if (!Array.isArray(value)) {
      return '';
    }
    console.log('Pure Pipe ' + value);
    return value.join(', ');
  }
}
