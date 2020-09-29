var assert = require('assert');

// destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let x = 'abc';
    [a, b, c] = x.split('');
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    let d = 'ab';
    [a, b, c] = d.split('')
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    let i = 'a ☕';
    [space, coffee] = i.split(' ');
    assert.equal(coffee, '\u{2615}');
  });
});
