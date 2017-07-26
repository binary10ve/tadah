import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import AddTask from './AddTask.jsx';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore({});
describe('<AddTask />', () => {
    it('renders without crashing', () => {
        shallow( <Provider store={store}><AddTask /></Provider>);
    });

});