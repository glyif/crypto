import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { Grid, Button, Typography, withStyles } from 'material-ui';

const styles = {
    root: {
        // TODO: Use variables
        padding: '20px 80px',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0px -2px 18px 0px rgba(72, 89, 102, 0.25)',
    },
    featureItem: {
        maxWidth: '240px',
        textAlign: 'center',
    },
    featureIcon: {
        width: '130px',
        height: '60px',
    },
    buttonWrap: {
        paddingTop: '40px',
        textAlign: 'center',
    },
};

const Features = ({ items, classes }) => (
    <Grid
        container
        className={classes.root}
        justify="space-between"
        spacing={0}
    >
        {R.map(item => (
            <Grid
                xs={12 / items.length}
                key={item.id}
                className={classes.featureItem}
            >
                <Grid
                    container
                    direction="column"
                >
                    <Grid item>
                        <img
                            className={classes.featureIcon}
                            src={item.icon}
                            alt={item.title}
                        />
                    </Grid>
                    <Grid item>
                        <Typography type="subheading">
                            {item.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {item.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        ), items)}
        <Grid
            item
            xs={12}
            className={classes.buttonWrap}
        >
            <Button color="primary">Learn More</Button>
        </Grid>
    </Grid>
);

Features.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Features);