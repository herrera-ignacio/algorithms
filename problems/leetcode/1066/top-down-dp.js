/**
 * 
 * @param {number[][]} workers 
 * @param {number[][]} bikes 
 */
function assignBikes(workers, bikes) {
    const memo = {};
    return dfsMinDistanceSum(workers, bikes, 0, 0, memo);
}

/**
 * 
 * @param {number[]} worker 
 * @param {number[]} bike 
 */
function findManhattanDistance(worker, bike) {
    const res = Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
    console.log(res);
    return res;
}

function dfsMinDistanceSum(workers, bikes, workerIdx, bikeMask, memo) {
    // Finished assigning bikes to workers
    if (workerIdx >= workers.length) return 0;

    // Already calculated
    if (memo[bikeMask] !== undefined) return memo[bikeMask];

    let minDistanceSum = Infinity;

    for (let bikeIdx = 0; bikeIdx < bikes.length; bikeIdx++) {
        // console.log(bikeMask);
        // Check if the bike is available
        if ((bikeMask & (1 << bikeIdx)) === 0) {
           // Add the current distance
           // and repeat the process for next worker
           // Also, mark the bike as assigned in the mask
           const newBikeMask = bikeMask | (1 << bikeIdx);
           minDistanceSum = Math.min(
                minDistanceSum,
                findManhattanDistance(workers[workerIdx], bikes[bikeIdx])
                + dfsMinDistanceSum(
                    workers,
                    bikes,
                    workerIdx + 1,
                    newBikeMask,
                    memo
                )
           );
        }
    }

    // Memoize the result corresponding to mask
    memo[bikeMask] = minDistanceSum;
    
    return minDistanceSum;
}
