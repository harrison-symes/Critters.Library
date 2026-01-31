import { useCallback, useMemo, useState } from "react";
import {
  getDuplicatesFarmDeck,
  getDuplicatesFavourDeck,
  getDuplicatesRewardDeck,
  getDuplicatesWorkOrderDeck,
} from "../../store/decksSlice";
import { useAppSelector } from "../../store/hooks";
import FarmCard from "../Cards/FarmCard";
import RewardCard from "../Cards/RewardCard";
import FavourCard from "../Cards/FavourCard";
import WorkOrderCard from "../Cards/WorkOrderCard";

import "./market.scss";
import { Button } from "@mui/material";

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<any>) {
  const clone = [...array];
  for (var i = clone.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = clone[i];
    clone[i] = clone[j];
    clone[j] = temp;
  }

  return clone;
}

const MarketSim = () => {
  const farmDeck = useAppSelector(getDuplicatesFarmDeck);
  const workOrderDeck = useAppSelector(getDuplicatesWorkOrderDeck);
  const favoursDeck = useAppSelector(getDuplicatesFavourDeck);
  const rewardsDeck = useAppSelector(getDuplicatesRewardDeck);

  const shuffleDecks = useCallback(() => {
    return {
      farmCards: shuffleArray(farmDeck).slice(0, 4),
      workOrders: shuffleArray(workOrderDeck).slice(0, 4),
      favours: shuffleArray(favoursDeck).slice(0, 4),
      rewardCards: shuffleArray(rewardsDeck).slice(0, 4),
    };
  }, [farmDeck, workOrderDeck, favoursDeck, rewardsDeck]);

  const [{ farmCards, favours, rewardCards, workOrders }, setDecksState] =
    useState(shuffleDecks());

  const reshuffleDecks = () => setDecksState(shuffleDecks());

  return (
    <div>
      <Button onClick={reshuffleDecks}>Reshuffle</Button>
      <div className="market-sim">
        <div className="market-row">
          {rewardCards.map((card, idx) => (
            <RewardCard card={card} key={card.name + "-" + idx} isMarketSim />
          ))}
        </div>
        <div className="market-row">
          {workOrders.map((card, idx) => (
            <WorkOrderCard
              card={card}
              key={card.name + "-" + idx}
              isMarketSim
            />
          ))}
        </div>
        <div className="market-row">
          {favours.map((card, idx) => (
            <FavourCard card={card} key={card.name + "-" + idx} isMarketSim />
          ))}
        </div>
        <div className="market-row">
          {farmCards.map((card, idx) => (
            <FarmCard card={card} key={card.name + "-" + idx} isMarketSim />
          ))}
        </div>
      </div>
      <Button onClick={reshuffleDecks}>Reshuffle</Button>
    </div>
  );
};

export default MarketSim;
