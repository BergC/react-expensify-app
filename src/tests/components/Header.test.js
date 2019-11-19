import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />); // Naming convention is wrapper, instead of renderer.
    expect(wrapper).toMatchSnapshot();
});