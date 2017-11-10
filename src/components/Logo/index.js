import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from 'material-ui';
import logo from './logo.png';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    logoImg: {
        width: '58px',
        height: '58px',
        backgroundImage: `url(${logo})`,
        backgroundSize: '58px',
        backgroundPosition: 'left',
    },
    text: {
        // TODO: use variables
        margin: '2px 0 0 8px',
    },
    brand: {
        lineHeight: 'inherit',
        color: theme.palette.common.white,
    },
    tagline: {
        color: theme.palette.common.white,
        opacity: 0.5,
    },
});

const Logo = ({ classes }) => (
    <Grid
        container
        className={classes.root}
        component="a"
        justify="flex-start"
        spacing={0}
    >
        <span className={classes.logoImg} />
        <div className={classes.text}>
            <Typography
                className={classes.brand}
                type="headline"
                component="span"
            >
                Status
            </Typography>
            <Typography
                className={classes.tagline}
            >
                A Mobile Ethereum OS
            </Typography>
        </div>
    </Grid>
);

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);