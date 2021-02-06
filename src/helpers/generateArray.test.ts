import { generateArray, generateGrid } from './generateArray';

describe('generateArray', () => {
  it('returns an array with given number of values', () => {
    const length = 4;
    const mapper = () => 5;
    const expectedArray = [5,5,5,5];

    const array = generateArray(length, mapper);

    expect(array).toEqual(expectedArray);
  });
});

describe('generateGrid', () => {
  it('returns a grid with given dimensions', () => {
    const rows = 2;
    const cols = 3;
    const mapper = () => 5;
    const expectedGrid = [[5,5,5], [5,5,5]];

    const grid = generateGrid(rows, cols, mapper);

    expect(grid).toEqual(expectedGrid);
  });
});
