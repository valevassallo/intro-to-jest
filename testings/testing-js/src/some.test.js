import some from "./some";

test("makes sure at least one thing is valid", () => {
  expect(some([1, 2, 3], number => number > 1)).toBe(true);
});
