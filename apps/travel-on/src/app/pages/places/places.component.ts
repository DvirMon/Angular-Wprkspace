import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  input,
  runInInjectionContext,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ParallaxDirective } from '@dom';
import { FloatingButtonComponent } from '@dom/components';
import { AuthStore } from '../../auth/store/store';
import { PlacesCardComponent } from '../../places/place-card/places-card.component';
import {
  PlacesListComponent,
  SelectionListChange,
} from '../../places/place-list/place-list.component';
import { Places } from '../../places/places.model';
import { SignalStore } from '../../store/store';
import { PlacesHeaderComponent } from '../../places/places-header/places-header.component';
import { PlacesPageService } from './places.service';

@Component({
  selector: 'to-places',
  standalone: true,
  imports: [
    PlacesHeaderComponent,
    PlacesListComponent,
    PlacesCardComponent,
    FloatingButtonComponent,
    ParallaxDirective,
  ],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesComponent implements OnInit {
  #injector = inject(Injector);
  #store = inject(SignalStore);
  #layout = inject(PlacesPageService);

  userId = input.required<string>();

  public readonly places: Signal<Places[]>;
  public readonly selection: Signal<Record<string, boolean>>;
  public readonly isGrid: Signal<boolean>;

  constructor() {
    this.places = this.#store.places;
    this.selection = this.#store.favoriteMap;
    this.isGrid = this.#layout.getIsGrid();
  }

  ngOnInit(): void {
    this.#store.loadFavorites(this.userId);
  }

  async onSelectionChanged(event: SelectionListChange) {
    const { currentSelection } = event;
    await this.#store.updateFavorite(currentSelection);
  }

  onLogout(): void {
    runInInjectionContext(this.#injector, () => inject(AuthStore).logout());
  }
}
