function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0, length = arr.length; i < length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; i < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

console.log(maxSubArraySum([1, 3, 7], 2));

// [1, 3, 4, 6, 2, 3, 3, 7]
//  0  1  2  3  4  5  6  7
