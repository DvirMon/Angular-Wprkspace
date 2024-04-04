import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Firestore,
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Observable, from, iif, map, of, switchMap } from 'rxjs';
import { mapQuerySnapshotDoc } from '../shared/helpers';
import { createFavorite } from './helpers';
import { Favorite } from './model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteHttpService {
  private readonly FAVORITES_COLLECTION = 'favorites';
  private readonly favoritesRef: CollectionReference<Favorite>;

  constructor(private readonly firestore: Firestore) {
    this.favoritesRef = collection(
      this.firestore,
      this.FAVORITES_COLLECTION
    ) as CollectionReference<Favorite>;
  }

  private _createNewFavoriteDoc$(
    favoritesRef: CollectionReference<DocumentData>,
    userId: string
  ): Observable<Favorite> {
    const newFavorite: Partial<Favorite> = createFavorite(userId);

    return from(addDoc(favoritesRef, newFavorite)).pipe(
      switchMap((doc: DocumentReference<DocumentData>) => {
        return of({ ...newFavorite, id: doc.id } as Favorite);
      })
    );
  }
  public loadFavorites(userId: string): Observable<Favorite[]> {
    const querySnapshot$ = from(
      getDocs(query(this.favoritesRef, where('userId', '==', userId)))
    );

    const trueMediaResult$ = querySnapshot$.pipe(
      switchMap(() => this._createNewFavoriteDoc$(this.favoritesRef, userId))
    );

    const falseMediaResult$ = querySnapshot$.pipe(
      mapQuerySnapshotDoc<Favorite>()
    );

    return querySnapshot$.pipe(
      switchMap((querySnapshot: QuerySnapshot<Favorite>) =>
        iif(() => querySnapshot.empty, trueMediaResult$, falseMediaResult$)
      ),
      map((res) => [res])
    );
  }

  public updateFavoriteDoc(docId: string, data: Favorite) {
    const favoriteDocRef = doc(this.favoritesRef, docId);
    return setDoc<Favorite, DocumentData>(favoriteDocRef, data);
  }
}
