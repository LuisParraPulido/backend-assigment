const testServer = require('../__mocks__/testserver');

describe('routes - user', () => {
  const network = require('../user/network');
  const request = testServer(network);
  describe('GET /list', () => {
    test('should respond with status 200', (done) => {
      request
        .get('/list')
        .query({ collection: 'agents' })
        .expect(200, done);
    });
  });
  describe('POST /agent', () => {
    test('should respond with status 201', (done) => {
      request
        .post('/agent')
        .send({
          name: 'Juan'
        })
        .expect(201, done);
    });
  });
  describe('POST /user', () => {
    test('should respond with status 200', (done) => {
      request
        .post('/user')
        .send({
          problem: 'bug'
        })
        .expect(201, done);
    });
  });
  describe('PUT /agent', () => {
    test('should respond with status 200', (done) => {
      request
        .put('/agent/1')
        .send({
          problemId: '1',
          answer: 'fixed'
        })
        .expect(200, done);
    });
  });
});
