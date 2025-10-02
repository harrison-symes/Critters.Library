import { Switch } from "@mui/material";
import FiltersGroup from "./FiltersGroup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getShouldShowAiColouredImages,
  toggleShowAiColouredImages,
} from "../../store/filtersSlice";

const AiColouredImagesToggle = () => {
  const showAiColouredImages = useAppSelector(getShouldShowAiColouredImages);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(toggleShowAiColouredImages());
  };

  return (
    <FiltersGroup title="Show Ai Coloured Images">
      <Switch value={showAiColouredImages} onClick={onClick} />
    </FiltersGroup>
  );
};

export default AiColouredImagesToggle;
