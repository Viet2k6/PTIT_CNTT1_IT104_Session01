const joinArr = (arr1, arr2, pos) => {
  if (pos < 0 || pos > arr1.length) 
    return console.log("Vị trí không hợp lệ!");
  const arr3 = [...arr1]; 
  arr3.splice(pos, 0, ...arr2);
  return arr3;
};
console.log(joinArr([1, 2, 3, 7, 8], [4, 5, 6], 3));
