import { CARD_SET, CARD_TYPE, IMaskCard } from "../models/cards.models";
import bees from "./critters/bees";
import hedgehogs from "./critters/hedgehogs";
import moles from "./critters/moles";
import rabbits from "./critters/rabbits";
import raccoons from "./critters/raccoons";
import rats from "./critters/rats";
import worms from "./critters/worms";

const masks: Array<IMaskCard> = [
  {
    name: "Rat Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: rats.find((rat) => rat.name === "Price Hiker")?.description,
    tags: [],
  },
  {
    name: "Worm Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: worms.find((worm) => worm.name === "Fertiliser")?.description,
    tags: [],
  },
  {
    name: "Rabbit Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: rabbits.find((rabbit) => rabbit.name === "Crop Picker")
      ?.description,
    tags: [],
  },
  {
    name: "Raccoon Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: raccoons.find((card) => card.name === "Rummager")?.description,
    tags: [],
  },
  {
    name: "Hedgehog Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: hedgehogs.find((card) => card.name === "Picky Eater")
      ?.description,
    tags: [],
  },
  {
    name: "Bee Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: bees.find((card) => card.name === "Worker Bee")?.description,
    tags: [],
  },
  {
    name: "Mole Mask",
    qty: 2,
    set: CARD_SET.AUTUMN_HARVEST,
    type: CARD_TYPE.Mask,
    description: moles.find((card) => card.name === "Saboteur")?.description,
    tags: [],
  },
  // {
  //   name: "",
  //   qty: 0,
  //   set: CARD_SET.AUTUMN_HARVEST,
  //   type: CARD_TYPE.Mask,
  //   description: <span></span>,
  //   tags: [],
  // },
];

export default masks;
