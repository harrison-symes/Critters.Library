import * as React from "react";
import FiltersGroup from "./FiltersGroup";
import { TAGS } from "../../models/cards.models";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getFilteredTags, toggleTagFilter } from "../../store/filtersSlice";

import cn from "classnames";

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
    <button
      onClick={onClick}
      className={cn("filters__filter filters__filter--small", {
        "filters__filter--active": isTagFiltered,
      })}
    >
      {props.tag}
    </button>
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
