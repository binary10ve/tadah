import {Button} from 'react-bootstrap';
import React from 'react';
import { withRouter } from 'react-router-dom';

class CancelButton extends React.Component {

    constructor(props) {
        super(props);
    }
    goBack(){
        this.props.history.goBack();
    }

    render(){
        return (<Button type="button" onClick={this.goBack.bind(this)}>
            Cancel
        </Button>);
    }

}

CancelButton = withRouter(CancelButton);

export default CancelButton