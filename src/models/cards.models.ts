export enum CARD_TYPE {
  Item = "Item",
  Seeds = "Seeds",
  Construct = "Construct",
  Rabbit = "Rabbit",
  Rat = "Rat",
  Mole = "Mole",
  Hedgehog = "Hedgehog",
  Raccoon = "Raccoon",
  Worm = "Worm",
  Caterpillar = "Caterpillar",
  BumbleBee = "Bumblebee",
  Action = "Action",
}

export enum RESOURCE {
  CARROT = "carrots",
  APPLE = "apples",
  BERRY = "berries",
  ANY = "any",
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
  type: CARD_TYPE;
  energy?: number;
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
