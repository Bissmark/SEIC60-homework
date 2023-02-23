function bucketSort(items) {
  if (items.length === 0) {
      return items;
   }
   let i,
   minValue = items[0],
   maxValue = items[0],
   bucketSize = 5;
   items.forEach(function (currentVal) {
      if (currentVal < minValue) {
         minValue = currentVal;
      } else if (currentVal > maxValue) {
         maxValue = currentVal;
      }
   })
   let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
   let allBuckets = new Array(bucketCount);
   for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
   }
   items.forEach(function (currentVal) {
      allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
   });
   items.length = 0;
   allBuckets.forEach(function(bucket) {
      insertion(bucket);
      bucket.forEach(function (element) {
         items.push(element)
      });
   });
   return items;
}
const insertion = items => {
   let length = items.length;
   let i, j;
   for(i = 1; i < length; i++) {
      let temp = items[i];
      for(j = i - 1; j >= 0 && items[j] > temp; j--) {
         items[j+1] = items[j];
      }
      items[j+1] = temp;
  };
  return items;
}

module.exports = bucketSort;
