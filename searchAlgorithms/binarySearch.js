function binarySearch(arr, value) {
  let start = 0,
    end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] != value && start <= end) {
    if (arr[middle] > value) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] == value ? middle : -1;
}

console.log(binarySearch([1, 4, 6, 8, 9, 12, 29, 35, 40], 35));
console.log(binarySearch([1, 4, 6, 8, 9, 12, 29, 35, 40], 5));
