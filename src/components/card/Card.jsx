export const Card = ({ cardObj }) => {
  return (
    <div className="cardContainer">
      <div className="topLine">
        <div className="cardName">{cardObj.name}</div>
        <div className="cardCost">
          {cardObj.colorlessCost}
          {cardObj.colorCost1}
          {cardObj.colorCost2}
        </div>
      </div>
      <div className="centerContent">
        <img className="cardImage">{cardObj.imgUrl}</img>
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
  );
};
