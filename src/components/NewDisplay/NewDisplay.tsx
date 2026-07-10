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
  getFilteredDuplicatesWorkOrderDeck,
  getFilteredFarmDeck,
  getFilteredFavourDeck,
  getFilteredRewardDeck,
  getFilteredWorkOrderDeck,
} from "../../store/deck.selectors";

import cn from "classnames";
import { getShouldShowStats } from "../../store/filtersSlice";

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

  const filteredDuplicatesWorkOrdersDeck = useAppSelector(
    getFilteredDuplicatesWorkOrderDeck
  )
  const filteredWorkOrdersDeck = useAppSelector(
    getFilteredWorkOrderDeck
  )
  const shouldShowStats = useAppSelector(getShouldShowStats);

  const totalDupes = filteredDuplicatesFarmDeck.length + filteredRewardsDuplicates.length + filteredFavoursDuplicates.length + filteredDuplicatesWorkOrdersDeck.length
  const totalUnique = filteredFarmDeck.length + filteredRewards.length + filteredFavours.length + filteredWorkOrdersDeck.length

  return (
    <div className="display">
      <Filters />
      <h1>
        <div>
          {totalDupes} cards. ({totalUnique} unique)
        </div>
        <div>
          {filteredDuplicatesFarmDeck.length} Farm cards (
          {filteredFarmDeck.length} unique) - {filteredRewardsDuplicates.length}{" "}
          Rewards ({filteredRewards.length} unique) -{" "}
          {filteredFavoursDuplicates.length} Favours ({filteredFavours.length}{" "}
          unique) - {" "}{filteredDuplicatesWorkOrdersDeck.length} Work Orders ({filteredWorkOrdersDeck.length} unique)
        </div>
      </h1>
      <div
        className={cn("display__content", {
          "display__content--split": shouldShowStats,
        })}
      >
        <Cards />
        {shouldShowStats && <Stats />}
      </div>
    </div>
  );
};

export default NewDisplay;
