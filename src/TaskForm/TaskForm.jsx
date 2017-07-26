import React from 'react';
import { Form,Col,FormGroup,Checkbox,Button,FormControl,ControlLabel} from 'react-bootstrap';
import {categoriesFetchData} from './TaskFormActions';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import CancelButton from './../Shared/CancelButton';
import FormDatePickerField from './../Shared/FormDatePickerField';
import FormTextAreaField from './../Shared/FormTextAreaField';
import FormSelectField from './../Shared/FormSelectField';

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
            <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
               <FormGroup controlId="formHorizontalDescription" validationState={this.props.errors.description ? "error": null}>
                   <Col componentClass={ControlLabel} sm={2}>
                       Description
                   </Col>
                   <Col sm={10}>
                       <Field name="description" className="form-control" component={FormTextAreaField} />
                   </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalCategory" validationState={this.props.errors.categoryId ? "error": null}>
                   <Col componentClass={ControlLabel} sm={2}>
                       Category
                   </Col>
                   <Col sm={10}>
                       <Field name="categoryId" component={FormSelectField} options={categories} className="form-control">
                       </Field>
                   </Col>
               </FormGroup>

               <FormGroup controlId="formHorizontalDueDate">
                   <Col componentClass={ControlLabel} sm={2}>
                       Due Date
                   </Col>
                   <Col sm={10}>
                       <Field
                       name="dueDate"
                       type="text"
                       component={FormDatePickerField}
                       label="Due Date"
                       />
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
               <FormGroup>
                   <Col smOffset={2} sm={10} className="form-footer">
                       <CancelButton/>
                       <Button type="submit" bsStyle="primary">
                           Save
                       </Button>
                   </Col>
               </FormGroup>
           </form>
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
