import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from './../DefaultLayout';
import { Grid, Row,Col} from 'react-bootstrap';


class LibraryPanel extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
    return (
        <div>
            <div className="post-quote">
                <div className="post-heading">
                    <h4>{this.props.name}({this.props.version})</h4>
                    {this.props.children} &nbsp;&nbsp;
                    <a href={this.props.link} target="_blank">Read More..</a>
                </div>
            </div>
        </div>
    );
    }
}


export default LibraryPanel;