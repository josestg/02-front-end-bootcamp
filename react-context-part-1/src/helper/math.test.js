import { sum } from "./math";

test("sum of [1, 2, 3, 4] should be 10", () => {
  const total = sum([1, 2, 3, 4]);
  expect(total).toBe(10);
});

test("sum of [-1, -2, -3, -4] should be -10", () => {
  const total = sum([-1, -2, -3, -4]);
  expect(total).toBe(-10);
});

test("sum of [] should be 0", () => {
  const total = sum([]);
  expect(total).toBe(0);
});
