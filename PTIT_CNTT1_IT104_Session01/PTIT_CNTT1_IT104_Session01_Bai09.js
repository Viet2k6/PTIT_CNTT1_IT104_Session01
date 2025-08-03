const combineArrs = (...arrays) => {
  return arrays.flat().sort((a, b) => a - b);
};
console.log(combineArrs([1, 2, 3, 5, 9], [4, 6, 7, 8]));
console.log(combineArrs([1], [3, 5], [2, 4]));
