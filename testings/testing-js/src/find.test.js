import find from "./find";

test("finds passed element", () => {
  expect(find([1, 2, 3], number => number > 2)).toBe(3);
});
