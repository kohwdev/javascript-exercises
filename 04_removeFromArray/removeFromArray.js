const removeFromArray = function (arr, ...arg) {
  //takes an array and other argument
  //removes other argument from the array
  return arr.filter((val) => !arg.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
