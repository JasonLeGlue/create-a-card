import "./Card.css";
import { getManaObjById } from "../../services/costService.js";
import { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser/lib/index";

export const Card = ({ cardObj }) => {
  const [colorlessMana, setColorlessMana] = useState({});
  const [colorMana1, setColorMana1] = useState({});
  const [colorMana2, setColorMana2] = useState({});
  const [colorMana3, setColorMana3] = useState({});

  useEffect(() => {
    getManaObjById(cardObj.colorlessCost).then(setColorlessMana);
    getManaObjById(cardObj.colorCost1).then(setColorMana1);
    getManaObjById(cardObj.colorCost2).then(setColorMana2);
    getManaObjById(cardObj.colorCost3).then(setColorMana3);
  });

  return (
    <>
      <div className="cardContainer">
        <div className="topLine">
          <div className="cardName">{cardObj.name}</div>
          <div className="cardCost">
            <i className={colorlessMana.icon}></i>
            <i className={colorMana1.icon}></i>
            <i className={colorMana2.icon}></i>
            <i className={colorMana3.icon}></i>
          </div>
        </div>
        <div className="centerContent">
          <img className="cardImage" src={cardObj.imgUrl} />
          <div className="textContainer">
            {cardObj.typeLine}
            {cardObj.abilityText}
            {cardObj.descriptionText}
            {cardObj.quoteText}
          </div>
        </div>
        <div className="bottomLine">
          <a className="creatorUsername"></a>
          <div className="powerToughness">
            <p>
              {cardObj.power}
              {cardObj.toughness}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
