module.exports = mergeSort;

function mergeSort (arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var midpoint = Math.floor(arr.length/2);;
    // split part
    var leftArr = mergeSort(arr.slice(0,midpoint));
    var rightArr = mergeSort(arr.slice(midpoint));
    //console.log( "left: " + leftArr + "right: " + rightArr);
    // merge part
    var returnArr = [];

    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
          returnArr.push(leftArr.shift());
        } else {
          returnArr.push(rightArr.shift());
         }
    }

    if(leftArr.length) {
        returnArr = returnArr.concat(leftArr);
    }    
    if (rightArr.length) {
        returnArr = returnArr.concat(rightArr);
    }
    return returnArr;
}
console.log(mergeSort([2,5,1,3,8,0]))

