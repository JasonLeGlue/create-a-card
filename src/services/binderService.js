export const addCardToBinder = (data) => {
  return fetch("http://localhost:8088/binders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getBinderByUserId = (userId) => {
  return fetch(
    `http://localhost:8088/binders?userId=${userId}&_expand=card`,
  ).then((res) => res.json());
};

export const deleteBinderByUserIdAndCardId = (userId, cardId) => {
  return fetch(
    `http://localhost:8088/binders?userId=${userId}&cardId=${cardId}`,
    { method: "DELETE" },
  );
};
