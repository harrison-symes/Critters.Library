import { IWorkOrder } from "../../models/cards.models";
import "./cards.scss";
import CropCost from "./CropCost";

interface IProps {
  card: IWorkOrder;
  isMarketSim?: boolean;
}

const WorkOrderCard = (props: IProps) => {
  return (
    <div className="card card--work-order">
      <div className="card__name">
        {props.card.name}{" "}
        {props.card.qty > 1 && !props.isMarketSim && <>(x{props.card.qty})</>}
      </div>
      <div className="card__special__container">
        <div className="card__cost__container">
          <CropCost costs={props.card.cost} crop="apples" />
          <CropCost costs={props.card.cost} crop="berries" />
          <CropCost costs={props.card.cost} crop="carrots" />
        </div>
      </div>
      <div className="card__description__container">
        <div className="card__description__block card__description__block">
          <span className="card__description__icon">1 📦 = </span>
          <span className="card__description__text">
            <CropCost costs={props.card.crateCost} crop="apples" />
            <CropCost costs={props.card.crateCost} crop="berries" />
            <CropCost costs={props.card.crateCost} crop="carrots" />
          </span>
        </div>
        <div className="card__description__block card__description__block">
          <span className="card__description__icon">
            {props.card.crateAmount}x 📦 ={" "}
          </span>
          <span className="card__description__text">
            <span>
              1 <b>🏆Reward</b> card.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderCard;
