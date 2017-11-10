import React from 'react';
import { Typography, withStyles } from 'material-ui';

const styles = {
    root: {
        width: '400px',
        margin: '0 auto',

        textAlign: 'center',
    },
    title: {
        marginBottom: '15px',
    },
};

const SectionHeader = ({ title, description, classes }) => (
    <div className={classes.root}>
        <Typography
            type="headline"
            className={classes.title}
        >
            {title}
        </Typography>
        <Typography type="subheading">
            {description}
        </Typography>
    </div>
);

export default withStyles(styles)(SectionHeader);