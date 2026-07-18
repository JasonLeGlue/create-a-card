export const addCardToFaves = (data) => {
  return fetch("http://localhost:8088/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
