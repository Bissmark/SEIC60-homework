// my version
function binarySearch(arr, element){
    // set the mi point
    let mid = Math.floor(arr.length-1/2);
    // if mid-point and element are the same then we have found our answer
    if (element === arr[mid]) {
        return mid;
    // if our value is higher than mid-point look through from mid-point to end to find our value
    } else if (element > arr[mid]) {
        return binarySearch(arr.slice(mid+1),element);
    // if our value is lower than mid-point look through from beginning to mid-point to find our value
    } else if (element < arr[mid]) {
        return binarySearch(arr.slice(0,mid),element);
    // return -1 if we can't find our value
    } else {
        return -1;
    }
}


function recursiveBinarySearch(arr, element) {
    // find the middle index
    const mid = Math.floor(arr.length / 2);

    if (arr[mid] === element) {
        // if the element is found then return the element.
        return mid;
    }
    if (arr[mid] < element && mid < arr.length) {
        const retVal = recursiveBinarySearch(arr.slice(mid + 1, arr.length), element);
        return retVal >= 0 ? mid + 1 + retVal : -1;
    }
    if (arr[mid] > element) {
        return recursiveBinarySearch(arr.slice(0, mid), element);
    }
    return -1;
};

module.exports = {
    binarySearch,
    recursiveBinarySearch
}

// alternate version written in way I haven't seen
// function binarySearch(arr, element){

//     if(!arr.length) return -1;
//     let mid = Math.floor(arr.length-1/2);
 
//     if (element === arr[mid]) return mid;
//     if (element > arr[mid]) return binarySearch(arr.slice(mid+1),element);
//     if (element < arr[mid]) return binarySearch(arr.slice(0,mid),element);
 
//  }

// --- alternate version with bugs ---
// function binarySearch(arr, element) {
//     // find the mid-point to start with
//     let mid = Math.floor(arr.length / 2);

//     // if the element is the same as the mid-point return that value
//     if (arr[mid] === element) {
//         return mid;
    
//     // if the mid-point is less than the element and the array length is greater than 1 lookk through the array from mid to end to find the element 
//     } else if (arr[mid] < element && arr.length > 1) {
//         return binarySearch(arr.splice(mid, Number.MAX_VALUE), element);

//     // if mid-point is after the element look at the start of the array to the mid-point, if array is greater than 1
//     } else if (arr[mid] > element && arr.length > 1) {
//          return binarySearch(arr.splice(0, mid), element);
//     // if none of the above is true then the value is not in the array so return -1/false
//     } else {
//         return -1;
//     }  
// }

//  ---- alternate recursive version with bugs ----
// function recursiveBinarySearch(arr, element){
//     // find the mid-point to start with
//     let mid = Math.floor(arr.length / 2);

//     // Base case
//     if (arr.length === 1 && arr[0] != element) {
//         return -1;
//     }

//     if (element === arr[mid]) {
//         return mid

//     } else if (element < arr[mid]) {
//         return recursiveBinarySearch(element, arr.slice(0, mid));

//     } else if (element > arr[mid]) {
//         return recursiveBinarySearch(element, arr.slice(mid));
//     }
//     //  search through the array recursively for the element
//     //  you may need to add more parameters to this function!
//     //  if the element is not found, return -1
//     //  if the element is found, return the index at which it was found
// }