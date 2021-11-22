function updateArray<T>(array: Array<T>, index: number, value: T) {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
}

export default updateArray;
