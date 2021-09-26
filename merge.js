function merge(arr1, arr2) {
  let arr = [];
  let idx1 = 0;
  let idx2 = 0;

  while (arr1.length > idx1 && arr2.length > idx2) {
    if (arr1[idx1] < arr2[idx2]) {
      arr.push(arr1[idx1]);
      idx1++;
    } else {
      arr.push(arr2[idx2]);
      idx2++;
    }
  }
  while (arr1.length > idx1) {
    arr.push(arr1[idx1]);
    idx1++;
  }
  while (arr2.length > idx2) {
    arr.push(arr2[idx2]);
    idx2++;
  }
  return arr;
}

function mergeSort(arr) {
  // BASE CASE
  if (arr.length <= 1) return arr;

  // NORMAL CASE
  let midIdx = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, midIdx));
  let rightHalf = mergeSort(arr.slice(midIdx));
  return merge(leftHalf, rightHalf);
}

module.exports = { merge, mergeSort };
