import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
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
  private readonly vacationsRef: CollectionReference<Places>;
  private readonly VACATIONS_COLLECTION = 'vacations';

  constructor(private readonly firestore: Firestore) {
    this.vacationsRef = collection(
      this.firestore,
      this.VACATIONS_COLLECTION
    ) as CollectionReference<Places>;
  }

  loadPlaces(): Observable<Places[]> {
    const queryRef = query(this.vacationsRef);
    return from(getDocs(queryRef)).pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Places;
        })
      )
    );
  }
}