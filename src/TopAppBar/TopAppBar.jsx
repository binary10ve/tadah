import React from 'react';
import { Navbar, Nav,NavItem} from 'react-bootstrap';
import { withRouter } from 'react-router';
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
        return (
            <div>
                <header className="main-nav">
                    <Navbar staticTop >
                        <Navbar.Header>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.toggleDrawer.bind(this)}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Navbar.Brand>
                                <Link to="/" >Tadah</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Collapse className={`${this.state.open ? 'in' : ''}`}>
                            <Nav>
                                <NavItem eventKey={1} onClick={ e => this.props.history.push("/tasks") } >
                                    Tasks
                                </NavItem>
                                <NavItem eventKey={1} onClick={ e => this.props.history.push("/about") } >
                                    About
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </header>
            </div>
        )
    }
}

export default withRouter(TopAppBar);