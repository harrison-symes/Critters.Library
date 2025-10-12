import { IFarmCard, IFavourCard, IRewardCard } from "../../models/cards.models";
import {
  getAreDesignNotesVisible,
  getShouldShowAiColouredImages,
} from "../../store/filtersSlice";
import { useAppSelector } from "../../store/hooks";
import "./cards.scss";

interface IProps {
  card: IFavourCard;
}

const FavourCard = (props: IProps) => {
  const areDesignNotesVisible = useAppSelector(getAreDesignNotesVisible);
  const shouldShowAiColouredImages = useAppSelector(
    getShouldShowAiColouredImages
  );
  const image =
    shouldShowAiColouredImages && props.card.ai_image
      ? props.card.ai_image
      : props.card.image;

  return (
    <div className="card card--favour">
      <div className="card__name">
        {props.card.name} {props.card.qty > 1 && <>(x{props.card.qty})</>}
      </div>
      {areDesignNotesVisible && props.card.notes && !image ? (
        <div className="card__notes__container">
          <div className="card__notes__text">{props.card.notes}</div>
        </div>
      ) : (
        <div className="card__image__container">
          <img
            className="card__image"
            alt={image}
            src={`/images/${props.card.type.toLowerCase()}${image}`}
          />
        </div>
      )}
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
