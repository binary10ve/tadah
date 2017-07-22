import React, {Component} from 'react';
import { Modal,Button} from 'react-bootstrap';

class ConfirmDeleteTask extends Component {

    render(){
        return(
            <div className="static-modal">
                <Modal
                    show={this.props.deleteOpen}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
                </Modal>
            </div>
        );
    }

}

export default ConfirmDeleteTask;