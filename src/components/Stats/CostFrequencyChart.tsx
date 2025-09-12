import { BarChart } from "@mui/x-charts";
import { ICard } from "../../models/cards.models";

interface IProps {
  deck: ICard[];
}

const CostFrequencyChart = (props: IProps) => {
  const costComboFreq = props.deck.reduce((accum, card) => {
    const costKeys = [];
    costKeys.push(`🍏${card.cost.apples}`);
    costKeys.push(`🫐${card.cost.berries}`);
    costKeys.push(`🥕${card.cost.carrots}`);

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

  return (
    <div className="stats__graph">
      <div className="stats__graph__title">Cost Combo Freq</div>
      <BarChart
        height={600}
        layout="horizontal"
        grid={{ vertical: true }}
        margin={{
          left: 100,
        }}
        series={[
          {
            color: "lightblue",
            label: "Total",
            data: orderedCostComboFreq.map((key) => costComboFreq[key]),
          },
        ]}
        yAxis={[
          {
            label: "",
            data: orderedCostComboFreq.map((c) => c.toString()),
            scaleType: "band",
          },
        ]}
      />
    </div>
  );
};

export default CostFrequencyChart;
