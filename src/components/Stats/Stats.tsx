import * as React from "react";
import { ICard } from "../../models/cards.models";

import "./stats.scss";
import CostBarChart from "./CostBarChart";
import CostFrequencyChart from "./CostFrequencyChart";
import CropCostBreakdown from "./CropCostBreakdown";

interface IStatsProps {
  deck: ICard[];
}

const Stats = (props: IStatsProps) => {
  return (
    <div className="stats">
      <CostBarChart deck={props.deck} />
      <CostFrequencyChart deck={props.deck} />
      <CropCostBreakdown deck={props.deck} />
    </div>
  );
};

export default Stats;
