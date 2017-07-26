import React from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';


class TaskSortMenu extends React.Component {

    render(){
        const sortByOption = this.props.sortByOption ||'description';
        return (
            <DropdownButton
                title={`Sort By${': ' + (sortByOption === 'categoryId' ? 'Category' : sortByOption) }`}
                id="filter" onSelect={this.props.sortBy}>
                <MenuItem eventKey="description"
                          active={sortByOption === "description"}>Description</MenuItem>
                <MenuItem eventKey="categoryId"
                          active={sortByOption === "categoryId"}>Category</MenuItem>
                <MenuItem eventKey="dueDate" active={sortByOption === "dueDate"}>Due
                    Date</MenuItem>
            </DropdownButton>
        );
    }
}


export default TaskSortMenu;