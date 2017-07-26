import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EditTask from './EditTask.jsx';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
const store = mockStore({});
describe('<EditTask />', () => {
    it('renders without crashing', () => {
        shallow( <Provider store={store}><EditTask /></Provider>);
    });

});