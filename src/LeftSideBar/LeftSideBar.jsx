import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom';
import {MenuItem} from 'material-ui/Menu';
const styles = {
    drawerTop: {
        height: '64px',
        backgroundColor : '#3f51b5',
        color : 'rgb(255, 255, 255)',
        textAlign : 'center'
    }
};

export default class LeftSideBar extends React.Component {

    constructor(props) {
        super(props);
    }

    handleToggle(){
        console.log(this.props)
        this.props.onToggleDrawer();
    }

    render() {
        return (
                <Drawer open={this.props.open}  color="contrast" onClick={this.handleToggle.bind(this)}>
                    <div style={styles.drawerTop}>
                        Tadah!!
                    </div>
                    <MenuItem><Link to="/tasks">Tasks</Link></MenuItem>
                    <MenuItem><Link to="/about">About</Link></MenuItem>
                </Drawer>
        );
    }
}