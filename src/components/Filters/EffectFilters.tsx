import cn from "classnames";
import {
  getEffectsFilters,
  TEffects,
  toggleEffectsFilter,
} from "../../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FiltersGroup from "./FiltersGroup";
import { Button } from "@mui/material";
import FilterButton from "./FilterButton";

interface ICropFilterProps {
  effect: TEffects;
}

const EffectFilter = (props: ICropFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredEffects = useAppSelector(getEffectsFilters);
  const isEffectFiltered = filteredEffects[props.effect];

  const onClick = () => {
    dispatch(toggleEffectsFilter(props.effect));
  };

  return (
    <FilterButton
      onClick={onClick}
      isActive={isEffectFiltered}
      text={props.effect}
    />
  );
};

const EffectFilters = () => {
  return (
    <FiltersGroup title="Card Effects">
      {(
        ["Bonus", "Recycle", "holdable", "sellable", "unsellable"] as TEffects[]
      ).map((effect: TEffects) => (
        <EffectFilter effect={effect} key={effect} />
      ))}
    </FiltersGroup>
  );
};
export default EffectFilters;
