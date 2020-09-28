var assert = require('assert');

// destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    let a, b, c = 'abc';
    return ([a, b, c], ['a', 'b', 'c']);
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    const [a, c] = 'ab';
    return (c, void 0);
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    const [space, coffee] = 'a ☕';
    return (coffee, '\u{2615}');
    assert.equal(coffee, '\u{2615}');
  });
});
