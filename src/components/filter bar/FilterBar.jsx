import { getColorManaCosts } from "../../services/costService.js";
import { useState, useEffect } from "react";
export const FilterBar = ({ setSearchTerm, setManaFilter }) => {
  const [colorMana, setColorMana] = useState([]);

  useEffect(() => {
    getColorManaCosts().then(setColorMana);
  }, []);

  return (
    <div className="filter-bar">
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Cards"
        className="cardSearch"
      ></input>
      <label htmlFor="manaFilter">Filter by mana type:</label>
      <select
        id="manaFilter"
        name="manaFilter"
        onChange={(event) => {
          setManaFilter(event.target.value);
        }}
      >
        <option key="0" value="0">
          Filter by mana type:
        </option>
        {colorMana.map((mana) => (
          <option key={mana.id} value={mana.id}>
            {mana.description}
          </option>
        ))}
      </select>
    </div>
  );
};
