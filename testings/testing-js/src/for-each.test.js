import forEach from "./for-each";

test("modifies everything", () => {
  expect(forEach([1, 2, 3], number => number * 2)).toBe(undefined);
});
