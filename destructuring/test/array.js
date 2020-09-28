var assert = require('assert');



describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [x] = [0];
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
    let arr = [1, 2, 3];
    lastValue = arr.length;
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x];
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const z = all[all.length - 1];
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [fullname, age] = user;
    const [firstName, surname] = fullname;
    const expected = 'Some One = 23 years';
    toString(`${firstName} ${surname} = ${age} years`);
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  it('chained assignments', () => {
    let c, d;
    let a, b = [c, d] = [1, 2];
    [a, b, c, d] = [1, 2, 1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2])
  });
  it('in for-of loop', () => {
    for (var [a, b] of [[0, 1, 2]]) { }
    [a, b] = [1, 2];
    assert.deepEqual([a, b], [1, 2]);
  });
});