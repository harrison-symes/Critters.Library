import * as React from "react";
import { ICard } from "../../models/cards.models";
import { BarChart } from "@mui/x-charts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface IProps {
  deck: ICard[];
}

export function medianSorted(xs: number[] = []): number {
  const orderedList = xs.sort((a, b) => (a > b ? 1 : -1));
  const n = orderedList.length;
  if (n === 0) return n;
  const m = n >> 1; // floor(n/2)
  return n % 2 ? orderedList[m] : (orderedList[m - 1] + orderedList[m]) / 2;
}

interface CostData {
  freq: Record<number, number>;
  sum: number;
  list: number[];
}

const CostBarChart = (props: IProps) => {
  const createCostMap = (deck: ICard[]) => {
    return deck.reduce(
      (accum, card) => {
        const totalCost =
          (card.cost.berries ?? 0) +
          (card.cost.apples ?? 0) +
          (card.cost.carrots ?? 0);
        let max = accum.max;
        let totalMax = accum.totalMax;

        const applyCost = (obj: CostData, cost: number = 0) => {
          if (cost > max) max = cost;
          if (obj.freq[cost] === undefined) {
            obj.freq[cost] = 1;
          } else {
            obj.freq[cost]++;
          }
          obj.list.push(cost);
          obj.sum += cost;
        };

        const { apples, carrots, berries, total } = accum;

        applyCost(apples, card.cost.apples);
        applyCost(berries, card.cost.berries);
        applyCost(carrots, card.cost.carrots);

        if (total.freq[totalCost] === undefined) {
          total.freq[totalCost] = 1;
        } else {
          total.freq[totalCost]++;
        }

        if (totalCost > totalMax) totalMax = totalCost;

        accum.max = max;
        accum.totalMax = totalMax;
        accum.total.sum += totalCost;
        accum.total.list.push(totalCost);

        return accum;
      },
      {
        apples: {
          freq: {},
          sum: 0,
          list: [],
        },
        carrots: {
          freq: {},
          sum: 0,
          list: [],
        },
        berries: {
          freq: {},
          sum: 0,
          list: [],
        },
        total: {
          freq: {},
          sum: 0,
          list: [],
        },
        max: 0,
        totalMax: 0,
        sumTotal: 0,
        totalCosts: [],
      } as {
        total: CostData;
        carrots: CostData;
        apples: CostData;
        berries: CostData;
        max: number;
        totalMax: number;
      }
    );
  };
  const costMap = React.useMemo(() => createCostMap(props.deck), [props.deck]);

  const costs = new Array(costMap.max).fill(0).map((_, i) => i + 1);
  const totalCosts = new Array(costMap.totalMax).fill(0).map((_, i) => i + 1);

  const averageTotalCost = costMap.total.sum / props.deck.length;
  const medianTotalCost = medianSorted(costMap.total.list ?? []);

  console.log(costMap);

  return (
    <>
      <div className="stats__graph">
        <div className="stats__graph__title">Crop Cost (per crop)</div>
        <BarChart
          height={350}
          series={[
            {
              color: "orange",
              label: "Carrots",
              data: costs.map((cost) => costMap.carrots.freq[cost]),
            },
            {
              color: "lightgreen",
              label: "Apples",
              data: costs.map((cost) => costMap.apples.freq[cost]),
            },
            {
              color: "violet",
              label: "Berries",
              data: costs.map((cost) => costMap.berries.freq[cost]),
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
        <Table>
          <TableHead>
            <TableCell>Crop</TableCell>
            <TableCell>Median</TableCell>
            <TableCell>Average</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>🍏</TableCell>
              <TableCell>
                {medianSorted(costMap.apples.list).toFixed(2)}
              </TableCell>
              <TableCell>
                {(costMap.apples.sum / props.deck.length).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>🫐</TableCell>
              <TableCell>
                {medianSorted(costMap.berries.list).toFixed(2)}
              </TableCell>
              <TableCell>
                {(costMap.berries.sum / props.deck.length).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>🥕</TableCell>
              <TableCell>
                {medianSorted(costMap.carrots.list).toFixed(2)}
              </TableCell>
              <TableCell>
                {(costMap.carrots.sum / props.deck.length).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="stats__graph">
        <div className="stats__graph__title">Crop Cost (total crops)</div>
        <BarChart
          // width={window.innerWidth}
          height={350}
          series={[
            {
              color: "lightblue",
              label: "Total",
              data: totalCosts.map((cost) => costMap.total.freq[cost]),
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
        <Table>
          <TableHead>
            <TableCell>Median</TableCell>
            <TableCell>Average</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {medianSorted(costMap.total.list).toFixed(2)}
              </TableCell>
              <TableCell>
                {(costMap.total.sum / props.deck.length).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CostBarChart;
