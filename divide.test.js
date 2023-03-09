const divide = require("./divide.js");

test("divides 1 / 2 to expect 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});
