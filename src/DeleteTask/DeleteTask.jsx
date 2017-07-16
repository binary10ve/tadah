import React, {Component} from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class ConfirmDeleteTask extends Component {

    render(){
        console.log("ConfirmDeleteTask",this.props);
        return(
        <Dialog open={this.props.deleteOpen} onRequestClose={this.props.handleRequestClose}>
            <DialogTitle>
                {"Delete Task?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this task?.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.handleNo.bind(this)} color="primary">
                    No
                </Button>
                <Button onClick={this.props.handleYes.bind(this,this.props.taskToBeDeleted)} color="primary">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>)
    }

}

export default ConfirmDeleteTask;