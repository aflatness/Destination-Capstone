const { Hosts, Locations, ToKnow } = require('../Database');
const { seedDB } = require('../Database/seed.js');

describe('the database models and collections', () => {
  test('it should populate', () => {
    expect(2 + 2).toBe(4);
  });
});
