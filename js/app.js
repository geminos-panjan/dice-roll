const defaultDice = 10;
const defaultMax = 6;

const getDiceElement = () => {
  return document.querySelector(".input-dice");
}

const getMaxElement = () => {
  return document.querySelector(".input-max");
}

const getResultElement = () => {
  return document.querySelector(".roll-list");
}

const reset = () => {
  getDiceElement().value = defaultDice;
  getMaxElement().value = defaultMax;
  const resultList = getResultElement();
  removeChildAll(resultList);
}

const removeChildAll = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const rollDice = () => {
  const dice = getDiceElement().value;
  const max = getMaxElement().value;
  const resultList = getResultElement();

  removeChildAll(resultList);

  for (let i = 1; i <= dice; i++) {
    const result = Math.floor(Math.random() * max) + 1;
    const row = document.createElement("div");
    row.className = "row";
    const index = document.createElement("div");
    index.className = "index";
    index.textContent = i;
    const value = document.createElement("div");
    value.className = "value";
    value.textContent = result;
    row.append(index, value);
    resultList.appendChild(row);
  }
};

reset();
