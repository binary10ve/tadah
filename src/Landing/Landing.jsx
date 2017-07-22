/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import DefaultLayout from './../DefaultLayout';
import {Link } from 'react-router-dom';
const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

class Landing extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {

        return (

                <DefaultLayout>
                <div style={styles.container}>
                    <h1>Tadah!!</h1>
                    <h2>A simple task management tool</h2>
                    <Link to="/tasks" style={{ textDecoration: 'none' }}>
                        Go to Tasks
                    </Link>
                </div>

                </DefaultLayout>
        );
    }
}

export default Landing;