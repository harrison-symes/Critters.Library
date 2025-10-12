import { IRewardCard } from "../../models/cards.models";
import "./cards.scss";

interface IProps {
  card: IRewardCard;
}

const RewardCard = (props: IProps) => {
  return (
    <div className="card card--reward">
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
        <div className="card__footer__right">+1 🏆</div>
      </div>
    </div>
  );
};

export default RewardCard;
