import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import {
  PlacesCardComponent,
  SelectChangedEvent,
} from '../place-card/places-card.component';
import { Places } from '../places.model';
import { FavoriteSelection } from '../../store/features/with-favorites.feature';

export interface SelectionListChange {
  source: PlacesListComponent;
  currentSelection: FavoriteSelection;
}

@Component({
  selector: 'to-places-list',
  standalone: true,
  imports: [CommonModule, PlacesCardComponent],
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class PlacesListComponent {
  
  places = input.required<Places[]>();
  selection = input.required<Record<string, boolean>>();

  selectionChanged = output<SelectionListChange>()

  public onSelectedChanged(event: SelectChangedEvent): void {
    const { source, selected } = event;
    const { place } = source;

    this._emitChangeEvent({ placeId: place().id, selected } as FavoriteSelection);
  }
  
  _emitChangeEvent(currentSelection: FavoriteSelection) {
    const event = { source: this, currentSelection } as SelectionListChange;
    this.selectionChanged.emit(event);
  }
}
