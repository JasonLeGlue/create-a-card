export const getColorlessManaCosts = () => {
  return fetch("http://localhost:8088/manaCosts?_start=0&_end=5");
};

export const getColorManaCosts = () => {
  return fetch("http://localhost:8088/manaCosts?_start=5&_end=10");
};
