export enum CARD_TYPE {
  Item = "Item",
  Seeds = "Seeds",
  Rabbit = "Rabbit",
  Rat = "Rat",
  Mole = "Mole",
  Hedgehog = "Hedgehog",
  Raccoon = "Raccoon",
  Worm = "Worm",
  Bee = "Bee",
  Favour = "Favour",
  Reward = "Rewards",
  Machine = "Machine",
}

export enum RESOURCE {
  CARROT = "carrots",
  APPLE = "apples",
  BERRY = "berries",
  ANY = "any",
}

export enum CARD_SUBTYPE {
  TREAT = "Treat",
  FINANCE = "Finance",
  TOOL = "Tool",
  GIFT = "Gift",
}

export enum TAGS {
  CARD_DRAW = "CARD_DRAW",
  CROP_GENERATION = "CROP_GENERATION",
  DISCARD_OWN = "DISCARD_OWN",
  DISCOUNT = "DISCOUNT",
  SHUFFLE_CARDS = "SHUFFLE_CARDS",
  RESET_DECK = "RESET_DECK",
  ATTACH = "ATTACH",
  CROP_GENERATION_ALL = "CROP_GENERATION_ALL",
  CROP_GENERATION_RANDOM = "CROP_GENERATION_RANDOM",
  GIFT = "GIFT",
  CROP_DESTROY = "CROP_DESTROY",
  CANTRIP = "CANTRIP",
  CROP_STEAL = "CROP_STEAL",
  TOP_OF_DECK = "TOP_OF_DECK",
  REFUND = "REFUND",
  REFUND_FROM_HAND = "REFUND_FROM_HAND",
  REFUND_FROM_DISCARD = "REFUND_FROM_DISCARD",
  PACK_CRATE = "PACK_CRATE",
  ENERGY_RESTORE = "ENERGY_RESTORE",
  ENERGY_REMOVE = "ENERGY_REMOVE",
  SEED_SYNERGY = "SEED_SYNERGY",
  SUNLIGHT_ADD = "SUNLIGHT_ADD",
  REFRESH_SHOP = "REFRESH_SHOP",
  FREE_CARD = "FREE_CARD",
  FAVOURS = "FAVOURS",
  CROP_GENERATION_CARROT = "CROP_GENERATION_CARROT",
  CROP_GENERATION_BERRY = "CROP_GENERATION_BERRY",
  CROP_GENERATION_APPLE = "CROP_GENERATION_APPLE",
  TREAT_SYNERGY = "TREAT_SYNERGY",
  WORK_ORDERS_3 = "WORK_ORDERS_3",
}

export interface ICard {
  name: string;
  description?: string;
  qty: number;
  image?: string;
  cost: {
    [RESOURCE.APPLE]: number;
    [RESOURCE.CARROT]: number;
    [RESOURCE.BERRY]: number;
    [RESOURCE.ANY]?: number;
  };
  tags?: TAGS[];
  type: CARD_TYPE;
  subtype?: CARD_SUBTYPE;
  energy?: number;
  victoryPoints?: number;
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
