import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { withStyles } from 'material-ui';

const styles = {
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    navItem: {
        display: 'flex',
        // TODO: use variables
        padding: '10px 15px 15px',
    },
};

const Nav = ({ classes, items }) => (
    <div className={classes.root}>
        {R.map(({ label, url }) => (
            <a
                key={url}
                className={classes.navItem}
                href={url}
            >
                {label}
            </a>
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