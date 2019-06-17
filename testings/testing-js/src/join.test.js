import join from "./join";

test("join passed elements with a comma", () => {
  expect(join(["Fire", "Air", "Water"], ",")).toBe("Fire,Air,Water");
});
