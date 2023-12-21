const reverseString = function (str) {
  //reverse a given string
  let reversed = [];
  //split into char array
  let charArr = str.split("");
  //reverse the order
  for (let i = charArr.length - 1; i >= 0; i--) {
    reversed.push(charArr[i]);
  }
  //join it back together as string
  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
