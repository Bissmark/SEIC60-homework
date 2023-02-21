function bubbleSort(array) {
    let i, j;
    let swapHappened = false;
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    for (i = 0; i < array.length; i++) {
        // reset swapHappened to false each time so we can detect if a swap
        // happened in this specific iteration.
        swapHappened = false;
        // Make another loop (inside the first one) to go through one 
        // round of swapping from the start of the list to the end
        for (j = 0; j < array.length; j++) {
            // Inside inner loop:
            // compare each pair of elements near each other
            // swap them if the bigger one was at a lower index.
            // Make sure to keep track of whether a swap happened!
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapHappened = true;
            }
        }
        // IF no two elements were swapped by inner loop, then break
        if (!swapHappened) {
            break;
        }
    }
    // After both loops have exited, remember to return the array
    return array;
}
module.exports = bubbleSort;