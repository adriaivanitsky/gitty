const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const agent = request.agent(app);
jest.mock('../lib/utils/github');

const mockUser = {
  email: 'mock@user.com',
  username: 'adria',
  avatar: 'text',
};
describe('gitty routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  test('creates a new user', async () => {
    const resp = await request(app).post('/api/v1/users').send(mockUser);
    expect(resp.body).toEqual({
      id: expect.any(String),
      email: 'mock@user.com',
      username: 'adria',
      avatar: 'text',
    });
  });
});
