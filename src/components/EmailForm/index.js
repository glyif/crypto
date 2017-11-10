import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Input, Button, withStyles } from 'material-ui';

const styles = {
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
    },
};

const EmailForm = ({ classes }) => (
    <Grid
        container
        justify="center"
    >
        <Grid item>
            <Input
                placeholder="Enter your email"
                className={classes.input}
            />
        </Grid>
        <Grid item>
            <Button type="primary">
                Get Early Access
            </Button>
        </Grid>
    </Grid>
);

EmailForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);