import { IMaskCard } from "../../models/cards.models";
import "./cards.scss";

interface IProps {
  card: IMaskCard;
}

const MaskCard = (props: IProps) => {
  return (
    <div className="card card--favour">
      <div className="card__name">{props.card.name}</div>
      <div className="card__description__container">
        <div className="card__description__block">
          <span className="card__description__icon">⤵️</span>
          <span className="card__description__text">
            {props.card.description}
          </span>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__left"></div>
      </div>
    </div>
  );
};

export default MaskCard;
