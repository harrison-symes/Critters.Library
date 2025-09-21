import * as React from "react";
import "./new-display.scss";
import Filters from "../Filters/Filters";
import Cards from "./Cards";
import { useAppSelector } from "../../store/hooks";
import Stats from "../Stats/Stats";
import {
  getFilteredDuplicatesFarmDeck,
  getFilteredDuplicatesFavourDeck,
  getFilteredDuplicatesRewardDeck,
  getFilteredFarmDeck,
  getFilteredFavourDeck,
  getFilteredRewardDeck,
} from "../../store/deck.selectors";

const NewDisplay = () => {
  const filteredRewards = useAppSelector(getFilteredRewardDeck);
  const filteredRewardsDuplicates = useAppSelector(
    getFilteredDuplicatesRewardDeck
  );
  const filteredFavours = useAppSelector(getFilteredFavourDeck);
  const filteredFavoursDuplicates = useAppSelector(
    getFilteredDuplicatesFavourDeck
  );

  const filteredDuplicatesFarmDeck = useAppSelector(
    getFilteredDuplicatesFarmDeck
  );
  const filteredFarmDeck = useAppSelector(getFilteredFarmDeck);

  return (
    <div className="display">
      <Filters />
      <h1>
        {filteredDuplicatesFarmDeck.length} Farm cards (
        {filteredFarmDeck.length} unique) - {filteredRewardsDuplicates.length}{" "}
        Rewards ({filteredRewards.length} unique) -{" "}
        {filteredFavoursDuplicates.length} Favours ({filteredFavours.length}{" "}
        unique)
      </h1>
      <div className="display__split">
        <Cards />
        <Stats />
      </div>
    </div>
  );
};

export default NewDisplay;
