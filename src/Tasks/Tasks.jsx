import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';
import DefaultLayout from './../DefaultLayout';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {taskFetchData, confirmDeleteTask,deleteTask,cancelDeleteTask,deleteTaskfromServer} from './TasksActions';
import {DeleteTask} from './../DeleteTask';

const styleSheet = createStyleSheet('Tasks', theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
    progress: {
        margin: `0 auto`,
        textAlign : 'center',
        display: 'block'
    },
}));

class Tasks extends React.Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:3001/tasks');
    }


    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        const  tasks= this.props &&  this.props.tasks ? this.props.tasks : [];
        //console.log("this.props",this.props);
        if (this.props.tasks.tasksAreLoading) {
            return (<div><DefaultLayout><Link to="/tasks/add">
                <Button fab color="primary" >
                    <AddIcon />
                </Button>
            </Link><CircularProgress className={classes.progress} /></DefaultLayout></div>);
        }
        return (
            <div>
                <DefaultLayout>
                    <Link to="/tasks/add">
                        <Button fab color="primary" >
                            <AddIcon />
                        </Button>
                    </Link>
                    <List>
                        {tasks.tasks.map(value =>
                                <ListItem dense button key={value.id} onClick={event => this.handleToggle(event, value)}>
                                    <Checkbox
                                        checked={value.completed}
                                        tabIndex="-1"
                                        disableRipple
                                        />
                                    <ListItemText primary={value.description} />
                                    <ListItemSecondaryAction>
                                        <IconButton aria-label="Edit">
                                            <Link to="/tasks/1/edit"><EditIcon /></Link>
                                            <DeleteIcon onClick={this.props.confirmDeleteTask.bind(this,value)} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                        )}
                    </List>
                    <DeleteTask deleteOpen={this.props.tasks.confirmTaskDelete} handleYes={this.props.handleYes.bind(this,)} handleNo={this.props.handleNo.bind(this)} taskToBeDeleted={this.props.tasks.taskToBeDeleted}/>
                </DefaultLayout>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        confirmTaskDelete : state.confirmTaskDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(taskFetchData(url)),
        confirmDeleteTask: (task, e) => {
            return dispatch(confirmDeleteTask(task));
        },
        handleYes :(task,e)=> {

            return dispatch(deleteTaskfromServer(task))
        },
        handleNo : (e,task) => dispatch(cancelDeleteTask(task))
    };
};

Tasks = withStyles(styleSheet)(Tasks);
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);