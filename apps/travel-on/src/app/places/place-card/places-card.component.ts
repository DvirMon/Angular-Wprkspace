import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  ButtonSelectionChangedEvent,
  PlaceCardButtonComponent,
} from '../place-card-button/place-card-button.component';
import { Places } from '../places.model';
import { DateTimestampPipe } from '../../shared/pipes/date.pipe';

export interface SelectChangedEvent {
  /** The source button of the event. */
  source: PlacesCardComponent;
  /** The new `selected` value of the button. */
  selected: boolean;
}
@Component({
  selector: 'to-places-card',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    DateTimestampPipe,
    MatCardModule,
    PlaceCardButtonComponent,
  ],
  templateUrl: './places-card.component.html',
  styleUrls: ['./places-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesCardComponent {
  place = input.required<Places>();

  selected = input.required<boolean>();

  showOverlay = signal(false);

  @Output() readonly selectedChanged: EventEmitter<SelectChangedEvent> =
    new EventEmitter();

  private _createChangedEvent(
    value: ButtonSelectionChangedEvent
  ): SelectChangedEvent {
    const event: SelectChangedEvent = {
      selected: value.selected,
      source: this,
    };
    return event;
  }

  public onSelectedChanged(value: ButtonSelectionChangedEvent): void {
    const event = this._createChangedEvent(value);
    this.selectedChanged.emit(event);
  }

  onToggleOverlay() {
    this.showOverlay.update((value) => !value);
  }
}
