import m from '../';

describe('screen-saver', () => {
  test('it should be a child process', () => {
    const s = m();
    expect(Object.prototype.hasOwnProperty.call(s, 'stdin')).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(s, 'stdout')).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(s, 'stdio')).toBeTruthy();
  });
});
