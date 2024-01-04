/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
const minOperations = (nums) => {
  const repsByNum = new Map();
  
  for (const num of nums) {
      repsByNum.set(num, (repsByNum.get(num) || 0) + 1);
  }

  let steps = 0;

  for (const reps of repsByNum.values())  {
      if (reps === 1) {
          return -1;
      }
      steps += Math.ceil(reps / 3);
  }

  return steps;
}
