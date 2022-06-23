// UNMODIFIED VERSION

// function bubbleSort(arr) {
//   for (let i = 0, l = arr.length; i < l; i++) {
//     for (let j = 0, l = arr.length; j < l; j++) {
//     console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// MODIFIED VERSION

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//     console.log("ONE PASS COMPLETED");
//   }
//   return arr;
// }

// OPTIMIZED VERSION

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETED");
    if (noSwaps) break;
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([5, 2, 1, 7, 3, 4]));
