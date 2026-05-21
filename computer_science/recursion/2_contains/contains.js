const contains = function (obj, target) {
  if (Object.values(obj).includes(target)) {
    return true;
  }
  return Object.values(obj).some((value) => {
    if (typeof value === "object" && value != null) {
      return contains(value, target);
    } else {
      return false;
    }
  });
};
// Do not edit below this line
module.exports = contains;
