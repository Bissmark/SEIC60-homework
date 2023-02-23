function insertionSort (items) {
  // Loop through each element
  for (let i = 1; i < items.length; i++) {
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
    let currentItem = items[i];
    // Loop backward through the sorted portion of the array
    // and scoot everything over until you find the right place to
    // insert the value you're working with
    let j = i-1;
    while ((j > -1) && (currentItem < items[j])) {
      items[j+1] = items[j];
      j--;
    }
    items[j+1] = currentItem;
  }
  return items;
}
module.exports = insertionSort;
