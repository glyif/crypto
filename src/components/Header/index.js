import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from 'material-ui';
import Logo from '../Logo';
import Nav from '../Nav';
import SocialLinks from '../SocialLinks';

const NAV_ITEMS = [
    {
        label: 'Blog',
        url: '#',
    },
    {
        label: 'Wiki',
        url: '#',
    },
    {
        label: 'Github',
        url: '#',
    },
    {
        label: 'Hardwallet',
        url: '#',
    },
    {
        label: 'Open Bounty',
        url: '#',
    },
];

const COLUMN_WIDTH = 260;

const styles = theme => ({
    root: {
        padding: `0 ${theme.spacing.unit * 4}px`,
    },
    logoWrap: {
        width: `${COLUMN_WIDTH}px`,
    },
    socialLinksWrap: {
        width: `${COLUMN_WIDTH}px`,
    },
});

const Header = ({ classes }) => (
    <Grid
        container
        spacing={0}
        className={classes.root}
    >
        <div className={classes.logoWrap}>
            <Logo />
        </div>
        <Nav items={NAV_ITEMS} />
        <div className={classes.socialLinksWrap}>
            <SocialLinks />
        </div>
    </Grid>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);