import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import {TaskFields} from './../TaskFields';
import { Redirect } from 'react-router';
import {updateTaskToServer,fetchTaskfromServer,unloadTask} from './EditTaskAction';
import { Form,Grid, Row,Col,FormGroup,Checkbox,Button,FormControl,ControlLabel} from 'react-bootstrap';
class EditTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updateTaskSuccess: false
        };
    }

    componentDidMount() {

        this.props.fetchTaskfromServer(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.unloadTask();
    }

    render() {
        const { handleSubmit, load, pristine, reset, submitting } = this.props;
        if(this.props.updateTaskSuccess){
            return (<Redirect to="/tasks"/>)
        }else{
        return (
            <DefaultLayout>
                <Grid>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <section className="panel tasks-widget">
                                <header className="panel-heading">
                                    Edit Task
                                </header>
                                <div className="panel-body">
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <TaskFields></TaskFields>
                                        <FormGroup>
                                            <Col smOffset={2} sm={10}>
                                                <Button type="submit">
                                                    Save
                                                </Button>
                                                <Button type="button">
                                                    Cancel
                                                </Button>
                                            </Col>
                                        </FormGroup>
                                    </form>

                                </div>
                            </section>

                        </Col>
                    </Row>
                </Grid>
            </DefaultLayout>
        );
        }
    }
}



const mapStateToProps = (state) => {
    console.log("Initial values", state)
    return {
        initialValues : state.editTask.task,
        updateTaskSuccess: state.editTask.updateTaskSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTaskfromServer : (taskId)=> dispatch(fetchTaskfromServer(taskId)),
        unloadTask : ()=> dispatch(unloadTask())
    };
};

EditTask = reduxForm({
    form: 'editTask',
    onSubmit: updateTaskToServer
})(EditTask);

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);