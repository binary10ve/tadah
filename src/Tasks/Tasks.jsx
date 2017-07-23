import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from './../DefaultLayout';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {confirmDeleteTask,deleteTask,cancelDeleteTask,deleteTaskfromServer,fetchCategoryAndTask,taskFilterChange,tasksSortByChange} from './TasksActions';
import {DeleteTask} from './../DeleteTask';
import { Grid, Row,Col,ListGroup,ListGroupItem,Button,DropdownButton,MenuItem,Table } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome/lib';
import Loader from './../loader.svg';

import SortBy from './../Utils/SortBy.js';

class Tasks extends React.Component {

    componentDidMount() {
        this.props.fetchCategoryAndTask('http://localhost:3001/categories','http://localhost:3001/tasks');
    }


    constructor(props) {
        super(props);

    }

    onFilterChange(value){
        this.props.taskFilterChange(value);
    }
    sortBy(value){
        this.props.tasksSortByChange(value);
    }

    render() {
        let  tasks = [];
        const categories = {};
        const filter = this.props.filter;
        const sortByOption = this.props.sortByOption || 'description';
        if(this.props.tasks && this.props.tasks.categories ){
            this.props.tasks.categories.forEach((c)=> {
                categories[c.id] = c.name
            });
        }
        if(this.props.tasks && this.props.tasks ){
            tasks = this.props.tasks.tasks;
        }
        tasks = tasks.filter(function (task) {
            switch (filter) {
                case 'all':
                    return true;
                case 'completed':
                    return task.completed;
                case 'pending':
                    return !task.completed;
                default:
                    return true;
            }
        });

        console.log("Sorting by ", sortByOption);
        tasks = SortBy(tasks,(t)=>t[sortByOption]);



        if(this.props.tasksAreLoading){
            return (
                <div>
                    <DefaultLayout>
                        <Grid>
                            <Row>
                                <Col md={8} mdOffset={2}>
                                    <section className="panel tasks-widget">
                                        <header className="panel-heading">
                                            Tasks
                                        </header>
                                        <div className="panel-body when-loading">
                                            <img src={Loader}/>
                                        </div>
                                    </section>
                                </Col>
                            </Row>
                        </Grid>
                    </DefaultLayout>
                </div>
            );

        }else{
            return (
                <div>
                    <DefaultLayout>
                        <Grid>
                            <Row>
                                <Col md={8} mdOffset={2}>
                                    <section className="panel tasks-widget">
                                        <header className="panel-heading">
                                            Tasks
                                            <Link className="btn btn-success btn-sm pull-right" to="/tasks/add">Add New Task</Link>
                                        </header>
                                        <div className="panel-body">
                                            <div className=" add-task-row">

                                                <div className="task-option">
                                                    <DropdownButton title={`Sort By${': ' + (sortByOption == 'categoryId' ? 'Category' : sortByOption) }`} id="filter" onSelect={this.sortBy.bind(this)}>
                                                        <MenuItem eventKey="description" active={this.props.sortByOption == "description"}>Description</MenuItem>
                                                        <MenuItem eventKey="categoryId" active={this.props.sortByOption == "categoryId"}>Category</MenuItem>
                                                        <MenuItem eventKey="dueDate" active={this.props.sortByOption == "dueDate"}>Due Date</MenuItem>
                                                    </DropdownButton>
                                                    <DropdownButton title={`Filter By${': ' + this.props.filter}`} id="filter" onSelect={this.onFilterChange.bind(this)}>
                                                        <MenuItem eventKey="all" active={this.props.filter == "all"}>All</MenuItem>
                                                        <MenuItem eventKey="completed" active={this.props.filter == "completed"}>Completed</MenuItem>
                                                        <MenuItem eventKey="pending" active={this.props.filter == "pending"}>Pending</MenuItem>
                                                    </DropdownButton>
                                                </div>
                                            </div>


                                            <div className="task-content">
                                                <Table striped bordered condensed hover>
                                                    <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th onClick={this.sortBy.bind(this,'description')}>Description</th>
                                                        <th onClick={this.sortBy.bind(this,'categoryId')}>Category</th>
                                                        <th onClick={this.sortBy.bind(this,'dueDate')}>Due Date</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {tasks.map((t,i) =>
                                                            <tr key={t.id}>
                                                                <td>{i+1}</td>
                                                                <td>{t.description}</td>
                                                                <td>{categories[t.categoryId]}</td>
                                                                <td>{t.dueDate}</td>
                                                                <td><Link to={`/tasks/${t.id}/edit`} className="btn btn-xs btn-primary"><FontAwesome name="pencil"></FontAwesome></Link>
                                                                    <Button bsSize="xsmall" bsStyle="danger" className="delete-action" onClick={this.props.confirmDeleteTask.bind(this,t)}><FontAwesome name="trash"></FontAwesome></Button></td>
                                                            </tr>
                                                    )}
                                                    </tbody>
                                                </Table>
                                            </div>


                                        </div>
                                    </section>
                                    <DeleteTask deleteOpen={this.props.tasks.confirmTaskDelete} handleYes={this.props.handleYes.bind(this)} handleNo={this.props.handleNo.bind(this)} taskToBeDeleted={this.props.tasks.taskToBeDeleted}/>
                                </Col>
                            </Row>
                        </Grid>
                    </DefaultLayout>
                </div>
            );
        }


    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        confirmTaskDelete : state.confirmTaskDelete,
        filter : state.tasks.filter,
        sortByOption : state.tasks.sortByOption,
        tasksAreLoading: state.tasks.tasksAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmDeleteTask: (task, e) => {
            return dispatch(confirmDeleteTask(task));
        },
        tasksSortByChange : (sortyBy) => dispatch(tasksSortByChange(sortyBy)),
        taskFilterChange : (filter) => dispatch(taskFilterChange(filter)),
        fetchCategoryAndTask:  (categoryUrl, taskUrl)=> dispatch(fetchCategoryAndTask(categoryUrl, taskUrl)),
        handleYes :(task,e)=> {
            return dispatch(deleteTaskfromServer(task))
        },
        handleNo : (e,task) => dispatch(cancelDeleteTask(task))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);