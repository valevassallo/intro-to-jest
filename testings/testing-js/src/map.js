function map(array, callback) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result.push(callback(array[index], index, array));
  }
  return result;
}

export default map;
