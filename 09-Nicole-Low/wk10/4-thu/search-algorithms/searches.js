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

function recursiveBinarySearch(arr, element) {
    return recursiveBinarySearch2(arr, 0, arr.length - 1, element)
}

function recursiveBinarySearch2(arr, left, right, element){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

    // sort the array first
    arr.sort()

    // base case
    if (left > right) {
        return -1
    }

    // find the middle
    const mid = left + ((right - left) / 2)

    if (arr[mid] === element) {
        return mid
    } else if (arr[mid] < element) {
        return recursiveBinarySearch2(arr, mid + 1, right, element)
    } else {
        return recursiveBinarySearch2(arr, left, mid - 1, element)
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}