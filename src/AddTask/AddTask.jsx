import React from 'react';
import DefaultLayout from './../DefaultLayout';

export default class AddTask extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultLayout>
                <div className="mdc-form-field">
                    <input type="checkbox" id="input"/>
                    <label for="input">Input Label</label>
                </div>
            </DefaultLayout>
        );
    }
}