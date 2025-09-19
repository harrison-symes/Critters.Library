import { CARD_SUBTYPE, CARD_TYPE } from "../../models/cards.models";
import {
  getCardSubTypeFilter,
  getCardTypeFilter,
  toggleCardSubTypeFilter,
  toggleCardTypeFilter,
} from "../../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import cn from "classnames";
import FiltersGroup from "./FiltersGroup";
import CropFilters from "./CropFilters";
import { Button } from "@mui/material";
import FilterButton from "./FilterButton";

interface ICardTypeFilterProps {
  type: CARD_TYPE;
}

export const CardTypeFilter = ({ type }: ICardTypeFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredTypes = useAppSelector(getCardTypeFilter);
  const isTypeSelected = filteredTypes.includes(type);

  const onClick = () => {
    dispatch(toggleCardTypeFilter(type));
  };

  return (
    <FilterButton onClick={onClick} isActive={isTypeSelected} text={type} />
  );
};

interface ICardSubTypeFilterProps {
  type: CARD_SUBTYPE;
}

export const CardSubTypeFilter = ({ type }: ICardSubTypeFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredSubTypes = useAppSelector(getCardSubTypeFilter);
  const isTypeSelected = filteredSubTypes.includes(type);

  const onClick = () => {
    dispatch(toggleCardSubTypeFilter(type));
  };

  return (
    <FilterButton onClick={onClick} isActive={isTypeSelected} text={type} />
  );
};

const CardTypeFilters = () => {
  return (
    <div className="filters__container">
      <FiltersGroup title="Type">
        {Object.values(CARD_TYPE).map((type) => (
          <CardTypeFilter key={type} type={type} />
        ))}
      </FiltersGroup>
      <FiltersGroup title="Subtype">
        {Object.values(CARD_SUBTYPE).map((type) => (
          <CardSubTypeFilter key={type} type={type} />
        ))}
      </FiltersGroup>
      <CropFilters />
    </div>
  );
};

export default CardTypeFilters;
