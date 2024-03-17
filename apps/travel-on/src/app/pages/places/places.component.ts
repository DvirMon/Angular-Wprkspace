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
import { MatToolbar } from '@angular/material/toolbar';
import { ParallaxDirective } from '@dom';
import { AuthStore } from '../../auth/store/auth.store.service';
import { PlacesCardComponent } from '../../places/place-card/places-card.component';
import {
  PlacesListComponent,
  SelectionListChange,
} from '../../places/place-list/place-list.component';
import { FloatingButtonComponent } from '../../shared/components/floating-button/floating-button.component';
import { scrollAnimation } from '../../shared/helpers';
import { Places } from '../../places/places.model';
import { SignalStore } from '../../store/store';

@Component({
  selector: 'to-places',
  standalone: true,
  imports: [
    MatToolbar,
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

  userId = input.required<string>();

  public readonly places: Signal<Places[]>;
  public readonly selection: Signal<Record<string, boolean>>;

  constructor() {
    this.places = this.#store.places;
    this.selection = this.#store.favoriteMap;
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
