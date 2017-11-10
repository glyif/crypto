import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Button, withStyles } from 'material-ui';

const styles = theme => ({
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
    },
    inputRoot: {
        padding: 0,
        '&:before': {
            content: 'none',
        },
        '&:after': {
            content: 'none',
        },
    },
    input: {
        border: 'none',
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.12)',
        color: theme.palette.common.white,
        fontSize: 16,
        padding: '10px 15px',
        transition: 'background-color .2s ease',
        '&:focus': {
            background: 'rgba(255, 255, 255, 0.2)',
        },
    },
    button: {
        backgroundColor: '#68c0f8',
        borderRadius: 8,
    },
});

const EmailForm = ({ classes }) => (
    <Grid
        container
        justify="center"
    >
        <Grid item>
            <Input
                placeholder="Enter your email"
                classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                }}
            />
        </Grid>
        <Grid item>
            <Button
                color="contrast"
                className={classes.button}
            >
                Get Early Access
            </Button>
        </Grid>
    </Grid>
);

EmailForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);