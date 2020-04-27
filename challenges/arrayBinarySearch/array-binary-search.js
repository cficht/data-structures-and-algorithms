const BinarySearch = (arr, key) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === key) return i;
  }
};

module.exports = {
  BinarySearch
};
