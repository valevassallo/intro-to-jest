import map from "./map";

test("maps stuff", () => {
  let numbers = [1, 2, 3];
  expect(map(numbers, number => number * 2)).toStrictEqual([2, 4, 6]);
});
