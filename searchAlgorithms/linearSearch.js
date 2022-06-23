function linearSearch(arr, value) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (value === arr[i]) return i;
  }
  return -1;
}

console.log(linearSearch([4, 5, 2, 2, 1], 5));
