import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import {TaskFields} from './../TaskFields';
import CancelButton from './../Shared/CancelButton';
import { Redirect } from 'react-router';
import {updateTaskToServer,fetchTaskfromServer,unloadTask} from './EditTaskAction';
import { Form,Grid, Row,Col,FormGroup,Checkbox,Button,FormControl,ControlLabel} from 'react-bootstrap';
const errors = {};
const validate = values => {
    console.log("Values", values)
    if (!values.description) {
        errors.description = true;
    }else{
        delete errors['description']
    }
    if (!values.categoryId) {
        errors.categoryId = true
    }else{
        delete errors['categoryId']
    }
    console.log("eeorr", errors)
    return errors
};

class EditTask extends React.Component {

    constructor(props) {
        super(props);
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
                <section className="panel tasks-widget">
                    <header className="panel-heading">
                        Edit Task
                    </header>
                    <div className="panel-body">
                        <form className="form-horizontal" onSubmit={handleSubmit}>
                            <TaskFields errors={this.props.anyTouched && this.props.invalid ? errors : {}}></TaskFields>
                        </form>
                    </div>
                </section>
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
    onSubmit: updateTaskToServer,
    validate
})(EditTask);

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);