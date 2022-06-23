const collectOddValues = (arr) => {
  let newArray = [];

  if (arr.length === 0) return newArray;

  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }

  newArray = newArray.concat(collectOddValues(arr.slice(1)));
  return newArray;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));

// [1].concat(collectOddValues([2, 3, 4, 5, 6, 7, 8]))         [1, 3, 5, 7]
//     [].concat(collectOddValues([3, 4, 5, 6, 7, 8]))         [3, 5, 7]
//         [3].concat(collectOddValues([4, 5, 6, 7, 8]))       [3, 5, 7]
//             [].concat(collectOddValues([5, 6, 7, 8]))       [5, 7]
//                 [5].concat(collectOddValues([6, 7, 8]))     [5, 7]
//                     [].concat(collectOddValues([7, 8]))     [7]
//                         [7].concat(collectOddValues([8]))   [7]
//                             [].concat(collectOddValues([])) []
//                                 []
