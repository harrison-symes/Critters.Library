import { CARD_TYPE, IWorkOrder } from "../../models/cards.models";
import { getAreDesignNotesVisible } from "../../store/filtersSlice";
import { useAppSelector } from "../../store/hooks";
import "./cards.scss";
import CropCost from "./CropCost";

interface IProps {
  card: IWorkOrder;
  isMarketSim?: boolean;
}

const WorkOrderCard = (props: IProps) => {
    const areDesignNotesVisible = useAppSelector(getAreDesignNotesVisible);
    const image = props.card.image;
        
  return (
    <div className="card card--work-order">
      <div className="card__name">
        {props.card.name}{" "}
        {props.card.qty > 1 && !props.isMarketSim && <>(x{props.card.qty})</>}
      </div>
      {areDesignNotesVisible && props.card.notes && !image ? (
        <div className="card__notes__container">
          <div className="card__notes__text">{props.card.notes}</div>
        </div>
      ) : (
        <div
          className="card__image__container"
        >
          <img
            className="card__image"
            alt={image}
            src={`/images/workOrders/${image}`}
          />
        </div>
      )}
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
