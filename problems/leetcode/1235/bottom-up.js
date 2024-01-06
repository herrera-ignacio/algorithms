/**
 * Algorithm:
 * 1. Store `startTime`, `endTime`, and `profit` of each job in `jobs`.
 * 2. Sort `jobs` ASC according to their `startTime`.
 * 3. Iterate `jobs` from right to left to find the `currProfit` for each job.
 * `currProfit` is: current job's profit + max profit of scheduling jobs
 * between the next non-conflicting job (i.e., `nextIndex`) and the end of
 * `jobs` array (i.e., memoized in `memo[nextIndex]`).
 * 4. Return `memo[0]`.
 * 
 * Time complexity: O(n log n) due to sorting + n * binary search.
 */

/**
 * 
 * @param {number[]} startTime 
 * @param {number[]} endTime 
 * @param {number[]} profit
 * @returns {number} max profit
 * Does the the scaffolding and orchestates function calls
 */
function jobScheduling(startTime, endTime, profit) {
  // 1. Build `jobs` array:
  const jobs = [];
  for (let i = 0; i < profit.length; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]]);
  }

  // 2. Sort `jobs` ASC based on `startTime`:
  jobs.sort((a, b) => a[0] - b[0]);

  // Note: binary search will use `startTime`
  // so it needs to match `jobs` sorted order:
  const sortedStartTimes = jobs.map(j => j[0]);


  // findMaxProfit takes care of 3rd and 4th steps
  return findMaxProfit(jobs, sortedStartTimes)
}

/**
 * 
 * @param {number[][]} jobs [startTime, endTime, profit][] 
 * @param {number[]} startTime 
 * @return {number} max profit
 */
function findMaxProfit(jobs, startTime, memo = {}) {
  const n = jobs.length;

  // 3: Iterate jobs from right to left
  for (let i = n - 1; i >= 0; i--) {
    let currProfit = jobs[i][2];

    // Find index of next non-conflicting job
    const nextIndex = findNextJob(startTime, jobs[i][1]);

    // if there's a non-conflicting job, sum its max profits
    if (nextIndex !== n) {
      currProfit += memo[nextIndex]
    }

    // Store the max profit we can achieve by either
    // scheduling the job + non-conflicting jobs, or skipping this job
    // `memo[i] + 1 || 0` is needed for the first iteration (i.e., n - 1).
    memo[i] = Math.max(currProfit, memo[i+1] ?? 0)
  }

  // 4: Once we get to the first element, we'd get the max profit
  return memo[0];
}

/**
 * 
 * @param {number[]} startTime 
 * @param {number} jobEndTime
 * @returns {number} index of next non-conflicting job 
 * Do a binary search on startTime to finx the next non-conflicting job
 */
function findNextJob(startTime, jobEndTime) {
  let start = 0;
  let end = startTime.length;
  let next = startTime.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (startTime[mid] >= jobEndTime) {
      next = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return next;
}
