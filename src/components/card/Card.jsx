import "./Card.css";

export const Card = ({ cardObj }) => {
  const colorlessCostString = String(cardObj.colorlessCost);
  const finalColorlessCost = colorlessCostString.replaceAll(/'/g, '"');
  return (
    <>
      <div className="cardContainer">
        <div className="topLine">
          <div className="cardName">{cardObj.name}</div>
          <div className="cardCost">
            {finalColorlessCost}
            {cardObj.colorCost1}
            {cardObj.colorCost2}
          </div>
        </div>
        <div className="centerContent">
          <img className="cardImage" src={cardObj.imgUrl} />
          <div className="textContainer">
            {cardObj.typeLine.replaceAll("'", '"')}
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
