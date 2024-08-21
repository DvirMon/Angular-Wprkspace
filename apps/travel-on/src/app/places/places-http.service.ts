import { inject, Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  QuerySnapshot,
  collection,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { Places } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesHttpService {
  private readonly VACATIONS_COLLECTION = 'vacations';
  readonly #firestore = inject(Firestore);

  constructor() {}

  public loadPlaces(): Observable<Places[]> {
    
    const vacationsRef = collection(
      this.#firestore,
      this.VACATIONS_COLLECTION
    ) as CollectionReference<Places>;
    
    const queryRef = query(vacationsRef);


    return from(getDocs(queryRef)).pipe(
      map((querySnapshot: QuerySnapshot<Places, DocumentData>) =>
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Places;
        })
      )
    );
  }
}
