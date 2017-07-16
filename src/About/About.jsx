

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import DefaultLayout from './../DefaultLayout';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
}));

const technologyStack = [
    { name : "React", version : "4", link: "xyz"},
    {name : "React Router", version : "5"}
]

function SimpleCard(props) {
    const classes = props.classes;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <DefaultLayout>
        <div>
            {technologyStack.map((value,i) =>
            <Card className={classes.card} key={i}>
                <CardContent>
                    <Typography type="headline" component="h2">
                        {value.name} <Button dense>Learn More</Button>
                    </Typography>
                    <Typography type="body1" className={classes.pos}>
                        Version : {value.version}
                    </Typography>
                    <Typography component="p">
                        A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
                    </Typography>

                </CardContent>
            </Card>
            )}
        </div>
        </DefaultLayout>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleCard);