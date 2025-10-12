import { Button, ButtonGroup, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCardsWithArtFilter,
  setCardsWithArtFilter,
  TCardsWithArtFilter,
} from "../../store/filtersSlice";
import FiltersGroup from "./FiltersGroup";

const ShowCardWithArtSwitch = () => {
  const cardsWithArtFilter = useAppSelector(getCardsWithArtFilter);
  const dispatch = useAppDispatch();
  const onClick = (filter: TCardsWithArtFilter) => {
    dispatch(setCardsWithArtFilter(filter));
  };

  return (
    <FiltersGroup title="Filter cards with art">
      <ButtonGroup title="Filter cards with art">
        <Button
          variant={cardsWithArtFilter === "all" ? "contained" : "outlined"}
          onClick={() => onClick("all")}
        >
          All
        </Button>
        <Button
          variant={cardsWithArtFilter === "artOnly" ? "contained" : "outlined"}
          onClick={() => onClick("artOnly")}
        >
          With Art
        </Button>
        <Button
          variant={
            cardsWithArtFilter === "withoutArtOnly" ? "contained" : "outlined"
          }
          onClick={() => onClick("withoutArtOnly")}
        >
          Without Art
        </Button>
      </ButtonGroup>
    </FiltersGroup>
  );
};

export default ShowCardWithArtSwitch;
