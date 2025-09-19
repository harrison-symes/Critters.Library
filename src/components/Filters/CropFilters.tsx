import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { RESOURCE } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCropFilters, toggleCropFilter } from "../../store/filtersSlice";

import cn from "classnames";
import { Button } from "@mui/material";
import FilterButton from "./FilterButton";

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
    <FilterButton
      onClick={onClick}
      text={props.crop}
      isActive={isCropFiltered}
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
