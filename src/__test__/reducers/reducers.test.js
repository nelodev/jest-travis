import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';

describe('Testing reducers', () => {
  test('Should return initialState', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Testing ADD_TO_CART reducer action', () => {
    const initialState = {
      cart: [],
    };

    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
