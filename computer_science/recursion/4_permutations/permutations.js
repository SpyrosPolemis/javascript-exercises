const permutations = function (array, next = "") {
  if (array.length <= 1) {
    return [array];
  }
  next = array.slice(-1)[0];
  let subarr = array.slice(0, -1);
  let iterations = [];
  iterations.push(...permutations(subarr, next));
  const copy = structuredClone(iterations);
  iterations = [];
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j <= copy[i].length; j++) {
      iterations.push(copy[i].toSpliced(j, 0, next));
    }
  }
  return iterations;
};

// Do not edit below this line
module.exports = permutations;
