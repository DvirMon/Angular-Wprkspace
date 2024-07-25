import { Favorite } from '../../favorites';
import { FavoriteSelection } from '../../store/features/with-favorites.feature';

function updateVacationIds(
  currentSelection: FavoriteSelection,
  vacationIds: string[]
): string[] {
  const { placeId, selected } = currentSelection;

  return selected
    ? [...vacationIds, placeId]
    : vacationIds.filter((id: string) => id !== placeId);
}

export function updateFavoriteEntity(
  data: Favorite,
  selection: FavoriteSelection
): Favorite {
  const { vacationIds } = data;

  const updatedVacationIds = updateVacationIds(selection, vacationIds);

  return {
    ...data,
    vacationIds: [...updatedVacationIds],
  } as Favorite;
}
