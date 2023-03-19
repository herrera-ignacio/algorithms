/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  let isGoingUp = true;
  let i = 0;

  if (arr.length < 3) {
      return false;
  }

  while (i < arr.length - 1) {
      if (arr[i] === arr[i+1]) {
          // Does not increase/decrease strictly
          return false;
      }

      if (isGoingUp) {
          if (arr[i] < arr[i+1]) {
              // Climbing
              i++;
          } else {
              // First time going down
              isGoingUp = false;
              if (i < 1) {
                  // We never climbed, it only decreases
                  return false;
              }
          }
      } else {
          if (arr[i] > arr[i+1]) {
              // We keep going down
              i++;
          } else {
              // It was a valley, we are going up again
              return false;
          }
      }
  }

  return !isGoingUp;
};
