function join(array, joinner) {
  let result = "";
  for (let index = 0; index < array.length; index++) {
    result = result + array[index];
    if (index < array.length - 1) result = result + joinner;
  }
  return result;
}

export default join;
