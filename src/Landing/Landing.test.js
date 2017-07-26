import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing.jsx';
describe('<Landing />', () => {
    it('renders without crashing', () => {
        shallow(<Landing />);
    });

});