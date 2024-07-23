import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../models/list-item.interface';

@Pipe({
  name: 'statusColor',
  standalone: true,
})
export class StatusColorPipe implements PipeTransform {
  transform(value: ListItem['status']): string {
    switch (value) {
      case 'TO_DO':
        return 'before:bg-red-500';
      case 'IN_PROGRESS':
        return 'before:bg-stone-500';
      case 'DONE':
        return 'before:bg-green-500';
    }
  }
}
