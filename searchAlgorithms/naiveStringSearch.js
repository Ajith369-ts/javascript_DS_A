// function naiveStringSearch(longString, shortString) {
//   if (
//     longString.length < shortString.length ||
//     longString.length == 0 ||
//     shortString.length == 0
//   )
//     return;

//   let loopCount = longString.length - shortString.length + 1;
//   let count = 0;

//   for (let i = 0; i < loopCount; i++) {
//     let tempString = "";
//     for (let j = 0, length = shortString.length; j < length; j++) {
//       tempString = tempString + longString[i + j];
//     }
//     if (tempString == shortString) count++;
//   }
//   return count;
// }

function naiveStringSearch(longString, shortString) {
  let count = 0;

  for (let i = 0, length = longString.length; i < length; i++) {
    for (let j = 0, length = shortString.length; j < length; j++) {
      if (shortString[j] !== longString[i + j]) break;

      if (j == shortString.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("wowomgzomgomg", "omg"));
