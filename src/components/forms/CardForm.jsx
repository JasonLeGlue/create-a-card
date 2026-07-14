import { useState, useEffect } from "react";
import {
  getColorManaCosts,
  getColorlessManaCosts,
} from "../../services/costService.js";
import { createCard } from "../../services/cardService.js";

import { Card } from "../card/Card.jsx";
import { getCardById } from "../../services/cardService.js";

export const CardForm = () => {
  const [card, setCard] = useState({
    name: "",
    colorlessCost: 0,
    colorCost1: 0,
    colorCost2: 0,
    colorCost3: 0,
    typeLine: "",
    abilityText: "",
    descriptionText: "",
    quoteText: "",
    imageUrl: "",
    htmlCss: "",
    power: 0,
    toughness: 0,
  });

  const [cardObj, setCardObj] = useState({
    name: "",
    colorlessCost: 0,
    colorCost1: 0,
    colorCost2: 0,
    colorCost3: 0,
    typeLine: "",
    abilityText: "",
    descriptionText: "",
    quoteText: "",
    imageUrl: "",
    htmlCss: "",
    power: 0,
    toughness: 0,
  });

  const [colorlessManaCosts, setColorlessManaCosts] = useState([]);
  const [colorManaCosts, setColorManaCosts] = useState([]);

  useEffect(() => {
    getColorlessManaCosts().then(setColorlessManaCosts);
    getColorManaCosts().then(setColorManaCosts);
    getCardById(2).then(setCardObj);
  }, []);

  //navigate to card details page when created
  const handleCreation = (event) => {
    const editedCard = {
      name: card.name,
      colorlessCost: card.colorlessCost,
      colorCost1: card.colorCost1,
      colorCost2: card.colorCost2,
      colorCost3: card.colorCost3,
      typeLine: card.typeLine,
      abilityText: card.abilityText,
      descriptionText: card.descriptionText,
      quoteText: card.quoteText,
      imageUrl: card.imageUrl,
      htmlCss: card.htmlCss,
      power: card.power,
      toughness: card.toughness,
    };

    createCard(editedCard);
  };

  return (
    <>
      <Card cardObj={cardObj} />;<i className="ms ms-2 ms-cost"></i>
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

        <label>Colorless Mana Cost:</label>
        <select
          onChange={(event) => {
            const copy = { ...card };
            copy.colorlessCost = event.target.value;
            setCard(copy);
          }}
        >
          <option key="0" value="">
            None
          </option>
          {colorlessManaCosts.map((cost) => (
            <option key={cost.id} value={cost.id}>
              {cost.description}
            </option>
          ))}
        </select>

        <label>Color Mana Cost 1:</label>
        <select
          onChange={(event) => {
            const copy = { ...card };
            copy.colorCost1 = event.target.value;
            setCard(copy);
          }}
        >
          <option key="0" value="">
            None
          </option>
          {colorManaCosts.map((cost) => (
            <option key={cost.id} value={cost.id}>
              {cost.description}
            </option>
          ))}
        </select>

        <label>Color Mana Cost 2:</label>
        <select
          onChange={(event) => {
            const copy = { ...card };
            copy.colorCost2 = event.target.value;
            setCard(copy);
          }}
        >
          <option key="0" value="">
            None
          </option>
          {colorManaCosts.map((cost) => (
            <option key={cost.id} value={cost.id}>
              {cost.description}
            </option>
          ))}
        </select>

        <label>Color Mana Cost 3:</label>
        <select
          onChange={(event) => {
            const copy = { ...card };
            copy.colorCost3 = event.target.value;
            setCard(copy);
          }}
        >
          <option key="0" value="">
            None
          </option>
          {colorManaCosts.map((cost) => (
            <option key={cost.id} value={cost.id}>
              {cost.description}
            </option>
          ))}
        </select>

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
        <label>Power:</label>
        <input
          type="number"
          value={card.power}
          onChange={(event) => {
            const copy = { ...card };
            copy.power = event.target.value;
            setCard(copy);
          }}
        />

        <label>Toughness:</label>
        <input
          type="number"
          value={card.toughness}
          onChange={(event) => {
            const copy = { ...card };
            copy.toughness = event.target.value;
            setCard(copy);
          }}
        />
        <button onClick={handleCreation}>Create Card</button>
      </form>
    </>
  );
};
