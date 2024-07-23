import {
  DatePipe,
  NgClass,
  NgTemplateOutlet,
  TitleCasePipe,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FlagColorPipe } from '../../pipes/flag-color.pipe';
import { StatusColorPipe } from '../../pipes/status-color.pipe';
import { ListItem } from '../../models/list-item.interface';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    DatePipe,
    TitleCasePipe,
    NgClass,
    FlagColorPipe,
    StatusColorPipe,
    NgTemplateOutlet,
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() item!: ListItem;
  @Input() isHidden = false;

  protected isNestedListHidden = true;

  toggleNestedList(): void {
    this.isNestedListHidden = !this.isNestedListHidden;
  }
}
