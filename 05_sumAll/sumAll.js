const sumAll = function (start, end) {
  // display ERROR if arguments are not a number or negative number
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  //ensure start number is smaller or equal to end number

  if (start > end) {
    [start, end] = [end, start];
  }

  //loop thorugh the given numbers and calculate the sum of all numbers
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
