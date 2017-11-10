import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

const styles = {
    root: {
        // TODO: Use variables
        backgroundColor: '#eef2f5',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '25px',
        color: '#49555f',
        textRendering: 'optimizeLegibility',
        webkitFontSmoothing: 'antialiased',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
    },
};

const Layout = ({ children, classes }) => (
    <div className={classes.root}>
        <div className={classes.container}>
            {children}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);