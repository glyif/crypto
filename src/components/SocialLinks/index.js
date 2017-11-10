import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Avatar, withStyles } from 'material-ui';
import fbIcon from './fb.svg';
import twitterIcon from './tw.svg';
import registerIcon from './ri.svg';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    socialLink: {
        margin: `0 ${theme.spacing.unit}px`,
    },
    socialImg: {
        width: '50%',
    },
    // TODO: use variables
    fb: {
        backgroundColor: '#4675DF',
    },
    twitter: {
        backgroundColor: '#4DB9FE',
    },
    register: {
        backgroundColor: '#7dc8a2',
    },
});

// TODO: individual social links
// should be extracted to separate components
const SocialLinks = ({ classes }) => (
    <div className={classes.root}>
        <Avatar
            className={classNames(classes.socialLink, classes.fb)}
            component="a"
            src={fbIcon}
            classes={{
                img: classes.socialImg,
            }}
        />
        <Avatar
            className={classNames(classes.socialLink, classes.twitter)}
            component="a"
            src={twitterIcon}
            classes={{
                img: classes.socialImg,
            }}
        />
        <Avatar
            className={classNames(classes.socialLink, classes.register)}
            component="a"
            src={registerIcon}
            classes={{
                img: classes.socialImg,
            }}
        />
    </div>
);

SocialLinks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialLinks);