import { inject, Injectable } from '@angular/core';
import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  Firestore,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { from, map, Observable, shareReplay } from 'rxjs';
import { Destination, DestinationItem, Places } from '../../places/places.model';

@Injectable({
  providedIn: 'root',
})
export class EditPlacesService {
  readonly #VACATIONS_COLLECTION = 'vacations';
  readonly #DESTINATIONS_COLLECTION = 'destinations';

  readonly #firestore = inject(Firestore);

  public loadPlace(id: string): Observable<Places> {
    const query = doc(this.#firestore, this.#VACATIONS_COLLECTION, id);

    return from(getDoc(query)).pipe(
      map((data: DocumentSnapshot<DocumentData, DocumentData>) => {
        return data.data() as Places;
      })
    );
  }

  public loadDestinationList(): Observable<DestinationItem[]> {
    const query = collection(this.#firestore, this.#DESTINATIONS_COLLECTION);
    return from(getDocs(query)).pipe(
      map((res: QuerySnapshot<DocumentData, DocumentData>) => {
        return res.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) =>
            doc.data() as DestinationItem
        );
      }),
      // shareReplay(1)
      // map((destinations: Destination[]) =>
      //   destinations.map((des) => des.country)
      // )
    );
  }
}
