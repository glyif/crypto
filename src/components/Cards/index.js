import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Grid } from 'material-ui';
import Fade from 'react-reveal/Fade';
import Card from '../Card';

const Cards = ({ items }) => (
    <Grid
        container
        component={Fade}
        delay={0.2}
        bottom
        cascade
        duration={600}
    >
        {R.map(item => (
            <Grid
                key={item.title}
                item
                xs={3}
            >
                <Card {...item} />
            </Grid>
        ), items)}
    </Grid>
);

Cards.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    })).isRequired,
};

export default Cards;