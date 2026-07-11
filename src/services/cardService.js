export const createCard = (cardObj) => {
  return fetch("http://localhost:8088/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardObj),
  });
};
