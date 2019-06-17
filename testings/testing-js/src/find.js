function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
}

export default find;
