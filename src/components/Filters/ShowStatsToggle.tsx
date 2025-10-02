import { Switch } from "@mui/material";
import FiltersGroup from "./FiltersGroup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getShouldShowStats, toggleShowStats } from "../../store/filtersSlice";

const ShowStatsToggle = () => {
  const shouldShowStats = useAppSelector(getShouldShowStats);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(toggleShowStats());
  };

  return (
    <FiltersGroup title="Show Stats">
      <Switch
        value={shouldShowStats}
        defaultChecked={shouldShowStats}
        onClick={onClick}
      />
    </FiltersGroup>
  );
};

export default ShowStatsToggle;
