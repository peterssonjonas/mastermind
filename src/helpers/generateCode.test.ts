import { generateCode } from './generateCode';

describe('generateCode', () => {
  it('returns a code with given number of values', () => {
    const numberOfPegs = 4;
    const numberOfColors = 6;

    const generatedCode = generateCode(numberOfPegs, numberOfColors);

    expect(generatedCode.length).toBe(numberOfPegs);
  });

  it('returns a code with values less than the number of colors', () => {
    const numberOfPegs = 10;
    const numberOfColors = 2;

    const generatedCode = generateCode(numberOfPegs, numberOfColors);
    const maxValue = Math.max(...generatedCode);

    expect(maxValue).toBeLessThan(numberOfColors);
  });
});
