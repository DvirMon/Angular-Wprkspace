import { Timestamp } from '@angular/fire/firestore';
import { Favorite } from './model';

export function createFavorite(userId: string): Partial<Favorite> {
  const newFavorite: Partial<Favorite> = {
    userId,
    vacationIds: [],
    createdAt: Timestamp.fromDate(new Date()),
  };

  return newFavorite;
}
