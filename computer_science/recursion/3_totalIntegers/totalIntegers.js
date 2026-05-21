const totalIntegers = function (value, totalInts = 0, firstCheck = true) {
  if (firstCheck && typeof value !== "object") {
    return undefined;
  }
  if (Number.isInteger(value)) {
    totalInts++;
  }
  if (typeof value === "object" && value !== null) {
    for (const x of Object.values(value)) {
      totalInts = totalIntegers(x, totalInts, false);
    }
  }
  return totalInts;
};

// Do not edit below this line
module.exports = totalIntegers;
