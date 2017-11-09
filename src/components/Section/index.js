import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';

const Section = ({ children }) => (
    <Grid
        container
        direction="column"
        alignItems={"center"}
        spacing={0}
        >
        {children}
    </Grid>
);

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;