import React from 'react';
import { Form,Col,FormGroup,Checkbox,Button,FormControl,ControlLabel} from 'react-bootstrap';
import {categoriesFetchData} from './TaskFieldActions';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
class TaskFields extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories('http://localhost:3001/categories');
    }

    render() {
        let categories = [];
        if(this.props.categories.categories){
            categories = categories.concat(this.props.categories.categories);
        }
        return (
           <div>
               <FormGroup controlId="formHorizontalDescription">
                   <Col componentClass={ControlLabel} sm={2}>
                       Description
                   </Col>
                   <Col sm={10}>
                       <Field name="description" className="form-control" component="textarea"/>
                   </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalCategory">
                   <Col componentClass={ControlLabel} sm={2}>
                       Category
                   </Col>
                   <Col sm={10}>
                       <Field name="categoryId" component="select" className="form-control">
                           <option>Please Select</option>
                           {categories.map((c) =>
                                   <option key={c.id} value={c.id}>{c.name}</option>
                           )}
                       </Field>
                   </Col>
               </FormGroup>

               <FormGroup controlId="formHorizontalDueDate">
                   <Col componentClass={ControlLabel} sm={2}>
                       Due Date
                   </Col>
                   <Col sm={10}>
                       <FormControl type="text" placeholder="Title" />
                   </Col>
               </FormGroup>

               <FormGroup controlId="formHorizontalCompleted">
                   <Col smOffset={2} sm={10}>
                       <div className="checkbox">
                           <label>
                        <Field
                           name="completed"
                           id="completed"
                           component="input"
                           type="checkbox"
                           />
                               Completed
                               </label>
                       </div>
                   </Col>
               </FormGroup>
           </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (url) => dispatch(categoriesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFields);
