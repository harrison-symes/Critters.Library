import * as React from "react";
import "./new-display.scss";
import Filters from "../Filters/Filters";
import Cards from "./Cards";
import { createDeck } from "../../cards";
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

  return (
    <div className="display">
      <Filters />
      <div className="display__split">
        <Cards farmDeck={filteredDeck} />
        <Stats deck={filteredDuplicatesDeck} />
      </div>
    </div>
  );
};

export default NewDisplay;
