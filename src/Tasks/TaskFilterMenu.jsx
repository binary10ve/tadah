import React from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';


class TaskFilterMenu extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <DropdownButton title={`Filter By${': ' + this.props.filterByOption}`} id="filter"
                            onSelect={this.props.filterBy}>
                <MenuItem eventKey="all" active={this.props.filterByOption == "all"}>All</MenuItem>
                <MenuItem eventKey="completed" active={this.props.filterByOption == "completed"}>Completed</MenuItem>
                <MenuItem eventKey="pending"
                          active={this.props.filterByOption == "pending"}>Pending</MenuItem>
            </DropdownButton>
        );
    }
}


export default TaskFilterMenu;