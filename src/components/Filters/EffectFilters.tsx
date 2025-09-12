import cn from "classnames";
import {
  getEffectsFilters,
  TEffects,
  toggleEffectsFilter,
} from "../../store/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FiltersGroup from "./FiltersGroup";

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
    <button
      onClick={onClick}
      className={cn("filters__filter filters__filter--small", {
        "filters__filter--active": isEffectFiltered,
      })}
    >
      {props.effect}
    </button>
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
