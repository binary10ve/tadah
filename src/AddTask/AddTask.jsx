import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { connect } from 'react-redux';
import {TaskFields} from './../TaskFields';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import {postNewTaskToServer,unloadData} from './AddTaskAction';
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

class AddTask extends React.Component {


    componentWillUnmount(){
        this.props.unloadData();
    }

    render() {
        const {  handleSubmit } = this.props;
        if(this.props.newTaskSuccess){
            return (<Redirect to="/tasks"/>)
        }else{
            return (
                <DefaultLayout>
                    <section className="panel tasks-widget">
                        <header className="panel-heading">
                            Create New Task
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
    return {
        newTaskSuccess: state.newTask.newTaskSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        unloadData : ()=> dispatch(unloadData())
    };
};

AddTask = reduxForm({
    form: 'addTask',
    onSubmit: postNewTaskToServer,
    validate
})(AddTask);

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);