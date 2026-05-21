const permutations = function (array, next = "", iterations = []) {
  if (array.length <= 1) {
    return array;
  }
  next = array.slice(-1)[0];
  let subbar = array.slice(0, -1);
  iterations = permutations(subbar, next, iterations);
  for (let i = 0; i < iterations.length; i++) {
    for (let j = 0; i <= iterations[i].length; j++) {
      iterations.push(subbar.toSpliced(i, 0, next));
    }
  }
  return iterations;
};

// Do not edit below this line
module.exports = permutations;
