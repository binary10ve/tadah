import React from 'react';
import TopAppBar from './../TopAppBar';
export default class DefaultLayout extends React.Component {

    render() {
        return (
            <div>
                <TopAppBar/>
                {this.props.children}
            </div>
        )
    }
}