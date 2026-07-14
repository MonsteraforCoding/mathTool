const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiplay = (a, b) => {
  return a * b;
};

const add = (a, b) => {
  if (b === 0) {
    throw new Error();
  }
  return a / b;
};
