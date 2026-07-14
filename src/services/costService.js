export const getColorlessManaCosts = () => {
  return fetch("http://localhost:8088/manaCosts?_start=0&_end=5").then((res) =>
    res.json(),
  );
};

export const getColorManaCosts = () => {
  return fetch("http://localhost:8088/manaCosts?_start=5&_end=10").then((res) =>
    res.json(),
  );
};

export const getManaObjById = (manaId) => {
  return fetch(`http://localhost:8088/manaCosts/${manaId}`).then((res) =>
    res.json(),
  );
};
