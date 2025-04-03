import * as React from "react";
// import rd3 from "react-d3-library";
import * as d3 from "d3";
import { CARD_TYPE, ICard } from "../models/cards.models";
import { createDeck } from "../cards";
import { BarChart } from "@mui/x-charts/BarChart";
import Stats from "./Stats";

interface IProps {
  deck: ICard[];
}

const CostGraph = (props: IProps) => {
  const [filterState, setFilterState] = React.useState<{
    cost?: number;
    cardType: CARD_TYPE[];
  }>({
    cardType: [],
  });

  const setCostFilter = (cost?: number) => {
    console.log("setting cost filter");
    setFilterState((state) => ({
      ...state,
      cost,
    }));
  };

  const toggleCardTypeFilter = (cardType: CARD_TYPE) => {
    setFilterState((state) => ({
      ...state,
      cardType: state.cardType.includes(cardType)
        ? state.cardType.filter((c) => c !== cardType)
        : [...state.cardType, cardType],
    }));
  };

  const resetFilters = () => {
    setFilterState({
      cardType: [],
    });
  };

  const createCostMap = (deck: ICard[]) => {
    return deck.reduce(
      (accum, card) => {
        const totalCost =
          (card.cost.berries ?? 0) +
          (card.cost.apples ?? 0) +
          (card.cost.carrots ?? 0);
        let max = accum.max;
        let totalMax = accum.totalMax;

        const applyCost = (obj: Record<number, number>, cost: number = 0) => {
          if (cost > max) max = cost;
          if (obj[cost] === undefined) {
            obj[cost] = 1;
          } else {
            obj[cost]++;
          }
        };

        const { apples, carrots, berries, total } = accum;

        applyCost(apples, card.cost.apples);
        applyCost(berries, card.cost.berries);
        applyCost(carrots, card.cost.carrots);

        if (total[totalCost] === undefined) {
          total[totalCost] = 1;
        } else {
          total[totalCost]++;
        }

        if (totalCost > totalMax) totalMax = totalCost;

        accum.max = max;
        accum.totalMax = totalMax;

        return accum;
      },
      {
        apples: {},
        carrots: {},
        berries: {},
        total: {},
        max: 0,
        totalMax: 0,
      } as {
        total: Record<number, number>;
        carrots: Record<number, number>;
        apples: Record<number, number>;
        berries: Record<number, number>;
        max: number;
        totalMax: number;
      }
    );
  };

  const filteredDeck = props.deck.filter((card) => {
    if (filterState.cardType.length > 0) {
      console.log(filterState.cardType[0] ?? "none", card.type);
      if (!filterState.cardType.includes(card.type)) {
        return false;
      }
    }
    if (filterState.cost !== undefined) {
      const totalCost =
        (card.cost.berries ?? 0) +
        (card.cost.apples ?? 0) +
        (card.cost.carrots ?? 0);
      console.log(totalCost, filterState.cost);
      if (totalCost !== filterState.cost) {
        return false;
      }
    }

    return true;
  });

  const costMap = createCostMap(filteredDeck);

  const costs = new Array(costMap.max).fill(0).map((_, i) => i + 1);
  const totalCosts = new Array(costMap.totalMax).fill(0).map((_, i) => i + 1);

  const carrotCostTotal = filteredDeck.reduce(
    (accum, card) => accum + (card.cost.carrots ?? 0),
    0
  );
  const berryCostTotal = filteredDeck.reduce(
    (accum, card) => accum + (card.cost.berries ?? 0),
    0
  );
  const appleCostTotal = filteredDeck.reduce(
    (accum, card) => accum + (card.cost.apples ?? 0),
    0
  );
  const cardsThatCostAllThree = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries > 0 && card.cost.carrots > 0
        ? accum + 1
        : accum,
    0
  );
  const appleOnly = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries === 0 && card.cost.carrots === 0
        ? accum + 1
        : accum,
    0
  );
  const carrotOnly = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples === 0 && card.cost.berries === 0 && card.cost.carrots > 0
        ? accum + 1
        : accum,
    0
  );
  const berryOnly = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples === 0 && card.cost.berries > 0 && card.cost.carrots === 0
        ? accum + 1
        : accum,
    0
  );
  const appleAndCarrot = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.carrots > 0 && card.cost.berries === 0
        ? accum + 1
        : accum,
    0
  );
  const berryAndCarrot = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples === 0 && card.cost.berries > 0 && card.cost.carrots > 0
        ? accum + 1
        : accum,
    0
  );
  const appleAndBerry = filteredDeck.reduce(
    (accum, card) =>
      card.cost.apples > 0 && card.cost.berries > 0 && card.cost.carrots === 0
        ? accum + 1
        : accum,
    0
  );

  const createComboFreqRecord = () => {
    const record: Record<string, number> = {};
    for (let apples = 0; apples < 6; apples++) {
      for (let carrots = 0; carrots < 6; carrots++) {
        for (let berries = 0; berries < 6; berries++) {
          const costKeys = [];
          if (apples > 0) {
            costKeys.push(`a${apples}`);
          }
          if (carrots > 0) {
            costKeys.push(`c${carrots}`);
          }
          if (berries > 0) {
            costKeys.push(`b${berries}`);
          }

          const costKey = costKeys.join(" ");

          record[costKey] = 0;
        }
      }
    }
  };

  const costComboFreq = filteredDeck.reduce((accum, card) => {
    const costKeys = [];
    if (card.cost.apples > 0) {
      costKeys.push(`a${card.cost.apples}`);
    }
    if (card.cost.carrots > 0) {
      costKeys.push(`c${card.cost.carrots}`);
    }
    if (card.cost.berries > 0) {
      costKeys.push(`b${card.cost.berries}`);
    }

    // if (costKeys.length <= 1) {
    //   return accum;
    // }
    // if (
    //   card.cost.berries === card.cost.apples &&
    //   card.cost.berries === card.cost.berries
    // ) {
    //   return accum;
    // }

    const costKey = costKeys.join(" ");

    if (accum[costKey]) {
      accum[costKey]++;
    } else {
      accum[costKey] = 1;
    }
    return accum;
  }, {} as Record<string, number>);

  const orderedCostComboFreq = Object.keys(costComboFreq).sort((a, b) =>
    costComboFreq[a] > costComboFreq[b] ? 1 : -1
  );

  console.log({ costComboFreq });

  console.log({ filterState, filteredDeck });

  return (
    <div>
      <div className="filters">
        <div className="card-type-filters">
          {Object.keys(CARD_TYPE).map((c) => (
            <label
              className="card-type-filter"
              htmlFor={`${c}-radio`}
              onClick={() => toggleCardTypeFilter(c as CARD_TYPE)}
            >
              {c}
              <input
                type="radio"
                className="radio"
                checked={filterState.cardType.includes(c as CARD_TYPE)}
              />
            </label>
          ))}
        </div>
        <select
          value={filterState.cost ?? "No Cost selected"}
          name="cost"
          onChange={(e) => setCostFilter(Number(e.target.value))}
        >
          {Array(16)
            .fill(0)
            .map((_, c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
        <button className="button" onClick={() => resetFilters()}>
          Reset
        </button>
      </div>
      <div className="stats">
        <div>total: {filteredDeck.length}</div>
        <hr />
        <div>
          Apples cost: {appleCostTotal}. Avg{" "}
          {Math.round((appleCostTotal / filteredDeck.length) * 100) / 100}
        </div>
        <div>
          Carrot cost: {carrotCostTotal}. Avg{" "}
          {Math.round((carrotCostTotal / filteredDeck.length) * 100) / 100}
        </div>
        <div>
          Berry cost: {berryCostTotal}. Avg{" "}
          {Math.round((berryCostTotal / filteredDeck.length) * 100) / 100}
        </div>
        <div>
          Cards that cost all 3 crops: {cardsThatCostAllThree} /{" "}
          {filteredDeck.length}.
        </div>
        <div>
          Apple only: {appleOnly} / {filteredDeck.length}.
        </div>
        <div>
          Carrot only: {carrotOnly} / {filteredDeck.length}.
        </div>
        <div>
          Berry Only: {berryOnly} / {filteredDeck.length}.
        </div>
        <div>
          Apple and Berry: {appleAndBerry} / {filteredDeck.length}.
        </div>
        <div>
          Carrot and Berry: {berryAndCarrot} / {filteredDeck.length}.
        </div>
        <div>
          Apple and Carrot: {appleAndCarrot} / {filteredDeck.length}.
        </div>
        <hr />
      </div>
      <BarChart
        width={window.innerWidth}
        height={500}
        series={[
          {
            color: "orange",
            label: "Carrots",
            data: costs.map((cost) => costMap.carrots[cost]),
          },
          {
            color: "red",
            label: "Apples",
            data: costs.map((cost) => costMap.apples[cost]),
          },
          {
            color: "purple",
            label: "Berries",
            data: costs.map((cost) => costMap.berries[cost]),
          },
        ]}
        xAxis={[
          {
            label: "Cost",
            data: costs.map((c) => c.toString()),
            scaleType: "band",
          },
        ]}
      />
      <BarChart
        width={window.innerWidth}
        height={500}
        series={[
          {
            color: "green",
            label: "Total",
            data: totalCosts.map((cost) => costMap.total[cost]),
          },
        ]}
        xAxis={[
          {
            label: "Cost",
            data: totalCosts.map((c) => c.toString()),
            scaleType: "band",
          },
        ]}
      />
      <div className="costFreqChart">
        <BarChart
          width={window.innerWidth / 2}
          height={700}
          layout="horizontal"
          grid={{ vertical: true }}
          series={[
            {
              color: "black",
              label: "Total",
              data: orderedCostComboFreq.map((key) => costComboFreq[key]),
            },
          ]}
          yAxis={[
            {
              label: "Cost",
              data: orderedCostComboFreq.map((c) => c.toString()),
              scaleType: "band",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CostGraph;
