import { ChangeDetectionStrategy, Component } from '@angular/core';
import { listData } from '../../mocks/list.mock';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  protected readonly list = listData;
  protected readonly headerClassList =
    'text-left hidden md:block font-bold mb-3 ';
}
