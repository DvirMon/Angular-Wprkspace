import { Injectable } from '@angular/core';
import {
  Firestore,
  CollectionReference,
  collection,
  getDocs,
  query,
  limit,
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { Places } from '../store/places/places.model';
import { EntityResult } from '@dom';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private readonly vacationsRef: CollectionReference<Places>;
  private readonly VACATIONS_COLLECTION = 'vacations';

  constructor(private readonly firestore: Firestore) {
    this.vacationsRef = collection(
      this.firestore,
      this.VACATIONS_COLLECTION
    ) as CollectionReference<Places>;
  }

  getPlaces$(): Observable<Places[]> {
    const queryRef = query(this.vacationsRef);
    return from(getDocs(queryRef)).pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Places;
        })
      )
    );
  }

  loadPlaces(): Observable<EntityResult<Places>> {
    const queryRef = query(this.vacationsRef);
    return from(getDocs(queryRef)).pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Places;
        })
      ),
      map((result) => {
        return { content: result };
      })
    );
  }
}