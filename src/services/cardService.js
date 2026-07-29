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
  return fetch(`http://localhost:8088/cards/${cardId}?_expand=user`).then(
    (res) => res.json(),
  );
};

export const deleteCardById = (cardId) => {
  return fetch(`http://localhost:8088/cards/${cardId}`, {
    method: "DELETE",
  });
};

export const getRecentCards = (limit) => {
  return fetch(
    `http://localhost:8088/cards/?_sort=id&_order=desc&_limit=${limit}&_expand=user`,
  ).then((res) => res.json());
};

export const getCollectionByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/cards?userId=${userId}&_expand=user`,
  ).then((res) => res.json());
};
