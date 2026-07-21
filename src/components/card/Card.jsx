import "./Card.css";
import { getManaObjById } from "../../services/costService.js";
import { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser/lib/index";

export const Card = ({ cardObj }) => {
  const [colorlessMana, setColorlessMana] = useState("");
  const [colorMana1, setColorMana1] = useState({ icon: "" });
  const [colorMana2, setColorMana2] = useState({ icon: "" });
  const [colorMana3, setColorMana3] = useState({ icon: "" });

  useEffect(() => {
    if (cardObj.id) {
      getManaObjById(cardObj.colorlessCost).then(setColorlessMana);
      getManaObjById(cardObj.colorCost1).then(setColorMana1);
      getManaObjById(cardObj.colorCost2).then(setColorMana2);
      getManaObjById(cardObj.colorCost3).then(setColorMana3);
    }
  }, []);

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
        <div className="imageContainer">
          <img className="cardImage" src={cardObj.imageUrl}></img>
        </div>

        <div className="typeContainer">{cardObj.typeLine}</div>
        <div className="textContainer">
          <p>{cardObj.abilityText}</p>
          <br></br>
          <p>{cardObj.descriptionText}</p>
          <p>"{cardObj.quoteText}"</p>
        </div>
        <div className="bottomLine">
          <a className="creatorUsername">TestName</a>
          <div className="powerToughness">
            <p>
              {cardObj.power} / {cardObj.toughness}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
