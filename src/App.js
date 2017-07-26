import React, {Component} from 'react';
import About  from './About';
import {Tasks} from './Tasks';
import {AddTask} from './AddTask';
import {EditTask} from './EditTask';
import Landing from './Landing';
import { Route } from 'react-router-dom';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

const store = createStore(
    reducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

class App extends Component {

    render() {
        return (

                <Provider store={store}>
                        <div>
                            <Route path='/' exact={true} component={Landing}/>
                            <Route path='/tasks' exact={true} component={Tasks}/>
                            <Route path='/tasks/add' exact={true} component={AddTask}/>
                            <Route path='/tasks/:id/edit' exact={true} component={EditTask}/>
                            <Route path='/about' exact={true} component={About}/>
                        </div>
                </Provider>
        );
    }
}

export default App;