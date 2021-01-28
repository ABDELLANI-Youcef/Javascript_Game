const merge = (arr1, arr2, property) => {
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0][property] >= arr2[0][property] ? arr1.shift() : arr2.shift());
  }
  result = result.concat(arr1).concat(arr2);
  return result;
}

const mergeSort = (arr, property) => {
  if (arr.length < 2) {
    return arr;
  }
  let arr2 = arr.splice(Math.floor(arr.length / 2));
  arr = mergeSort(arr, property);
  arr2 = mergeSort(arr2, property);
  let result = merge(arr, arr2, property);
  return result;
}

export { mergeSort };