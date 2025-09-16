import { IFarmCard } from "../../models/cards.models";
import "./cards.scss";

interface IProps {
  card: IFarmCard;
}

const RewardCard = (props: IProps) => {
  return (
    <div className="card card--farm-card">
      <div className="card__name">{props.card.name}</div>
      <div className="card__description__container">
        <div className="card__description__block">{props.card.description}</div>
      </div>
      <div className="card__footer">
        <div className="card__footer__left"></div>
        <div className="card__footer__right"></div>
      </div>
    </div>
  );
};

export default RewardCard;
