import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

const styles = {
    root: {
        backgroundColor: '#eee',
        fontWeight: 300,
        fontSize: '15px',
        lineHeight: '25px',
        textRendering: 'optimizeLegibility',
        webkitFontSmoothing: 'antialiased',
    }
};

const App = ({ children, classes }) => (
    <div className={classes.root}>
        <div className={classes.container}>
            {children}
        </div>
    </div>
);

App.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);