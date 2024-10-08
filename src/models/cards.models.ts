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
  Action = "Action",
  Reward = "Rewards",
  Machine = "Machine",
}

export enum RESOURCE {
  CARROT = "carrots",
  APPLE = "apples",
  BERRY = "berries",
  ANY = "any",
}

export enum TAGS {
  SEEDS = "seeds",
  CRITTER = "critter",
  CRITTER_2_ENERGY = "critter_2_energy",
  CRITTER_3_ENERGY = "critter_3_energy",
  DRAW_A_CARD = "draw_a_card",
  DRAW_2_CARDS = "draw_2_cards",
  DIVERSE_CROPS = "diverse_crops",
  GAIN_CROP_1 = "1_CROP",
  GAIN_CROP_2 = "2_CROP",
  GAIN_CROP_3 = "3_CROP",
  GAIN_CROP_4 = "4_CROP",
  GAIN_CROP_5 = "5_CROP",
  GAIN_CROP_6 = "6_CROP",
  GAIN_CROP_9 = "9_CROP",
  GAIN_CROP_12 = "GAIN_CROP_12",
  TITULAR = "TITULAR",
  DESTROY_1_CROP = "DESTROY_1_CROP",
  DESTROY_2_CROP = "DESTROY_2_CROP",
  DISRUPT_WORK_ORDER_2 = "DISRUPT_WORK_ORDER_2",
  DESTROY_3_CROP = "DESTROY_3_CROP",
  DESTROY_4_CROP = "DESTROY_4_CROP",
  DESTROY_5_CROP = "DESTROY_5_CROP",
  DESTROY_6_CROP = "DESTROY_6_CROP",
  DISRUPT_WORK_ORDER_4 = "DISRUPT_WORK_ORDER_4",
  REMOVE_ENERGY_1 = "REMOVE_ENERGY_1",
  REMOVE_ENERGY_2 = "REMOVE_ENERGY_2",
  REMOVE_ENERGY_3 = "REMOVE_ENERGY_3",
  DISCARD_OPPONENT_DECK_1 = "DISCARD_OPPONENT_DECK",
  DISCARD_OPPONENT_HAND_1 = "DISCARD_OPPONENT_HAND_2",
  DISCARD_FROM_HAND_1 = "DISCARD_FROM_HAND_1",
  CHOICE = "CHOICE",
  SHUFFLE_DISCARD_TO_DECK = "SHUFFLE_DISCARD_TO_DECK",
  DISCARD_FROM_HAND_2 = "DISCARD_FROM_HAND_2",
  DELAYED = "DELAYED",
  PLACE_ON_TOP_DECK = "PLACE_ON_TOP_DECK",
  CONDITIONAL = "CONDITIONAL",
  CONDITIONAL_MED = "CONDITIONAL_MED",
  TRADE_1_FOR_1 = "TRADE_2_FOR_3",
  REFUND_FROM_HAND = "REFUND_FROM_HAND",
  REFUND_FROM_DISCARD = "REFUND_FROM_DISCARD",
  PACK_WORK_ORDER_2 = "PACK_WORK_ORDER_2",
  DESTROY_1_OWN_CROP = "DESTROY_1_OWN_CROP",
  CONDITIONAL_LRG = "CONDITIONAL_LRG",
  CONDITIONAL_SML = "CONDITIONAL_SML",
  DISCARD_FROM_DECK_2 = "DISCARD_FROM_DECK_2",
  DISCARD_FROM_DECK = "DISCARD_FROM_DECK",
  RESTORE_ENERGY = "RESTORE_ENERGY",
  RESTORE_1_ENERGY_TO_ALL = "RESTORE_ENERGY_TO_ALL",
  RESTORE_ALL_ENERGY = "RESTORE_ALL_ENERGY",
  REFRESH_SHOP_CARD = "REFRESH_SHOP_CARD",
  BOMB = "BOMB",
  EXHAUST = "EXHAUST",
  DISRUPT_WORK_ORDER_1 = "DISRUPT_WORK_ORDER_1",
  RESTORE_ALL_ENERGY_TO_ALL = "RESTORE_ALL_ENERGY_TO_ALL",
  REMOVE_1_ENERGY_FROM_ALL = "REMOVE_1_ENERGY_FROM_ALL",
  PACK_WORK_ORDER_1 = "PACK_WORK_ORDER_1",
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
