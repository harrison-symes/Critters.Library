import { IVisitorCard } from "../../models/cards.models";
import "./cards.scss";

interface IProps {
  card: IVisitorCard;
}

const VisitorCard = (props: IProps) => {
  return (
    <div className="card card--favour">
      <div className="card__name">{props.card.name}</div>
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

export default VisitorCard;
