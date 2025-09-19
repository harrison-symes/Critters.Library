import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { CARD_SET, RESOURCE } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import FilterButton from "./FilterButton";
import { getFutureFilterCount } from "../../store/deck.selectors";
import { getFilteredSets, toggleCardSetFilter } from "../../store/filtersSlice";

interface ICardSetFiltersProps {
  set: CARD_SET;
}

const CardSetFilters = (props: ICardSetFiltersProps) => {
  const dispatch = useAppDispatch();
  const filteredSets = useAppSelector(getFilteredSets);
  const isCardSetFiltersed = filteredSets.includes(props.set);

  const futureCount = useAppSelector(
    getFutureFilterCount({
      sets: [props.set],
    })
  );

  const onClick = () => {
    dispatch(toggleCardSetFilter(props.set));
  };

  return (
    <FilterButton
      onClick={onClick}
      text={props.set}
      isActive={isCardSetFiltersed}
      futureCount={futureCount}
    />
  );
};

const CardSetFilterss = () => {
  return (
    <FiltersGroup title="Card Sets">
      {Object.values(CARD_SET).map((set) => (
        <CardSetFilters set={set} key={set} />
      ))}
    </FiltersGroup>
  );
};

export default CardSetFilterss;
