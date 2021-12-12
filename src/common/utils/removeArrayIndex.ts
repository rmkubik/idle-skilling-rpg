function removeArrayIndex<T>(array: Array<T>, index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export default removeArrayIndex;
