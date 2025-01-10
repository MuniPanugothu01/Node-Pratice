// exporting from this file to another file through modules
const Add = (a, b) => {
  return a + b;
};
// substraction function

const Sub = (a, b) => {
  return a - b;
};

// multiplication function

const Mul = (a, b) => {
  return a * b;
};
// division function
const Div = (a, b) => {
  return a % b;
};

module.exports = { Add, Sub, Mul, Div };
