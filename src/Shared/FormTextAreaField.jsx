import React from 'react';
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