import * as maths from '../src/maths.js';
import * as maths2 from '../src/maths2.js';

describe.each([
  [maths, './src/maths.js'],
  [maths2, './src/maths2.js'],
])('Maths Functions', (mathsLib, file) => {
  describe(`Module [${file}]`, () => {
    test('adds 1+2 to equal 3', () => {
      expect(mathsLib.add(1, 2)).toBe(3);
    });

    test('adds 3+2 to equal 5', () => {
      expect(mathsLib.add(3, 2)).toBe(5);
    });

    test('adds 2+4 to equal 6', () => {
      expect(mathsLib.add(2, 4)).toBe(6);
    });

    test('sub 7-3 to equal 4', () => {
      expect(mathsLib.sub(7, 3)).toBe(4);
    });

    test('adds 10-8 to equal 2', () => {
      expect(mathsLib.sub(10, 8)).toBe(2);
    });
  });
});
