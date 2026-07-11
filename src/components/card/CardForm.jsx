import { useState } from "react";

export const CardForm = () => {
  const [card, setCard] = useState({
    name: "",
    colorlessCost: 0,
    colorCost1: 0,
    colorCost2: 0,
    typeLine: "",
    abilityText: "",
    descriptionText: "",
    quoteText: "",
    imageUrl: "",
    htmlCss: "",
  });

  const editedCard = {
    name: card.name,
    colorlessCost: card.colorlessCost,
    colorCost1: card.colorCost1,
    colorCost2: card.colorCost2,
    typeLine: card.typeLine,
    abilityText: card.abilityText,
    descriptionText: card.descriptionText,
    quoteText: card.quoteText,
    imageUrl: card.imageUrl,
    htmlCss: card.htmlCss,
  };
  return (
    <form>
      <label>Card Name:</label>
      <input
        type="text"
        value={card.name}
        onChange={(event) => {
          const copy = { ...card };
          copy.name = event.target.value;
          setCard(copy);
        }}
        required
      />

      <label>Type Line:</label>
      <input
        type="text"
        value={card.typeLine}
        onChange={(event) => {
          const copy = { ...card };
          copy.typeLine = event.target.value;
          setCard(copy);
        }}
        required
      />

      <label>Ability Text:</label>
      <input
        type="text"
        value={card.abilityText}
        onChange={(event) => {
          const copy = { ...card };
          copy.abilityText = event.target.value;
          setCard(copy);
        }}
        required
      />

      <label>Description Text:</label>
      <input
        type="text"
        value={card.descriptionText}
        onChange={(event) => {
          const copy = { ...card };
          copy.descriptionText = event.target.value;
          setCard(copy);
        }}
        required
      />

      <label>Quote Text:</label>
      <input
        type="text"
        value={card.quoteText}
        onChange={(event) => {
          const copy = { ...card };
          copy.quoteText = event.target.value;
          setCard(copy);
        }}
        required
      />

      <label>Image Url:</label>
      <input
        type="text"
        value={card.imageUrl}
        onChange={(event) => {
          const copy = { ...card };
          copy.imageUrl = event.target.value;
          setCard(copy);
        }}
        required
      />
    </form>
  );
};
