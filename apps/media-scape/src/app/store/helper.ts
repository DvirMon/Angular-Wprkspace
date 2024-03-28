import { MediaType, Result, SortDir } from '../shared/types';

export function isTitleOrDate(value: string): (item: Result) => boolean {
  return function (item: Result): boolean {
    return isTitleInclude(item, value) || isYearInclude(item, value);
  };
}

function isTitleInclude(item: Result, value: string): boolean {
  return item.Title.toLowerCase().includes(value.toLowerCase());
}

function isYearInclude(item: Result, value: string): boolean {
  return item.Year.substring(0, 4).includes(value);
}

function mapYearValue(value: string) {
  return value.substring(0, 4);
}

export function isTypeEqual(value: MediaType) {
  return function (item: Result): boolean {
    return item.Type === value;
  };
}

export function compareTitle(
  item1: Result,
  item2: Result,
  mode: SortDir = SortDir.ASC
): number {
  const title1 = item1.Title.toUpperCase();
  const title2 = item2.Title.toUpperCase();

  if (mode === SortDir.ASC) {
    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }
    return 0;
  } else {
    // descending order
    if (title1 > title2) {
      return -1;
    }
    if (title1 < title2) {
      return 1;
    }
    return 0;
  }
}
