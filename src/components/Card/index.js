import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Avatar, Typography, withStyles } from 'material-ui';

const styles = theme => ({
    root: {
        height: 240,
        position: 'relative',
        borderRadius: 8,

    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    icon: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        width: 50,
        height: 50,
    },
});

const CustomCard = ({ title, description, icon, classes }) => (
    <Card className={classes.root} elevation={0}>
        <CardContent>
            <Typography type="subheading" className={classes.title}>
                {title}
            </Typography>
            <Typography type="body1">
                {description}
            </Typography>
            <Avatar
                src={icon}
                alt={title}
                className={classes.icon}
            />
        </CardContent>
    </Card>
);

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);