import { CommonModule, ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Injector,
  Signal,
  inject,
  input,
  runInInjectionContext,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs';
import { AuthStore } from '../../auth/store/auth.store.service';
import { PlacesCardComponent } from '../../places/place-card/places-card.component';
import {
  PlacesListComponent,
  SelectionListChange,
} from '../../places/place-list/place-list.component';
import { FloatingButtonComponent } from '../../shared/components/floating-button/floating-button.component';
import { FavoriteStore } from '../../store/favorites/favorite.store.service';
import { Places } from '../../store/places/places.model';
import { VacationsStore } from '../../store/places/places.store.service';
import { PlacesStore } from '../../store/store.places';

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
export class PlacesComponent {

  #storePlaces = inject(PlacesStore);
  
  parallaxImage =
    viewChild.required<ElementRef<HTMLDivElement>>('parallaxImage');
  scrollContent =
    viewChild.required<ElementRef<HTMLDivElement>>('parallaxImage');

  userId = input<string>;
  private readonly injector = inject(Injector);

  #favoriteStore: FavoriteStore = inject(FavoriteStore);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  public readonly places: Signal<Places[]>;
  public readonly selection: Signal<Record<string, boolean>>;

  constructor() {
    this.places = this.#storePlaces.places;
    this.selection = this._getSelectionFromRoute();
  }

  private _getSelectionFromRoute(): Signal<Record<string, boolean>> {
    return toSignal(
      this.route.data.pipe(map((data: Data) => data['placesResolver'])),
      { initialValue: {} }
    );
  }

  onSelectionChanged(event: SelectionListChange) {
    const { selection } = event;
    this.#favoriteStore.updateSelection(selection);
    this.#favoriteStore.updateFavorites();
  }

  onButtonClick(): void {
    runInInjectionContext(this.injector, () => inject(AuthStore).logout());
  }

  onContentScroll() {
    const offset = this.scrollContent().nativeElement.scrollTop;
    this.parallaxImage().nativeElement.style.transform = `translateY(${
      offset * 0.5
      }px)`;
    
  }
}
