import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { RESOURCE } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCropFilters, toggleCropFilter } from "../../store/filtersSlice";

import FilterButton from "./FilterButton";
import { getFutureFilterCount } from "../../store/deck.selectors";

interface ICropFilterProps {
  crop: RESOURCE;
}

const CropFilter = (props: ICropFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredCrops = useAppSelector(getCropFilters);
  const isCropFiltered = filteredCrops[props.crop];

  const futureCount = useAppSelector(
    getFutureFilterCount({
      crops: {
        ...filteredCrops,
        [props.crop]: true,
      },
    })
  );

  const onClick = () => {
    dispatch(toggleCropFilter(props.crop));
  };

  return (
    <FilterButton
      onClick={onClick}
      text={props.crop}
      isActive={isCropFiltered}
      futureCount={futureCount}
    />
  );
};

const CropFilters = () => {
  return (
    <FiltersGroup title="Crop Cost">
      {(["apples", "berries", "carrots"] as RESOURCE[]).map((crop) => (
        <CropFilter crop={crop} key={crop} />
      ))}
    </FiltersGroup>
  );
};

export default CropFilters;
