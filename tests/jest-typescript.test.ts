import process from "process";

it("Invokes jest and runs tests for typescript code", () => {
  const one: number | string = 1;
  expect(one).toBe(1);
  expect(process).toBeTruthy();
});
