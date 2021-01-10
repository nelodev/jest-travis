import getData from '../../utils/getData';

describe('Testing getData API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('API call should return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
