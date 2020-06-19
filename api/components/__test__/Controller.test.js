const db = require('../__mocks__/userMock');
const controller = require('../user/controller');
const store = require('../../../store/dummy');
const { agents } = require('../__mocks__/userMock');

const Controller = controller(store);

describe('controller - user', () => {
  test('should return list of agents', async () => {
    return Controller.list({ collection: 'agents' }).then((user) => {
      expect(user).toStrictEqual(db['agents']);
    });
  });
  test('should return a created agent', async () => {
    return Controller.create({ name: 'lucas' }).then((user) => {
      expect(user).toStrictEqual({
        name: 'lucas',
        free: true,
        problemId: '',
      });
    });
  });
  test('should return a created problem', async () => {
    return Controller.report({ problem: 'bug' }).then((user) => {
      expect(user).toStrictEqual({
        _id: 2,
        info: 'bug',
        resolve: false,
      });
    });
  });
  test('should return a success message', async () => {
    return Controller.resolve({
       problemId: '1', 
       answer: 'fixed'
      }, '1').then((user) => {
      expect(user).toStrictEqual('1 fixed');
    });
  });
});
