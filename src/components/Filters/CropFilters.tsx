import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { RESOURCE } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCropFilters, toggleCropFilter } from "../../store/filtersSlice";

import cn from "classnames";

interface ICropFilterProps {
  crop: RESOURCE;
}

const CropFilter = (props: ICropFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredCrops = useAppSelector(getCropFilters);
  const isCropFiltered = filteredCrops[props.crop];

  const onClick = () => {
    dispatch(toggleCropFilter(props.crop));
  };

  return (
    <button
      onClick={onClick}
      className={cn("filters__filter filters__filter--small", {
        "filters__filter--active": isCropFiltered,
      })}
    >
      {props.crop}
    </button>
  );
};

const CropFilters = () => {
  return (
    <FiltersGroup title="Crop Cost">
      {[RESOURCE.APPLE, RESOURCE.BERRY, RESOURCE.CARROT].map((crop) => (
        <CropFilter crop={crop} key={crop} />
      ))}
    </FiltersGroup>
  );
};

export default CropFilters;
