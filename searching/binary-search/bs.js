function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

