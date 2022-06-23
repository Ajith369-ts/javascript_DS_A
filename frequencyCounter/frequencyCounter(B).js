// O(n^2)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0, n = arr1.length; i < n; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex == -1) return false;

    arr2.splice(correctIndex, 1);
  }
  return true;
}

if (same([1, 2, 4], [1, 16, 4])) console.log("True");
else console.log("False");
