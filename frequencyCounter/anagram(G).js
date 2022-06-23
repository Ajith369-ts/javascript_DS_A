function anagram(str1, str2) {
  let lookUp = {};

  for (let i = 0, l = str1.length; i < l; i++) {
    let val = str1[i];

    lookUp[val] ? (lookUp[val] += 1) : (lookUp[val] = 1);
  }

  for (let i = 0, l = str2.length; i < l; i++) {
    let val = str2[i];

    // if(!0) --> true
    if (!lookUp[val]) return false;
    else {
      lookUp[val] -= 1;
    }
  }
  //   {a: 0, n: 0....}
  return true;
}

if (anagram("anagram", "nagaram")) console.log("True");
else console.log("False");
