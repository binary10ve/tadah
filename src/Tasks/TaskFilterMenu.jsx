import React from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';


class TaskFilterMenu extends React.Component {
    render(){
        const filterByOption = this.props.filterByOption ||'all';
        return (
            <DropdownButton title={`Filter By${': ' + filterByOption}`} id="filter"
                            onSelect={this.props.filterBy}>
                <MenuItem eventKey="all" active={filterByOption === "all"}>All</MenuItem>
                <MenuItem eventKey="completed" active={filterByOption === "completed"}>Completed</MenuItem>
                <MenuItem eventKey="pending"
                          active={filterByOption === "pending"}>Pending</MenuItem>
            </DropdownButton>
        );
    }
}


export default TaskFilterMenu;