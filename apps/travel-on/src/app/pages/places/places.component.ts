import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  OnInit,
  Signal,
  inject,
  input,
  runInInjectionContext,
  viewChild,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { AuthStore } from '../../auth/store/auth.store.service';
import { PlacesCardComponent } from '../../places/place-card/places-card.component';
import {
  PlacesListComponent,
  SelectionListChange,
} from '../../places/place-list/place-list.component';
import { FloatingButtonComponent } from '../../shared/components/floating-button/floating-button.component';
import { FavoriteStore } from '../../store/favorites/favorite.store.service';
import { Places } from '../../store/places/places.model';
import { SignalStore } from '../../store/store';

@Component({
  selector: 'to-places',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    PlacesListComponent,
    PlacesCardComponent,
    FloatingButtonComponent,
  ],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesComponent implements OnInit {
  private readonly injector = inject(Injector);
  #store = inject(SignalStore);
  // private readonly route: ActivatedRoute = inject(ActivatedRoute);

  parallaxImage =
    viewChild.required<ElementRef<HTMLDivElement>>('parallaxImage');
  scrollContent =
    viewChild.required<ElementRef<HTMLDivElement>>('parallaxImage');

  userId = input.required<string>();

  #favoriteStore: FavoriteStore = inject(FavoriteStore);

  public readonly places: Signal<Places[]>;
  public readonly selection: Signal<Record<string, number>>;

  constructor() {
    this.places = this.#store.places;
    this.selection = this.#store.favoriteMap;
  }

  ngOnInit(): void {
    this.#store.loadFavorites(this.userId);
  }

  // private _getSelectionFromRoute(): Signal<Record<string, boolean>> {
  //   return toSignal(
  //     this.route.data.pipe(map((data: Data) => data['placesResolver'])),
  //     { initialValue: {} }
  //   );
  // }

  onSelectionChanged(event: SelectionListChange) {
    const { currentSelection } = event;
    // this.#favoriteStore.updateSelection(selection);
    // this.#favoriteStore.updateFavorites();

    this.#store.updateFavorite(currentSelection);
  }

  onLogout(): void {
    runInInjectionContext(this.injector, () => inject(AuthStore).logout());
  }

  onContentScroll() {
    const offset = this.scrollContent().nativeElement.scrollTop;
    this.parallaxImage().nativeElement.style.transform = `translateY(${
      offset * 0.5
    }px)`;
  }
}
