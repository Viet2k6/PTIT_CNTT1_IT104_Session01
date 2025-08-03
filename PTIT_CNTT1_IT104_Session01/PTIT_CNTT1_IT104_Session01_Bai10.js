const stringArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupWordsByLetters = (arr) => {
  const groups = new Map();
  arr.forEach(word => {
    const sortedKey = word.split("").sort().join("");
    if (!groups.has(sortedKey)) {
      groups.set(sortedKey, []);
    }
    groups.get(sortedKey).push(word);
  });

  return Array.from(groups.values());
};
console.log(groupWordsByLetters(stringArr));
