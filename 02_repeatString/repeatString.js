//Takes 2 arguments, string and num
const repeatString = function (str, num) {
  // declare a variable to hold the string
  // create a loop that repeats number of times and add the given string to the result on each iteration
  let result = "";

  //display error for negative number cases
  if (num < 0) {
    return "ERROR";
  }

  for (let i = 1; i <= num; i++) {
    result += str;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
