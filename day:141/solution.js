function interweavingStrings(one, two, three) {
  const L1 = one.length;
  const L2 = two.length;
  const L3 = three.length;
  // base case(s)
  if (L1 + L2 !== L3) return false;

  let cache = new Array(L1 + 1).fill([]);
  let hash = new Array(L1 + 1).fill([]);

  for (let i = 0; i <= L1; i++) {
    cache[i] = new Array(L2 + 1).fill(false);
    hash[i] = new Array(L2 + 1).fill(false);
  }

  function canInterleave(index1, index2) {
    let index3 = index1 + index2;
    if (index1 + index2 === L3) {
      cache[index1][index2] = true;
      hash[index1][index2] = true;
      return true;
    }

    if (hash[index1][index2]) return cache[index1][index2];
    if (
      index1 < L1 &&
      one[index1] === three[index3] &&
      canInterleave(index1 + 1, index2)
    ) {
      hash[index1][index2] = true;
      cache[index1][index2] = true;
      return true;
    }
    if (
      index2 < L2 &&
      two[index2] === three[index3] &&
      canInterleave(index1, index2 + 1)
    ) {
      hash[index1][index2] = true;
      cache[index1][index2] = true;
      return true;
    }
    hash[index1][index2] = true;
    cache[index1][index2] = false;
    return false;
  }
  return canInterleave(0, 0);
}

const one =
  "abababababababababababababababababababababababababababababababababababababababababababababababababbb";
const two =
  "babababababababababababababababababababababababababababababababababababababababababababababababaaaba";
const three =
  "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb";

console.log(interweavingStrings(one, two, three));
