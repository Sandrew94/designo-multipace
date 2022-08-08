import { FilterCardType } from "../types/CardType";

export function filterCard(section: string, arrayToFilter: FilterCardType) {
  const filter = arrayToFilter?.filter((item) =>
    Object.keys(item).includes(section)
  );
  return filter[0];
}
