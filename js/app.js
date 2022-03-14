const defaultDice = 10;
const defaultMax = 6;
const timeout = 50;

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
  removeChildAll();
}

const removeChildAll = () => {
  const resultList = getResultElement();
  for (const child of resultList.childNodes) {
    child.classList.remove("show-row");
    setTimeout(() => {
      resultList.removeChild(child);
    }, timeout);
  }
}

const rollDice = () => {
  const dice = getDiceElement().value;
  const max = getMaxElement().value;
  const resultList = getResultElement();

  removeChildAll();

  for (let i = 1; i <= dice; i++) {
    setTimeout(() => {
      const result = Math.floor(Math.random() * max) + 1;
      const row = document.createElement("div");
      row.className = "row";
      setTimeout(() => {
        row.classList.add("show-row");
      }, timeout);
      const index = document.createElement("div");
      index.className = "index";
      index.textContent = i;
      const value = document.createElement("div");
      value.className = "value";
      value.textContent = result;
      row.append(index, value);
      resultList.appendChild(row);
    }, timeout * (i - 1));
  }
};

reset();
