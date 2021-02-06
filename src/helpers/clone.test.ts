import { clone } from './clone';

describe('clone', () => {
  it('should deeply clone an object', () => {
    const foo = {
      bar: [1, 2, 3, 4],
    };

    const bar = clone(foo);
    bar.bar = [6,6,6,6];

    expect(foo).toEqual({ bar: [1, 2, 3, 4]});
  });
});