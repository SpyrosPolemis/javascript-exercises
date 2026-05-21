const pascal = function (n) {
  if (n === 1) {
    return [1];
  }
  const row = [0, 0];
  row.splice(1, 0, ...pascal(n - 1));
  const newRow = [];
  for (let i = 0; i < row.length - 1; i++) {
    newRow.push(Number(row[i]) + Number(row[i + 1]));
  }
  console.log("returning", newRow);
  return newRow;
};

// Do not edit below this line
module.exports = pascal;
