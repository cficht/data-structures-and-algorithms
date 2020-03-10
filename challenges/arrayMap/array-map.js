const map = (arr, func) => {
    let newArr = []; // create new array
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]); // pass in array[i] as the argument of the function and assign it to index i of the new array
    }
    return newArr; // return the new array
};

module.exports = {
    map
}
