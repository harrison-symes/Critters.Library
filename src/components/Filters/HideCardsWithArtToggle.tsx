import { Switch } from "@mui/material";
import FiltersGroup from "./FiltersGroup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getShouldHideCompletedArtCards,
  toggleShowCompletedArtCards,
} from "../../store/filtersSlice";

const HideCompletedArtCardsToggle = () => {
  const shouldHideCompletedArtCards = useAppSelector(
    getShouldHideCompletedArtCards
  );
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(toggleShowCompletedArtCards());
  };

  return (
    <FiltersGroup title="Hide Cards With Images">
      <Switch value={shouldHideCompletedArtCards} onClick={onClick} />
    </FiltersGroup>
  );
};

export default HideCompletedArtCardsToggle;
