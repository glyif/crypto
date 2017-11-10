import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, withStyles } from 'material-ui';

const styles = {
    inner: {
        // TODO: use variable
        width: '1080px',
        position: 'relative',
    },
};

const Section = ({ children, className, innerClassName, outerContent, classes }) => (
    <Grid
        container
        direction="column"
        alignItems="center"
        spacing={0}
        className={className}
    >
        <div className={classNames(classes.inner, innerClassName)}>
            {children}
        </div>
        {outerContent}
    </Grid>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    innerClassName: PropTypes.string,
    outerContent: PropTypes.node,
};

Section.defaultProps = {
    className: '',
    innerClassName: '',
    outerContent: null,
};

export default withStyles(styles)(Section);