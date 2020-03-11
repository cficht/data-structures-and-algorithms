const insertShiftArray = (arr, val) => {
  let newArr = [];
  const middle = Math.ceil(arr.length / 2);

  for (let i = 0; i <= arr.length; i++) {
    if (i < middle) {
      newArr[i] = arr[i];
    } else if (i === middle) {
      newArr[i] = val;
    } else { 
      newArr[i] = arr[i - 1];
    }
    
  }
  return newArr;
};

module.exports = {
  insertShiftArray
}