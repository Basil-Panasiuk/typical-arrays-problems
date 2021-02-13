exports.min = function min (array) {
  if (Array.isArray(array)) {
    if(array.length < 1) {
      return 0;
    }
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
      if(min > array[i]) {
        min = array[i];
      }
    }
    return min;
  } else return 0;
  
}

exports.max = function max (array) {
  if (Array.isArray(array)) {
    if(array.length < 1) {
      return 0;
    }
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
      if(max < array[i]) {
        max = array[i];
      }
    }
    return max;
  } else return 0;
  
}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
    if(array.length < 1) {
      return 0;
    }
    let s = 0;
  for(let i = 0; i < array.length; i++){
    s += array[i];
  }

  return s/array.length;
  } else return 0;

}

