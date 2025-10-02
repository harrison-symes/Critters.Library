import { Switch } from "@mui/material";
import FiltersGroup from "./FiltersGroup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getAreDesignNotesVisible,
  toggleDesignNotesVisible,
} from "../../store/filtersSlice";

const DesignNotesToggle = () => {
  const areDesignNotesVisible = useAppSelector(getAreDesignNotesVisible);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(toggleDesignNotesVisible());
  };

  return (
    <FiltersGroup title="Show Design Notes">
      <Switch
        value={areDesignNotesVisible}
        defaultChecked={areDesignNotesVisible}
        onClick={onClick}
      />
    </FiltersGroup>
  );
};

export default DesignNotesToggle;
