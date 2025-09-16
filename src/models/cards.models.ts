export enum CARD_TYPE {
  Item = "Item",
  Seeds = "Seeds",
  Critter = "Critter",
  Favour = "Favour",
  Reward = "Rewards",
}

export type RESOURCE = "apples" | "carrots" | "berries";

export enum CARD_SUBTYPE {
  Treat = "Treat",
  Finance = "Finance",
  Tool = "Tool",
  Rabbit = "Rabbit",
  Rat = "Rat",
  Mole = "Mole",
  Hedgehog = "Hedgehog",
  Raccoon = "Raccoon",
  Worm = "Worm",
  Bee = "Bee",
  Gift = "Gift",
}

export enum TAGS {
  CARD_DRAW = "Card Draw",
  CROP_GENERATION = "Crop Gain",
  DISCARD_OWN = "Discard from hand",
  DISCOUNT = "Discount",
  FAST_TRACK = "Fast-track",
  RESET_DECK = "Reset Deck",
  CROP_GENERATION_ALL = "Gain all crops",
  CROP_GENERATION_RANDOM = "Gain random crops",
  GIFT = "Gift",
  CROP_DESTROY = "Destroy Crops",
  CROP_STEAL = "Steal crops",
  TOP_OF_DECK = "Place on top of deck",
  SELL = "Sell",
  SELL_FROM_HAND = "Sell from hand",
  SELL_FROM_DISCARD = "Sell from discard",
  FREE_CRATE = "Free Crate",
  REMOVE_ZZZ = "Remove Zzz",
  ADD_ZZZ = "Add Zzz",
  SEED_SYNERGY = "Seed synergy",
  SUNLIGHT_ADD = "Add Sunlight",
  REFRESH = "Refresh",
  FREE_CARD = "Free Card",
  FREE_FAVOUR = "Free Favour",
  CROP_GENERATION_CARROT = "Gain Carrots",
  CROP_GENERATION_BERRY = "Gain Berries",
  CROP_GENERATION_APPLE = "Gain Apples",
  WORK_ORDERS_3 = "Requires 3 Work Orders",
  TRASH = "Trash",
  TRASH_FROM_HAND = "Trash from hand",
  TRASH_FROM_DISCARD = "Trash from discard",
  TREAT_SYNERGY = "Treat synergy",
  TOOL_SYNERGY = "Tool synergy",
  FINANCE_SYNERGY = "Finance Synergy",
  SNATCH_DISCOUNT = "Snatch discounts",
  BOTTOM_OF_DECK = "Add to bottom of deck",
  ADD_TO_HAND = "Add to hand",
}

export interface ICard {
  name: string;
  description?: string | React.ReactNode;
  qty: number;
  image?: string;
  tags?: TAGS[];
  type: CARD_TYPE;
}

export interface IFarmCard extends ICard {
  cost: Record<RESOURCE, number>;
  subtype?: CARD_SUBTYPE;
  buyBonus?: string | React.ReactNode;
  recycle?: string | React.ReactNode;
  holdable?: boolean;
  sellable?: boolean;
  unsellable?: boolean;
  sunlight?: {
    one?: string | React.ReactNode;
    two?: string | React.ReactNode;
    three?: string | React.ReactNode;
  };
  energy?: number;
  type: CARD_TYPE.Critter | CARD_TYPE.Item | CARD_TYPE.Seeds;
}

export interface IFavourCard extends ICard {
  type: CARD_TYPE.Favour;
}

export interface IRewardCard extends ICard {
  type: CARD_TYPE.Reward;
}

export interface IWorkOrder {
  name: string;
  image: string;
  qty: number;
  victoryPoints: number;
  requirement: {
    carrots: number;
    berries: number;
    apples: number;
  };
  cost: {
    carrots: number;
    berries: number;
    apples: number;
  };
  turnLimit: number;
  reward: string;
}
