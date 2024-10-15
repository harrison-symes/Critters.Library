import * as React from "react";
import workOrders from "../cards/workOrders";
import WorkOrder from "./WorkOrder";
import cn from "classnames";
import CardList from "./CardList";
import { createDeck } from "../cards";
import { CARD_TYPE, RESOURCE } from "../models/cards.models";
import favours from "../cards/actions";
import rewards from "../cards/rewards";

const Cards = () => {
  const [costFilters, setCostFilters] = React.useState<Array<RESOURCE>>([]);
  const deck = createDeck(true);

  const onCostFilterClick = (resource: RESOURCE) => {
    if (costFilters.includes(resource)) {
      setCostFilters(costFilters.filter((c) => c !== resource));
    } else {
      setCostFilters([...costFilters, resource]);
    }
  };

  const filteredDeck = deck.filter((c) => {
    if (costFilters.length > 0) {
      return !costFilters.find((resource) => c.cost[resource] === 0);
    }

    return true;
  });

  return (
    <div>
      <div className="cards">
        <div className="filters">
          <div className="cost-filters">
            <div
              className={cn("cost-filter cost-filter--apple", {
                "cost-filter--selected": costFilters.includes(RESOURCE.APPLE),
              })}
              onClick={() => onCostFilterClick(RESOURCE.APPLE)}
            >
              Apple
            </div>
            <div
              className={cn("cost-filter cost-filter--carrot", {
                "cost-filter--selected": costFilters.includes(RESOURCE.CARROT),
              })}
              onClick={() => onCostFilterClick(RESOURCE.CARROT)}
            >
              Carrot
            </div>
            <div
              className={cn("cost-filter cost-filter--berry", {
                "cost-filter--selected": costFilters.includes(RESOURCE.BERRY),
              })}
              onClick={() => onCostFilterClick(RESOURCE.BERRY)}
            >
              Berry
            </div>
          </div>
        </div>
        <h1>Work Orders ({workOrders.length})</h1>
        <div className="card-list">
          {workOrders.map((card) => (
            <WorkOrder order={card} />
          ))}
        </div>
        <CardList title="Rewards" deck={rewards} cardType={CARD_TYPE.Reward} />
        <CardList title="Actions" deck={favours} cardType={CARD_TYPE.Favour} />
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
