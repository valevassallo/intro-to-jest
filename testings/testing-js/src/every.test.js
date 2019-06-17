import every from "./every";

test("makes sure everything is valid", () => {
  expect(every([1, 2, 3], number => number > 1)).toBe(false);
});
