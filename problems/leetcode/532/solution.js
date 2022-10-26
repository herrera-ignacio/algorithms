function checkSubarraySum(nums, k) {
  // key: nums[:i] % k; value: i
  const remaindersMap = new Map();
  
  // For such cases where a sum that's directly divisible by k
  // We don't care if the reminder 0 has appeared before.
  // We could also add an if clause (i.e., if sum % k === 0 && i > 0)
  // But I thought it'd be cleaner this way.
  // This also makes valid the case of [a*k, b*k]
  remaindersMap.set(0, -1);

  // keep track of sum(nums[:i])
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let reminder = sum % k;

    if (remaindersMap.has(reminder)) {
      // If have repeated reminders that are not contiguous
      // that means we've added at least two values that sum a multiple of k
      // because that's the only way we can see the same reminder again
      if (i - remaindersMap.get(reminder) > 1) {
        return true;
      }
    } else {
      // We only need to keep the leftmost index
      // Thus, we avoid invalid contiguous cases such as [a, b*k]
      // where a % k != 0
      remaindersMap.set(reminder, i);
    }
  }

  // If we got here, we haven't found any
  return false;
}

console.log(checkSubarraySum([23,2,4,6,6], 7));
