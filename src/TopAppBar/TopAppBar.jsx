import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';


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
console.log("topbar", this.state)
        return (
            <div>
                <header className="main-nav">
                    <div className="navbar navbar-default navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.toggleDrawer.bind(this)}>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="index.html">Tadah</a>
                            </div>
                            <div className={`navbar-collapse collapse ${this.state.open ? 'in' : ''}`} >
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link to="/tasks">Tasks</Link>
                                    </li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default TopAppBar;