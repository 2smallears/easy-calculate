function calculate_median(arr) {
  var arrLength = arr.length;
  var median = 0;
  if (arrLength % 2 === 0){
      median = arr[arrLength / 2];
  }else {
      median = arr[(arrLength - 1) / 2];
  }
  return median;
}

module.exports = calculate_median;
