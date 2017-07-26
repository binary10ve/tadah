import React, {Component} from 'react';
import { Modal,Button} from 'react-bootstrap';

class DeleteTask extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <Modal show={this.props.deleteOpen}>
                <Modal.Header>
                    <Modal.Title>Confirm Task Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this task?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleNo.bind(this)}>No</Button>
                    <Button bsStyle="primary" onClick={this.props.handleYes.bind(this,this.props.taskToBeDeleted)}>Yes</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }

}

export default DeleteTask;