import React from 'react';
const FormSelectField = ({
    input,
    options,
    type,
    meta: { touched, error, warning }
    }) =>
    <div>
        <div>
            <select className="form-control" {...input} type={type} >
            <option value="">Please Select</option>
                {options.map((c) =>
                        <option key={c.id} value={c.id}>{c.name}</option>
                )}
            </select>
            {touched &&
            ((error &&
            <span>
            {error}
          </span>) ||
            (warning &&
            <span>
              {warning}
            </span>))}
        </div>
    </div>

export default FormSelectField;