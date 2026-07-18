export const addCardToBinder = (data) => {
  return fetch("http://localhost:8088/binders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
