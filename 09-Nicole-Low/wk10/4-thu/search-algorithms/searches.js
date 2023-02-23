function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

function recursiveBinarySearch(arr, element, low, high){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    // sort the array first
    arrCopy = arr

    // base case
    if (arr.length === 0) {
        return -1
    }

    const middleElem = Math.floor(arr.length / 2)
    if (middleElem === element) {
        return middleElem
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}