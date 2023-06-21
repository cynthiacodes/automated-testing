"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArr) {
  let shortestString = stringArr[0];
  for (let string of stringArr) {
    if (string.length < shortestString.length) {
      shortestString = string;
    }
  }
  return shortestString;
}

module.exports = findShortestString;
