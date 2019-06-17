function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

export default forEach;
