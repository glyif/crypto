import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';

const Sections = ({ children }) => (
    <Grid
        container
        direction="column"
        spacing={0}
    >
        {children}
    </Grid>
);

Sections.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Sections;