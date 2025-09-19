import * as React from "react";
import "./new-display.scss";
import Filters from "../Filters/Filters";
import Cards from "./Cards";
import { createDeck, createFavourDeck, createRewardDeck } from "../../cards";
import { useAppSelector } from "../../store/hooks";
import {
  getCardSubTypeFilter,
  getCardTypeFilter,
  getCropFilters,
  getEffectsFilters,
  getFilteredTags,
} from "../../store/filtersSlice";
import { ICard, IFarmCard, TAGS } from "../../models/cards.models";
import Stats from "../Stats/Stats";

const NewDisplay = () => {
  const farmDeck = createDeck(true);
  const duplicatesFarmDeck = createDeck();

  const cardTypeFilter = useAppSelector(getCardTypeFilter);
  const cardSubTypeFilter = useAppSelector(getCardSubTypeFilter);
  const cropFilters = useAppSelector(getCropFilters);
  const effectFilters = useAppSelector(getEffectsFilters);
  const tagFilters = useAppSelector(getFilteredTags);

  const rewards = createRewardDeck(true);
  const favours = createFavourDeck(true);
  const rewardsDuplicates = createRewardDeck(false);
  const favoursDuplicates = createFavourDeck(false);

  const filterFarmDeck = React.useCallback(
    (cards: IFarmCard[]) => {
      return cards.filter((card) => {
        if (cardTypeFilter.length && !cardTypeFilter.includes(card.type)) {
          return false;
        }
        if (
          cardSubTypeFilter.length &&
          (!card.subtype || !cardSubTypeFilter.includes(card.subtype))
        ) {
          return false;
        }
        if (cropFilters.apples && card.cost.apples === 0) {
          return false;
        }
        if (cropFilters.berries && card.cost.berries === 0) {
          return false;
        }
        if (cropFilters.carrots && card.cost.carrots === 0) {
          return false;
        }
        if (effectFilters.Bonus && !card.buyBonus) {
          return false;
        }
        if (effectFilters.Recycle && !card.recycle) {
          return false;
        }
        if (effectFilters.sellable && !card.sellable) {
          return false;
        }
        if (effectFilters.unsellable && !card.unsellable) {
          return false;
        }
        if (effectFilters.holdable && !card.holdable) {
          return false;
        }
        const hasMissingTag = tagFilters.find((tag) => {
          return !card.tags?.includes(tag);
        });

        if (hasMissingTag) {
          return false;
        }

        return true;
      });
    },
    [
      cardSubTypeFilter,
      cardTypeFilter,
      cropFilters.apples,
      cropFilters.berries,
      cropFilters.carrots,
      effectFilters.Bonus,
      effectFilters.Recycle,
      effectFilters.holdable,
      effectFilters.sellable,
      effectFilters.unsellable,
      tagFilters,
    ]
  );

  const filteredDeck = React.useMemo(
    () => filterFarmDeck(farmDeck),
    [farmDeck, filterFarmDeck]
  );

  const filteredDuplicatesDeck = React.useMemo(
    () => filterFarmDeck(duplicatesFarmDeck),
    [duplicatesFarmDeck, filterFarmDeck]
  );

  const filterNonFarmCards = React.useCallback(
    <T extends ICard>(deck: Array<T>): T[] => {
      return deck.filter((card) => {
        if (cardTypeFilter.length && !cardTypeFilter.includes(card.type)) {
          return false;
        }
        if (cardSubTypeFilter.length) {
          return false;
        }
        if (cropFilters.apples) {
          return false;
        }
        if (cropFilters.berries) {
          return false;
        }
        if (cropFilters.carrots) {
          return false;
        }
        if (effectFilters.Bonus) {
          return false;
        }
        if (effectFilters.Recycle) {
          return false;
        }
        if (effectFilters.sellable) {
          return false;
        }
        if (effectFilters.unsellable) {
          return false;
        }
        if (effectFilters.holdable) {
          return false;
        }
        const hasMissingTag = tagFilters.find((tag) => {
          return !card.tags?.includes(tag);
        });

        if (hasMissingTag) {
          return false;
        }

        return true;
      });
    },
    [
      cardSubTypeFilter.length,
      cardTypeFilter,
      cropFilters.apples,
      cropFilters.berries,
      cropFilters.carrots,
      effectFilters.Bonus,
      effectFilters.Recycle,
      effectFilters.holdable,
      effectFilters.sellable,
      effectFilters.unsellable,
      tagFilters,
    ]
  );

  const filteredRewards = React.useMemo(
    () => filterNonFarmCards(rewards),
    [filterNonFarmCards, rewards]
  );
  const filteredFavours = React.useMemo(
    () => filterNonFarmCards(favours),
    [filterNonFarmCards, favours]
  );
  const filteredRewardsDuplicates = React.useMemo(
    () => filterNonFarmCards(rewardsDuplicates),
    [filterNonFarmCards, rewardsDuplicates]
  );
  const filteredFavoursDuplicates = React.useMemo(
    () => filterNonFarmCards(favoursDuplicates),
    [filterNonFarmCards, favoursDuplicates]
  );

  return (
    <div className="display">
      <Filters />
      <h1>
        {filteredDuplicatesDeck.length} Farm cards ({filteredDeck.length}{" "}
        unique) - {filteredRewardsDuplicates.length} Rewards (
        {filteredRewards.length} unique) - {filteredFavoursDuplicates.length}{" "}
        Favours ({filteredFavours.length} unique)
      </h1>
      <div className="display__split">
        <Cards
          farmDeck={filteredDeck}
          rewards={filteredRewards}
          favours={filteredFavours}
        />
        <Stats deck={filteredDuplicatesDeck} />
      </div>
    </div>
  );
};

export default NewDisplay;
