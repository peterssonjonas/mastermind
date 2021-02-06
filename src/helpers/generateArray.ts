export function generateArray<T>(length: number, mapper: (v: any, i: number) => T) {
  return Array(length).fill(null).map(mapper);
}

export function generateGrid<T>(rows: number, cols: number, mapper: (v: T, i: number) => T) {
  return generateArray(rows, () => generateArray(cols, mapper));
}