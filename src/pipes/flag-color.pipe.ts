import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../models/list-item.interface';

@Pipe({
  name: 'flagColor',
  standalone: true,
})
export class FlagColorPipe implements PipeTransform {
  transform(value: ListItem['priority']): string {
    switch (value) {
      case 'HIGH':
        return 'text-red-500';
      case 'NORMAL':
        return 'text-yellow-500';
      case 'MEDIUM':
        return 'text-stone-600';
      case 'LOW':
        return 'text-green-500';
    }
  }
}
