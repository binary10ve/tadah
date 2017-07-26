import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
const FormDatePickerField = ({
    input,
    type,
    meta: { touched, error, warning }
    }) =>
    <div>
        <div>
            <DatePicker {...input} dateFormat="YYYY-DD-MM" selected={input.value ? moment(input.value) : null} />
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

export default FormDatePickerField;