function every(array, callback) {
  let result = true;
  for (let index = 0; index < array.length; index++) {
    result = result && callback(array[index], index, array);
  }
  return result;
}

export default every;
