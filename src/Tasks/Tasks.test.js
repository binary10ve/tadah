import React from 'react';
import { shallow } from 'enzyme';
import Tasks from './Tasks.jsx';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore({});
describe('<Tasks />', () => {
    it('renders without crashing', () => {
        shallow(<Provider store={store}><Tasks /></Provider>);
    });

});