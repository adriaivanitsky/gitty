const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

jest.mock('../lib/utils/github');
const agent = request.agent(app);

describe('gitty routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  test.skip('should create a post', async () => {
    await User.insert({ username: 'adria', email: 'mock@user.com' });
    await agent.get('/api/v1/users/login/callback?code=42').redirects(1);
    const resp = await agent.post('/api/v1/posts').send({ text: 'text' });
    expect(resp.body).toEqual({
      id: 1,
      text: 'text',
      username: 'adria',
    });
  });
});
