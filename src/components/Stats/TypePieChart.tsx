import { PieChart, PieValueType } from "@mui/x-charts";
import { useAppSelector } from "../../store/hooks";
import { CARD_SUBTYPE, CARD_TYPE } from "../../models/cards.models";
import {
  getFilteredDuplicatesFarmDeck,
  getFilteredDuplicatesFavourDeck,
  getFilteredDuplicatesRewardDeck,
} from "../../store/deck.selectors";

const mapTypeToColour: Record<CARD_TYPE, string> = {
  [CARD_TYPE.Critter]: "#E5A9A9",
  [CARD_TYPE.Item]: "#FBD589",
  [CARD_TYPE.Seeds]: "#A9E5BB",
  [CARD_TYPE.Favour]: "#9DF7E5",
  [CARD_TYPE.Reward]: "#FCF6B1",
  [CARD_TYPE.WorkOrder]: "",
  [CARD_TYPE.Visitor]: "",
};

const TypePieChart = () => {
  const farmDeck = useAppSelector(getFilteredDuplicatesFarmDeck);
  const favourDeck = useAppSelector(getFilteredDuplicatesFavourDeck);
  const rewardDeck = useAppSelector(getFilteredDuplicatesRewardDeck);

  const makeData = (type: CARD_TYPE): PieValueType => {
    return {
      id: type,
      value:
        farmDeck.filter((card) => card.type === type).length +
        favourDeck.filter((card) => card.type === type).length +
        rewardDeck.filter((card) => card.type === type).length,
      label: type,
      color: mapTypeToColour[type],
    };
  };

  return (
    <PieChart
      margin={{
        top: 24,
      }}
      height={350}
      series={[
        {
          arcLabel: (thing) => `${thing.label}: ${thing.value}`,
          data: Object.values(CARD_TYPE)
            .map((type) => makeData(type))
            .filter((thing) => thing.value !== 0),
        },
      ]}
    />
  );
};

export const SubTypePieChart = () => {
  const farmDeck = useAppSelector(getFilteredDuplicatesFarmDeck);

  const makeData = (type: CARD_SUBTYPE): PieValueType => {
    return {
      id: type,
      value: farmDeck.filter((card) => card.subtype === type).length,
      label: type,
    };
  };

  return (
    <PieChart
      height={350}
      series={[
        {
          data: Object.values(CARD_SUBTYPE).map((type) => makeData(type)),
        },
      ]}
    />
  );
};

export default TypePieChart;
