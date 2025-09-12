import { CARD_TYPE, CARD_SUBTYPE } from "../../models/cards.models";
import CardTypeFilters, {
  CardSubTypeFilter,
  CardTypeFilter,
} from "./CardTypeFilters";
import CropFilters from "./CropFilters";
import EffectFilters from "./EffectFilters";

import "./filters.scss";
import FiltersGroup from "./FiltersGroup";
import TagFilters from "./TagFilters";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__container">
        <FiltersGroup title="Type">
          {Object.values(CARD_TYPE).map((type) => (
            <CardTypeFilter key={type} type={type} />
          ))}
        </FiltersGroup>
        <FiltersGroup title="Subtype">
          {Object.values(CARD_SUBTYPE).map((type) => (
            <CardSubTypeFilter key={type} type={type} />
          ))}
        </FiltersGroup>
        <CropFilters />
        <EffectFilters />
      </div>
      <div className="filters__container">
        <TagFilters />
      </div>
    </div>
  );
};

export default Filters;
