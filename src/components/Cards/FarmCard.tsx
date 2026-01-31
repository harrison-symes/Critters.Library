import {
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  RESOURCE,
} from "../../models/cards.models";
import cn from "classnames";
import "./cards.scss";
import CropCost from "./CropCost";
import { useAppSelector } from "../../store/hooks";
import {
  getAreDesignNotesVisible,
  getShouldShowAiColouredImages,
} from "../../store/filtersSlice";

interface IProps {
  card: IFarmCard;
}

const getCardTypeIcon = (type: CARD_TYPE) => {
  switch (type) {
    case CARD_TYPE.Critter:
      return "🐾";
    case CARD_TYPE.Item:
      return "🎒";
    case CARD_TYPE.Seeds:
      return "🌱";
    default:
      return "";
  }
};

const getSubtypeIcon = (type?: CARD_SUBTYPE) => {
  switch (type) {
    case CARD_SUBTYPE.Finance:
      return "🏦";
    case CARD_SUBTYPE.Gift:
      return "🎁";
    case CARD_SUBTYPE.Tool:
      return "🛠️";
    case CARD_SUBTYPE.Treat:
      return "🧁";
    case CARD_SUBTYPE.Starter:
      return "🏠";
    default:
      return "";
  }
};

const FarmCard = (props: IProps) => {
  const areDesignNotesVisible = useAppSelector(getAreDesignNotesVisible);
  const shouldShowAiColouredImages = useAppSelector(
    getShouldShowAiColouredImages
  );
  const image =
    shouldShowAiColouredImages && props.card.ai_image
      ? props.card.ai_image
      : props.card.image;

  return (
    <div className="card card--farm-card">
      <div className="card__name">
        {props.card.name} {props.card.qty > 1 && <>(x{props.card.qty})</>}
      </div>
      {areDesignNotesVisible && props.card.notes && !image ? (
        <div className="card__notes__container">
          <div className="card__notes__text">{props.card.notes}</div>
        </div>
      ) : (
        <div
          className={cn("card__image__container", {
            "card__image__container--overlay":
              props.card.type === CARD_TYPE.Critter,
          })}
        >
          <img
            className="card__image"
            alt={image}
            src={`/images/${props.card.type.toLowerCase()}${image}`}
          />
        </div>
      )}
      <div className="card__image__spacer"></div>
      <div className="card__special__container">
        {props.card.holdable && <div className="card__special">Holdable</div>}
        {props.card.refundable && (
          <div className="card__special">Refundable</div>
        )}
        {props.card.unsellable && (
          <div className="card__special">Unsellable</div>
        )}
        {props.card.debris && <div className="card__special">Debris</div>}
        <div className="card__cost__container">
          <CropCost costs={props.card.cost} crop="apples" />
          <CropCost costs={props.card.cost} crop="berries" />
          <CropCost costs={props.card.cost} crop="carrots" />
        </div>
      </div>
      <div className="card__description__container">
        <div
          className={cn("card__description__block", {
            "card__description__block--solo":
              props.card.type !== CARD_TYPE.Critter,
          })}
        >
          {props.card.type === CARD_TYPE.Critter && (
            <span className="card__description__icon">
              {props.card.isWatcher ? "👀" : "⤵️"}
            </span>
          )}
          <span className={cn("card__description__text")}>
            {props.card.description}
          </span>
        </div>
        {props.card.recycle && (
          <div className="card__description__block">
            <span className="card__description__icon">♻️</span>
            <span className="card__description__text">
              {props.card.recycle}
            </span>
          </div>
        )}
        {props.card.buyBonus && (
          <div className="card__description__block">
            <span className="card__description__icon">💰</span>
            <span className="card__description__text">
              {props.card.buyBonus}
            </span>
          </div>
        )}
        {props.card.sunlight && (
          <div className="card__description__block card__description__block--sunlight">
            {props.card.sunlight.one && (
              <div className="card__description__sunlight">
                <span>1☀️ - </span>
                <span>{props.card.sunlight.one}</span>
              </div>
            )}
            {props.card.sunlight.two && (
              <div className="card__description__sunlight">
                <span>2☀️ - </span>
                <span>{props.card.sunlight.two}</span>
              </div>
            )}
            {props.card.sunlight.three && (
              <div className="card__description__sunlight">
                <span>3☀️ - </span>
                <span>{props.card.sunlight.three}</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card__footer">
        <div className="card__footer__left">
          <div className="card__type" title={props.card.type}>
            {getCardTypeIcon(props.card.type)}
          </div>
        </div>
        <div className="card__footer__middle">
          <div className="card__footer__flavour">{props.card.flavour}</div>
        </div>
        <div className="card__footer__right">
          {props.card.type === CARD_TYPE.Critter ? (
            <div className="card__energy">{props.card.energy}💚</div>
          ) : (
            <div className="card__type" title={props.card.subtype}>
              {getSubtypeIcon(props.card.subtype)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
