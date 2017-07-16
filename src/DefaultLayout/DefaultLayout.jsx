import React from 'react';
import TopAppBar from './../TopAppBar';
export default class DefaultLayout extends React.Component {

    render() {
        return (
            <div>
                <TopAppBar
                    title="Tadah"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                {this.props.children}
            </div>
        )
    }
}