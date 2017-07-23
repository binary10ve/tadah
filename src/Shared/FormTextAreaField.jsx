import React from 'react';
import {ControlLabel} from 'react-bootstrap';
const FormTextAreaField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
    }) =>{
    return (<div>
        <div>
            <textarea className="form-control" {...input} placeholder={label} type={type} />
            {touched &&
            ((error &&
                <span>
            {error}
                    <ControlLabel>Input  warning and feedback icon</ControlLabel>
          </span>
            ) ||
            (warning &&
            <span>
              {warning}
            </span>))}
        </div>
    </div>)
}


export default FormTextAreaField;