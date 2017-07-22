import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from './../DefaultLayout';;


const technologyStack = [
    { name : "React", version : "4", link: "xyz"},
    {name : "React Router", version : "5"}
]

function About(props) {

    return (
        <DefaultLayout>
        <div>
            About Page
            {technologyStack.map((value,i) =>
                {value.version}
            )}
        </div>
        </DefaultLayout>
    );
}


export default About;