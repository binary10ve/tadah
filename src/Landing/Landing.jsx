import React, {Component} from 'react';
import DefaultLayout from './../DefaultLayout';
import {Link } from 'react-router-dom';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

class Landing extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <DefaultLayout>
                <div style={styles.container}>
                    <h1>Tadah!!</h1>
                    <h2>A simple task management tool</h2>
                    <Link className="btn btn-success btn-sm" to="/tasks"> Go to Tasks</Link>
                </div>
            </DefaultLayout>
        );
    }
}

export default Landing;