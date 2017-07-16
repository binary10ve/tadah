/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
//import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
//import {deepOrange500} from 'material-ui/styles/colors';
import createMuiTheme from 'material-ui/styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DefaultLayout from './../DefaultLayout';
import Button from 'material-ui/Button';
import {Link } from 'react-router-dom';
const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

const muiTheme = createMuiTheme({
    palette: {
        accent1Color: 'orange',
        text : {}
    },
});

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
            <MuiThemeProvider muiTheme={muiTheme}>
                <DefaultLayout>
                <div style={styles.container}>
                    <Dialog
                        open={this.state.open}
                        title="Super Secret Password"

                        onRequestClose={this.handleRequestClose}
                        >
                        1-2-3-4-5
                    </Dialog>
                    <h1>Tadah!!</h1>
                    <h2>A simple task management tool</h2>
                    <Link to="/tasks" style={{ textDecoration: 'none' }}>
                        <Button raised color="primary">
                            Go to Tasks
                        </Button>
                    </Link>
                </div>

                </DefaultLayout>
            </MuiThemeProvider>
        );
    }
}

export default Landing;