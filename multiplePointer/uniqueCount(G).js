function uniqueCount(arr) {
  let i = 0;

  for (let j = 1, l = arr.length; j < l; j++) {
    if (arr.length == 0) return 0;

    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueCount([1, 1, 2, 2, 3, 4, 4, 6]));
//  i
// [1, 1, 2, 2, 3, 4, 4, 5, 6]
//     j
