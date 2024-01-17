import * as React from "react";
import { createDeck, createWorkOrderDeck } from "../cards";
import Shop from "./Shop";
import Stats from "./Stats";
import { ICard, IWorkOrder } from "../models/cards.models";

const ShopPage = () => {
  const [deck, setDeck] = React.useState(createDeck());
  const [workOrderDeck, setWorkOrderDeck] = React.useState(
    createWorkOrderDeck()
  );
  const [shopDeck, setShopDeck] = React.useState(
    [...deck].slice(6, deck.length)
  );
  const [workOrders, setWorkOrders] = React.useState(
    [...workOrderDeck].slice(0, 5)
  );

  console.log({ workOrders, workOrderDeck });

  const [shopCards, setShopCards] = React.useState<ICard[]>(
    shopDeck.slice(0, 6)
  );

  // React.useEffect(() => {
  //   const cards: ICard[] = [...shopCards];
  //   const deck = [...shopDeck];

  //   const missingCards = cards.length - 6;
  //   for (let i = 0; i < missingCards; i++) {
  //     const nextCard = deck.pop();

  //     if (nextCard) {
  //       cards.push(nextCard);
  //     }
  //   }

  //   setShopCards(cards);
  //   setShopDeck(deck);
  // }, [shopDeck, shopCards]);

  const removeCard = (card: ICard) => {
    const idx = shopCards.findIndex((c) => c === card);
    const newShopCards = [...shopCards];
    const newShopDeck = [...shopDeck];

    const nextCard = newShopDeck.pop();
    if (nextCard) {
      newShopCards[idx] = nextCard;
    }

    setShopCards(newShopCards);
    setShopDeck(newShopDeck);
  };

  const removeWorkOrder = (card: IWorkOrder) => {
    const idx = workOrders.findIndex((c) => c === card);
    const newWorkCards = [...workOrders];
    const newWorkDeck = [...workOrderDeck];

    const nextCard = newWorkDeck.pop();

    if (nextCard) {
      newWorkCards[idx] = nextCard;
    }

    setWorkOrders(newWorkCards);
    setWorkOrderDeck(newWorkDeck);
  };

  const recreate = () => {
    const newDeck = createDeck();
    setDeck(newDeck);
    setShopDeck([...newDeck].slice(6, newDeck.length));
    setShopCards([...newDeck].slice(0, 6));

    const newWorkOrders = createWorkOrderDeck();
    setWorkOrderDeck([...newWorkOrders].slice(5, newWorkOrders.length));
    setWorkOrders([...newWorkOrders].slice(0, 5));
  };

  return (
    <>
      <div className="container">
        <Shop
          cards={shopCards}
          removeCard={removeCard}
          workOrders={workOrders}
          removeWorkOrder={removeWorkOrder}
        />
        <Stats deck={deck} shopDeck={shopDeck} recreate={recreate} />
      </div>
    </>
  );
};

export default ShopPage;
