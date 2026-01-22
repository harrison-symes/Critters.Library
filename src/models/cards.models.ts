export enum CARD_TYPE {
  Item = "Item",
  Seeds = "Seeds",
  Critter = "Critter",
  Favour = "Favour",
  Reward = "Rewards",
  WorkOrder = "Work Order",
  Visitor = "Visitor",
  DEBRIS = "Debris",
  Mask = "Mask",
}

export type RESOURCE = "apples" | "carrots" | "berries";

export enum CARD_SET {
  BASE = "Base",
  CHARITY_DRIVE = "Charity Drive",
  WOOD_WORK = "Wood Work",
  AUTUMN_HARVEST = "Autumn Harvest",
}

export enum CARD_SUBTYPE {
  Finance = "Finance",
  Tool = "Tool",
  Treat = "Treat",
  Gift = "Gift",
  Rabbit = "Rabbit",
  Rat = "Rat",
  Mole = "Mole",
  Hedgehog = "Hedgehog",
  Raccoon = "Raccoon",
  Worm = "Worm",
  Bee = "Bee",
  Beaver = "Beaver",
  Starter = "Starter",
  Wittled = "Wittled",
}

export enum TAGS {
  CARD_DRAW = "Card Draw",
  CROP_GENERATION = "Crop Gain",
  DISCARD_OWN = "Discard from hand",
  DISCOUNT = "Discount",
  RESET_DECK = "Reset Deck",
  CROP_GENERATION_ALL = "Gain all crops",
  CROP_GENERATION_RANDOM = "Gain random crops",
  CROP_GENERATION_CHOOSE = "Gain crop (choose)",
  GIFT = "Gift",
  CROP_DESTROY = "Destroy Crops",
  CROP_STEAL = "Steal crops",
  SHUFFLE = "Shuffle",
  SKEWER = "Skewer",
  BURROW = "Burrow",
  ADD_TO_HAND = "Add to hand",
  SELL = "Sell",
  SELL_FROM_HAND = "Sell from hand",
  SELL_FROM_DISCARD = "Sell from discard",
  TRASH = "Trash",
  TRASH_FROM_HAND = "Trash from hand",
  TRASH_FROM_DISCARD = "Trash from discard",
  FREE_CRATE = "Free Crate",
  REMOVE_ZZZ = "Remove 💤Sleepy",
  ADD_ZZZ = "Add 💤Sleepy",
  MOVE_ZZZ = "Move 💤Sleepy",
  SEED_SYNERGY = "🌱Seed synergy",
  PLANT_FROM_DISCARD = "Plant 🌱Seed from discard",
  SUNLIGHT_ADD = "Add ☀️Sunlight",
  SUNLIGHT_REMOVE = "Remove ☀️Sunlight",
  REFRESH = "Refresh",
  FREE_CARD = "Free Card",
  FREE_FAVOUR = "Free Favour",
  CROP_GENERATION_CARROT = "Gain 🥕",
  CROP_GENERATION_BERRY = "Gain 🫐",
  CROP_GENERATION_APPLE = "Gain 🍏",
  WORK_ORDERS_3 = "Requires 3 Work Orders",

  TREAT_SYNERGY = "🧁Treat synergy",
  TOOL_SYNERGY = "🛠️Tool synergy",
  FINANCE_SYNERGY = "🏦Finance Synergy",
  SNATCH_DISCOUNT = "Snatch discounts",
  TRADE = "Trade",
  WORK_ORDER_COMPLETION = "On Work Order complete",
  LESS_REWARDS = "If less rewards",
  DISCARD_RIVAL = "Discard Rival card",
  BUY_FARM_CARD = "On Farm Card buy",
  DOUBLE_SELL = "Double Sell Value",
  CHOOSE_ONE = "Choose one",
  CHEW = "Chew",
  SUGAR_RUSH = "SUGAR_RUSH",
}

export interface ICard {
  name: string;
  description?: string | React.ReactNode;
  qty: number;
  image?: string;
  ai_image?: string;
  tags?: TAGS[];
  type: CARD_TYPE;
  set: CARD_SET;
  flavour?: string;
  notes?: string;
}

export interface IFarmCard extends ICard {
  cost: Record<RESOURCE, number>;
  subtype?: CARD_SUBTYPE;
  buyBonus?: string | React.ReactNode;
  recycle?: string | React.ReactNode;
  holdable?: boolean;
  refundable?: boolean;
  unsellable?: boolean;
  debris?: boolean;
  sunlight?: {
    one?: string | React.ReactNode;
    two?: string | React.ReactNode;
    three?: string | React.ReactNode;
  };
  energy?: number;
  type: CARD_TYPE.Critter | CARD_TYPE.Item | CARD_TYPE.Seeds | CARD_TYPE.DEBRIS;
}

export interface IFavourCard extends ICard {
  type: CARD_TYPE.Favour;
}

export interface IRewardCard extends ICard {
  type: CARD_TYPE.Reward;
}

export interface IWorkOrder extends ICard {
  name: string;
  image: string;
  qty: number;
  cost: Record<RESOURCE, number>;
  crateCost: Record<RESOURCE, number>;
  crateAmount: number;
  set: CARD_SET;
  type: CARD_TYPE.WorkOrder;
}

export interface IVisitorCard extends ICard {
  type: CARD_TYPE.Visitor;
}

export interface IMaskCard extends ICard {
  type: CARD_TYPE.Mask;
}
