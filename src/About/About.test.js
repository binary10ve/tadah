import React from 'react';
import { shallow } from 'enzyme';
import About from './About.jsx';
describe('<About />', () => {

    it('renders without crashing', () => {
        shallow(<About />);
    });

});