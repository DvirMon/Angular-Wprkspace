import { signalStore, withComputed, withState } from "@ngrx/signals";
import { initialState } from "./state";
import { withDevtools } from "@angular-architects/ngrx-toolkit";
import { withLoadEntities } from "./with-load-entity";
import { WeatherHttpService } from "../utilities/services/weather-http.service";
import { computed } from "@angular/core";
import { AutocompleteResOption } from "../utilities/models/autocomplete-result";

export const SignalSore = signalStore(
  { providedIn: "root" },
  withDevtools("options"),
  withLoadEntities(WeatherHttpService),
  withState(initialState),
  withComputed(({ entities, searchTerm }) => ({
    currentSelection: computed(
      () =>
        entities().find(
          (option) => option.LocalizedName.toLowerCase() === searchTerm()
        ) as AutocompleteResOption
    ),
  }))
);
