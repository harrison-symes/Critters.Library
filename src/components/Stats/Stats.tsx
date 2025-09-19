import "./stats.scss";
import CostBarChart from "./CostBarChart";
import CostFrequencyChart from "./CostFrequencyChart";
import CropCostBreakdown from "./CropCostBreakdown";
import { useAppSelector } from "../../store/hooks";
import { getFilteredDuplicatesFarmDeck } from "../../store/deck.selectors";

const Stats = () => {
  const filteredDuplicatesFarmDeck = useAppSelector(
    getFilteredDuplicatesFarmDeck
  );

  return (
    <div className="stats">
      <CostBarChart deck={filteredDuplicatesFarmDeck} />
      <CostFrequencyChart deck={filteredDuplicatesFarmDeck} />
      <CropCostBreakdown deck={filteredDuplicatesFarmDeck} />
    </div>
  );
};

export default Stats;
