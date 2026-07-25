export const addCardToFaves = (data) => {
  return fetch("http://localhost:8088/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getFavesByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/favorites?userId=${userId}&_expand=card`,
  ).then((res) => res.json());
};
