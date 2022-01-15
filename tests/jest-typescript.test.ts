import process from "process";

it("Invokes jest and runs tests for typescript code", () => {
  const one = 1;
  expect(one).toBe(1);
  expect(process).toBeTruthy();
});
