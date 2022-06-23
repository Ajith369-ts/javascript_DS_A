// O(N)

function same(arr1, arr2) {
  let frequencyCounter1 = {},
    frequencyCounter2 = {};

  for (let el of arr1) {
    frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
  }

  for (let el of arr2) {
    frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (!(frequencyCounter1[key] == frequencyCounter2[key ** 2])) {
      return false;
    }
  }
  return true;
}

if (same([1, 2, 4], [16, 1, 4])) console.log("True");
else console.log("False");
