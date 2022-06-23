function maxSubArraySum(arr, num) {
  let maxSum = 0,
    temp = 0;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;

  for (let i = num, length = arr.length; i < length; i++) {
    temp = temp + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 3, 4, 6, 2, 3, 3, 7], 3));

// [1, 3, 4, 6, 2, 3, 3, 7]
//  0  1  2  3  4  5  6  7
