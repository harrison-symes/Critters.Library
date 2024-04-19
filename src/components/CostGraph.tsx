import * as React from "react";
// import rd3 from "react-d3-library";
import * as d3 from "d3";
import { CARD_TYPE, ICard } from "../models/cards.models";
import { createDeck } from "../cards";
import { BarChart } from "@mui/x-charts/BarChart";

interface IProps {
  deck: ICard[];
}

const CostGraph = (props: IProps) => {
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

  const costMap = createCostMap(props.deck);

  const costs = new Array(costMap.max).fill(0).map((_, i) => i + 1);
  const totalCosts = new Array(costMap.totalMax).fill(0).map((_, i) => i + 1);
  return (
    <div>
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
    </div>
  );
};

export default CostGraph;
