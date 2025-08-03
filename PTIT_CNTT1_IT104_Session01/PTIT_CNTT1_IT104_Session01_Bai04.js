const checkParity = (x) => {
  if (isNaN(x)) {
    console.log(`${x} is not a number`);
  } else if (x % 2 === 0) {
    console.log(`${x} is an even number`);
  } else {
    console.log(`${x} is odd`);
  }
};

checkParity(10);
checkParity(7);
checkParity("a");
