export function randInt(max = Number.MAX_VALUE, min = 0) {
  if (max < min) {
    throw new Error(`Cannot generate integer in invalid range [${min}, ${max}]`);
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randNatural(max = Number.MAX_VALUE, min = 1) {
  if (min < 1) {
    min = 1;
  }
  if (max < 1) {
    throw new Error(`Cannot generate a natural number less than 1`);
  }
  return randInt(max, min);
}
