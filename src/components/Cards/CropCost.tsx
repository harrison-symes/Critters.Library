import { RESOURCE } from "../../models/cards.models";
import cn from "classnames";

interface ICropCostProps {
  crop: RESOURCE;
  costs: Record<RESOURCE, number>;
}

const mapCropToEmoji: Record<RESOURCE, string> = {
  apples: "🍏",
  berries: "🫐",
  carrots: "🥕",
};

const CropCost = (props: ICropCostProps) => {
  const value = props.costs[props.crop];

  return (
    <div
      className={cn(`card__cost card__cost--${props.crop}`, {
        "card__cost--faded": value === 0,
      })}
    >
      <div className="card__cost__value">{value}</div>
      <div className="card__cost__icon">{mapCropToEmoji[props.crop]}</div>
    </div>
  );
};

export default CropCost;
