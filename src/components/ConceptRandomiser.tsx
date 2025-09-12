import * as React from "react";

const conceptList = [
  "Refund from hand",
  "Refund from discard",
  "Remove card from the game",
  "Gain berries",
  "Gain carrots",
  "Gain Apples",
  "Gain random crops",
  "Discard from hand",
  "Discard from deck",
  "Steal a crop",
  "Snatch a discounted crop",
  "Refresh a card",
  "Add Zzz counter",
  "Remove Zzz counter",
  "Add sunlight",
  "Draw a card",
  "Draw 2 cards",
  "Reset deck",
  "Shuffle into deck",
  "Place on top of deck",
  //   "Gift",
  "Destroy crops",
  //   "Pack a crate",
  "Draw from discard pile",
  "Discount the shop",
  "Free favours",
  "Put in discard pile from shop",
];

const ConceptRandomiser = () => {
  const [concepts, setConcepts] = React.useState<string[]>([]);

  const randomise = React.useCallback(() => {
    const idxOne = Math.round(Math.random() * conceptList.length);
    const idxTwo = Math.round(Math.random() * conceptList.length);
    const itemOne = conceptList[idxOne];
    const itemTwo = conceptList[idxTwo];
    console.log(idxOne, idxTwo);

    setConcepts([itemOne, itemTwo]);
  }, []);

  React.useEffect(() => {
    randomise();
  }, [randomise]);

  console.log({ concepts });

  return (
    <div>
      <h1>Concept Randomiser</h1>
      <button onClick={() => randomise()}>Click me</button>
      <h3>
        {concepts[0]} + {concepts[1]}
      </h3>
    </div>
  );
};

export default ConceptRandomiser;
