import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from 'material-ui';
import EmailForm from '../EmailForm';

const styles = theme => ({
    root: {
        textAlign: 'center',
        position: 'relative',
    },
    headline: {
        paddingBottom: `${theme.spacing.unit}px`,
        color: theme.palette.common.white,
    },
    subheading: {
        marginBottom: '20px',
        color: theme.palette.common.white,
        opacity: 0.6,
    },
});

const TagLine = ({ classes }) => (
    <div className={classes.root}>
        <Typography
            type="headline"
            className={classes.headline}
        >
            Browse, chat and make payments
            securely on the decentralized web
        </Typography>
        <Typography
            type="subheading"
            className={classes.subheading}
        >
            Status, the Ethereum discovery tool.
        </Typography>
        <EmailForm />
    </div>
);

TagLine.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagLine);