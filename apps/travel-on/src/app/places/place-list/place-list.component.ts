import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import {
  SelectChangedEvent,
  PlacesCardComponent,
} from '../place-card/places-card.component';
import { Places } from '../../store/places/places.model';

type PlaceSelection = { placeId: string; selected: boolean };

export interface SelectionListChange {
  source: PlacesListComponent;
  currentSelection: PlaceSelection;
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

  @Output() readonly selectionChanged: EventEmitter<SelectionListChange> =
    new EventEmitter<SelectionListChange>();

  public onSelectedChanged(event: SelectChangedEvent): void {
    const { source, selected } = event;
    const { place } = source;

    this._emitChangeEvent({ placeId: place().id, selected } as PlaceSelection);
  }

  // private _updateStoreSelection(
  //   selection: Record<string, boolean>,
  //   selected: boolean,
  //   places: Places
  // ): Record<string, boolean> {
  //   let newSelection = { ...selection }; // Create a copy of the original selection

  //   if (selected) {
  //     newSelection = {
  //       ...selection,
  //       [places.id]: selected,
  //     };
  //   } else {
  //     delete newSelection[places.id];
  //   }

  //   return newSelection;
  // }

  _emitChangeEvent(currentSelection: PlaceSelection) {
    const event = { source: this, currentSelection } as SelectionListChange;
    this.selectionChanged.emit(event);
  }
}
