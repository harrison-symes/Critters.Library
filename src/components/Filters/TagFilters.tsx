import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { TAGS } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getFilteredTags, toggleTagFilter } from "../../store/filtersSlice";

import FilterButton from "./FilterButton";

interface ITagFilterProps {
  tag: TAGS;
}

const TagFilter = (props: ITagFilterProps) => {
  const dispatch = useAppDispatch();
  const filteredTags = useAppSelector(getFilteredTags);
  const isTagFiltered = filteredTags.includes(props.tag);

  const onClick = () => {
    dispatch(toggleTagFilter(props.tag));
  };

  return (
    <FilterButton onClick={onClick} isActive={isTagFiltered} text={props.tag} />
  );
};

const TagFilters = () => {
  return (
    <FiltersGroup title="Tags">
      {Object.values(TAGS).map((tag) => (
        <TagFilter tag={tag} key={tag} />
      ))}
    </FiltersGroup>
  );
};

export default TagFilters;
