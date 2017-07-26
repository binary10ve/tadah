import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {TaskFields} from './../TaskFields';
import { Redirect } from 'react-router';
import {updateTaskToServer,fetchTaskfromServer,unloadTask} from './EditTaskAction';
const errors = {};
const validate = values => {
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
    return errors
};

class EditTask extends React.Component {


    componentDidMount() {
        this.props.fetchTaskfromServer(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.unloadTask();
    }

    render() {
        const { handleSubmit } = this.props;
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