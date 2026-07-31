import { useEffect, useState } from "react";
import { Card } from "../card/Card.jsx";
import { getFavesByUserId } from "../../services/faveService.js";
import { getCardById } from "../../services/cardService.js";
import { FilterBar } from "../filter bar/FilterBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Favorites.css";

export const Favorites = () => {
  const [formattedFaves, setFormattedFaves] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [manaFilter, setManaFilter] = useState(0);

  const getAndSetFaves = async () => {
    const cardUser = JSON.parse(localStorage.getItem("card_user"));
    const favesArray = await getFavesByUserId(cardUser.id);
    const cards = await Promise.all(
      favesArray.map((fave) => getCardById(fave.card.id)),
    );
    setFormattedFaves(cards);
  };

  useEffect(() => {
    getAndSetFaves();
  }, []);

  useEffect(() => {
    const foundCards = formattedFaves.filter(
      (fave) =>
        (fave.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          parseInt(manaFilter) === 0) ||
        fave.colorCost1 === parseInt(manaFilter) ||
        fave.colorCost2 === parseInt(manaFilter) ||
        fave.colorCost3 === parseInt(manaFilter),
    );
    setFilteredCards(foundCards);
  }, [searchTerm, formattedFaves, manaFilter]);

  return (
    <>
      {formattedFaves ? (
        <>
          <h2>Favorites</h2>
          <FilterBar
            setSearchTerm={setSearchTerm}
            setManaFilter={setManaFilter}
          />
          <div className="favoriteCards">
            {filteredCards.map((faveObj) => {
              return (
                <Link to={`/card/${faveObj.id}`} key={faveObj.id}>
                  <Card cardObj={faveObj} />
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
