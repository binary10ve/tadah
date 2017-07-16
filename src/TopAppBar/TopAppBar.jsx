import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import LeftSideBar from './../LeftSideBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styleSheet = createStyleSheet('ButtonAppBar', {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});


class TopAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

    }
    //Toggle function (open/close Drawer)
    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.toggleDrawer.bind(this)} />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            Tadah
                        </Typography>
                    </Toolbar>
                </AppBar>
                <LeftSideBar open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)} />
            </div>
        )
    }
}

export default withStyles(styleSheet)(TopAppBar);