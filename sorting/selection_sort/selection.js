function findSmallest(arr) {
  let smallest = 0;
  let smallestIndex = 0;

  arr.forEach((item, index) => {
    if (item < smallest) {
      smallest = item;
      smallestIndex = index;
    }
  });

  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];

  while (arr.length) {
    const smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1); // O(n)
  }

  return newArr;
}
