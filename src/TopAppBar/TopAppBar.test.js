import React from 'react';
import { shallow } from 'enzyme';
import TopAppBar from './TopAppBar.jsx';
describe('<TopAppBar />', () => {
    it('renders without crashing', () => {
        shallow(<TopAppBar />);
    });

});