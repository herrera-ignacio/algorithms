
/**
 * 
 * @param {number[]} startTime 
 * @param {int} lastEndingTime 
 */
function findNextJob(startTime, lastEndingTime) {
    let start = 0;
    let nextIndex = startTime.length;
    let end = startTime.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (startTime[mid] >= lastEndingTime) {
        nextIndex = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return nextIndex;
}

/**
 * 
 * @param {number[]} memo
 * @param {number[][]} jobs ([<startTime>, <endtime>, <profit>]) 
 * @param {number[]} startTime 
 * @param {number} n 
 * @param {number} position 
 */
function findMaxProfit(memo, jobs, startTime, n, position) {
  // 0 profit if we iterated over all the jobs
  if (position === n) {
    return 0;
  }

  // return result if it's calculated
  if (memo[position] !== -1) {
    return memo[position];
  }

  // next index of the next non-conflicting job
  const nextIndex = findNextJob(startTime, jobs[position][1]);

  // find the maximum profit of two options: skipping or scheduling current job
  const maxProfit = Math.max(
    findMaxProfit(memo, jobs, startTime, n, position + 1),
    jobs[position][2] + findMaxProfit(memo, jobs, startTime, n, nextIndex)
  );

  // Store max profit for future reference (memoization)
  memo[position] = maxProfit;

  return maxProfit;
}

/**
 * 
 * @param {number[]} startTime 
 * @param {number[]} endTime 
 * @param {number[]} profit 
 */
function jobScheduling(startTime, endTime, profit) {
  const jobs = [];
  const memo = new Array(profit.length);
  memo.fill(-1);

  // Storing job's details into one list
  // so we can sort the jobs while maintaining
  // the other parameters.
  for (let i = 0; i < profit.length; i++) {
    const currJob = [];
    currJob.push(startTime[i]);
    currJob.push(endTime[i]);
    currJob.push(profit[i]);
    jobs.push(currJob);
  }

  // Sort based on start time
  jobs.sort((a,b) => a[0] - b[0]);

  // binary search will be used in startTime so store in a separate list
  for (let i = 0; i < profit.length; i++) {
    startTime[i] = jobs[i][0];
  }

  return findMaxProfit(memo, jobs, startTime, profit.length, 0);
}
