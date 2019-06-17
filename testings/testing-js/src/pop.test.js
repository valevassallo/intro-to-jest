import pop from "./pop";

test("return popped number", () => {
  expect(pop([1, 2, 3, 4])).toBe(4);
});
