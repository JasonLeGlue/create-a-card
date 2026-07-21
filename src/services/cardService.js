export const createCard = (cardObj) => {
  return fetch("http://localhost:8088/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardObj),
  });
};
export const getCardById = (cardId) => {
  return fetch(`http://localhost:8088/cards/${cardId}`).then((res) =>
    res.json(),
  );
};

export const deleteCardById = (cardId) => {
  return fetch(`http://localhost:8088/cards/${cardId}`, {
    method: "DELETE",
  });
};

export const getRecentCards = () => {
  return fetch(
    "http://localhost:8088/cards/?_sort=id&_order=desc&_limit=20",
  ).then((res) => res.json());
};
