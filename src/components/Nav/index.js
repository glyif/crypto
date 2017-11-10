import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Button, withStyles } from 'material-ui';

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
    },
    navItem: {
        display: 'flex',
        // TODO: use variables
        padding: '10px 15px 15px',
        textTransform: 'none',
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 'normal',
        color: theme.palette.common.white,
        '&:hover': {
            background: 'none',
        },
    },
});

const Nav = ({ classes, items }) => (
    <div className={classes.root}>
        {R.map(({ label, url }) => (
            <Button
                key={label}
                classes={{ root: classes.navItem }}
                href={url}
                component="a"
                dense
            >
                {label}
            </Button>
        ), items)}
    </div>
);

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);