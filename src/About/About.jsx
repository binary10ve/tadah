import React from 'react';
import DefaultLayout from './../DefaultLayout';
import { Grid, Row,Col} from 'react-bootstrap';
import LibraryPanel from './LibraryPanel';
import TechStack from './TechStack';

function About() {

    return (
        <DefaultLayout>
            <section className="panel tasks-widget">
                <header className="panel-heading">
                    About
                </header>
                <div className="panel-body">
                    <h3>Primary Libraries used:</h3>
                    <article>
                        {TechStack.map((tech, i) =>
                                <LibraryPanel key={i} name={tech.name} link={tech.link} version={tech.version}>
                                    {tech.description}
                                </LibraryPanel>
                        )}
                    </article>
                </div>
            </section>
        </DefaultLayout>
    );
}


export default About;