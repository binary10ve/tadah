import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import {TaskFields} from './../TaskFields';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import {postNewTaskToServer, newTaskCreateSuccess,newTaskCreateFailed,postTaskCreate} from './AddTaskAction';
import { Form,Grid, Row,Col,FormGroup,Checkbox,Button,FormControl,ControlLabel} from 'react-bootstrap';
class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTaskSuccess: false
        };
    }

    render() {
        const { error, handleSubmit } = this.props;
        if(this.props.newTaskSuccess){
            return (<Redirect to="/tasks"/>)
        }else{
            return (
                <DefaultLayout>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <section className="panel tasks-widget">
                                    <header className="panel-heading">
                                        Create New Task
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
    return {
        newTaskSuccess: state.newTask.taskCreated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

AddTask = reduxForm({
    form: 'addTask',
    onSubmit: postNewTaskToServer
})(AddTask);

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);