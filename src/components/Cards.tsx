import * as React from "react";
import workOrders from "../cards/workOrders";
import WorkOrder from "./WorkOrder";
import cn from "classnames";
import CardList from "./CardList";
import { createDeck } from "../cards";
import {
  CARD_SUBTYPE,
  CARD_TYPE,
  ICard,
  RESOURCE,
  TAGS,
} from "../models/cards.models";
import favours from "../cards/actions";
import rewards from "../cards/rewards";

const Cards = () => {
  const [resourceFilters, setCostFilters] = React.useState<Array<RESOURCE>>([]);
  const [subTypeFilters, setSubTypeFilters] = React.useState<
    Array<CARD_SUBTYPE | undefined>
  >([]);
  const [tagFilters, setTagFilters] = React.useState<Array<TAGS>>([]);
  const deck = createDeck(true);

  const onCostFilterClick = (resource: RESOURCE) => {
    if (resourceFilters.includes(resource)) {
      setCostFilters(resourceFilters.filter((c) => c !== resource));
    } else {
      setCostFilters([...resourceFilters, resource]);
    }
  };

  const onSubTypeFilterClick = (subType: CARD_SUBTYPE | undefined) => {
    if (subTypeFilters.includes(subType)) {
      setSubTypeFilters(subTypeFilters.filter((c) => c !== subType));
    } else {
      setSubTypeFilters([...subTypeFilters, subType]);
    }
  };

  const onTagFilterClick = (tag: TAGS) => {
    if (tagFilters.includes(tag)) {
      setTagFilters(tagFilters.filter((c) => c !== tag));
    } else {
      setTagFilters([...tagFilters, tag]);
    }
  };

  const filterDeck = (deck: ICard[]) =>
    deck.reduce((accum, card) => {
      if (resourceFilters.some((resource) => card.cost[resource] === 0)) {
        return accum;
      }

      if (-1 !== tagFilters.findIndex((tag) => !card.tags?.includes(tag))) {
        return accum;
      }

      if (
        subTypeFilters.length > 0 &&
        !subTypeFilters.some((subType) => card.subtype === subType)
      ) {
        return accum;
      }

      accum.push(card);
      return accum;
    }, [] as ICard[]);

  const filteredDeck = React.useMemo(() => {
    return filterDeck(deck);
  }, [resourceFilters, subTypeFilters, tagFilters]);

  return (
    <div>
      <div className="cards">
        <div className="filters">
          <div className="cost-filters">
            <div
              className={cn("cost-filter cost-filter--apple", {
                "cost-filter--selected": resourceFilters.includes(
                  RESOURCE.APPLE
                ),
              })}
              onClick={() => onCostFilterClick(RESOURCE.APPLE)}
            >
              Apple
            </div>
            <div
              className={cn("cost-filter cost-filter--carrot", {
                "cost-filter--selected": resourceFilters.includes(
                  RESOURCE.CARROT
                ),
              })}
              onClick={() => onCostFilterClick(RESOURCE.CARROT)}
            >
              Carrot
            </div>
            <div
              className={cn("cost-filter cost-filter--berry", {
                "cost-filter--selected": resourceFilters.includes(
                  RESOURCE.BERRY
                ),
              })}
              onClick={() => onCostFilterClick(RESOURCE.BERRY)}
            >
              Berry
            </div>
          </div>
        </div>
        <div className="filters">
          <div className="cost-filters">
            <div
              className={cn("cost-filter cost-filter--apple", {
                "cost-filter--selected": subTypeFilters.includes(
                  CARD_SUBTYPE.FINANCE
                ),
              })}
              onClick={() => onSubTypeFilterClick(CARD_SUBTYPE.FINANCE)}
            >
              Finance
            </div>
            <div
              className={cn("cost-filter cost-filter--carrot", {
                "cost-filter--selected": subTypeFilters.includes(
                  CARD_SUBTYPE.TOOL
                ),
              })}
              onClick={() => onSubTypeFilterClick(CARD_SUBTYPE.TOOL)}
            >
              Tool
            </div>
            <div
              className={cn("cost-filter cost-filter--berry", {
                "cost-filter--selected": subTypeFilters.includes(
                  CARD_SUBTYPE.TREAT
                ),
              })}
              onClick={() => onSubTypeFilterClick(CARD_SUBTYPE.TREAT)}
            >
              Treat
            </div>
            <div
              className={cn("cost-filter cost-filter--berry", {
                "cost-filter--selected": subTypeFilters.includes(
                  CARD_SUBTYPE.GIFT
                ),
              })}
              onClick={() => onSubTypeFilterClick(CARD_SUBTYPE.GIFT)}
            >
              Gift
            </div>
            <div
              className={cn("cost-filter cost-filter--berry", {
                "cost-filter--selected": subTypeFilters.includes(undefined),
              })}
              onClick={() => onSubTypeFilterClick(undefined)}
            >
              No subtype
            </div>
          </div>
        </div>
        <div className="filters">
          <div className="cost-filters">
            {Object.keys(TAGS).map((tag) => (
              <div
                className={cn("cost-filter cost-filter--berry", {
                  "cost-filter--selected": tagFilters.includes(tag as TAGS),
                })}
                onClick={() => onTagFilterClick(tag as TAGS)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* <h1>Work Orders ({workOrders.length})</h1> */}
        {/* <div className="card-list">
          {workOrders.map((card) => (
            <WorkOrder order={card} />
          ))}
        </div> */}
        {/* <CardList title="Rewards" deck={rewards} cardType={CARD_TYPE.Reward} /> */}
        {/* <CardList title="Actions" deck={favours} cardType={CARD_TYPE.Favour} /> */}
        <h1>Total: {filteredDeck.length}</h1>
        <CardList title="Items" deck={filteredDeck} cardType={CARD_TYPE.Item} />
        <CardList
          title="Seeds"
          deck={filteredDeck}
          cardType={CARD_TYPE.Seeds}
        />
        <CardList
          title="Rabbits"
          deck={filteredDeck}
          cardType={CARD_TYPE.Rabbit}
        />
        <CardList
          title="Hedgehogs"
          deck={filteredDeck}
          cardType={CARD_TYPE.Hedgehog}
        />
        <CardList title="Rats" deck={filteredDeck} cardType={CARD_TYPE.Rat} />
        <CardList title="Moles" deck={filteredDeck} cardType={CARD_TYPE.Mole} />
        <CardList
          title="Raccoons"
          deck={filteredDeck}
          cardType={CARD_TYPE.Raccoon}
        />
        <CardList title="Worms" deck={filteredDeck} cardType={CARD_TYPE.Worm} />
        <CardList title="Bees" deck={filteredDeck} cardType={CARD_TYPE.Bee} />
      </div>
    </div>
  );
};

export default Cards;
