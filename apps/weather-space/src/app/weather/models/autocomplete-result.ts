import { FormOption } from "@dom";

export interface Country {
  ID: string;
  LocalizedName: string;
}

export interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
}

export interface AutocompleteMediaResult {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
}

export interface AutocompleteOption extends FormOption {
  id: number;
  Version: number;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
}
