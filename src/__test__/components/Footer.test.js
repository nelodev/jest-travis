import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Testing <Footer />', () => {
  const wrapper = mount(<Footer />);
  test('Should render the component', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Render title of the component', () => {
    expect(wrapper.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Testing snapshots', () => {
  test('Check UI of the component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
