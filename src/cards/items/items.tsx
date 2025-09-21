import {
  CARD_SET,
  CARD_SUBTYPE,
  CARD_TYPE,
  IFarmCard,
  TAGS,
} from "../../models/cards.models";
import finance from "./finance";
import gifts from "./gift";
import tools from "./tool";
import treats from "./treat";

const items: IFarmCard[] = [...finance, ...tools, ...treats, ...gifts];

export default items;
