import { IFarmCard, IFavourCard, IRewardCard } from "../../models/cards.models";
import "./cards.scss";

interface IProps {
  card: IFavourCard;
}

const FavourCard = (props: IProps) => {
  return (
    <div className="card card--favour">
      <div className="card__name">
        {props.card.name} {props.card.qty > 1 && <>(x{props.card.qty})</>}
      </div>
      <div className="card__description__container">
        <div className="card__description__block card__description__block--solo">
          {props.card.description}
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__left"></div>
      </div>
    </div>
  );
};

export default FavourCard;
