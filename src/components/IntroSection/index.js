import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Section from '../Section';
import Header from '../Header';
import TagLine from '../Tagline';
import BigPhones from '../BigPhones';
import Features from '../Features';
import sendIcon from './send_icon.png';
import browseIcon from './browse_icon.png';
import buyIcon from './buy_icon.png';
import dot from './dot.svg'

const FEATURES = [
    {
        id: 'send',
        icon: sendIcon,
        title: 'Send, Receive, Store Ether',
        description: 'Safely store your ETH and other Ethereum crypto-assets.',
    },
    {
        id: 'browse',
        icon: browseIcon,
        title: 'Browse Decentralized Apps',
        description: 'Explore the next generation of apps, with the next generation of Browser.',
    },
    {
        id: 'buy',
        icon: buyIcon,
        title: 'Buy and Sell Ether Locally',
        description: 'Discover nearby Status users to exchange goods and services.',
    },
];

const styles = {
    sectionInner: {
        height: '780px',
        marginTop: '30px',
        paddingTop: '40px',
        // TODO: use variables
        backgroundColor: '#4A5AB5',
        backgroundImage: `url(${dot})`,
        borderRadius: '10px 10px 0 0',
    },
    tagLineWrap: {
        display: 'flex',
        position: 'absolute',
        // TODO: use variables
        top: '260px',
        left: '90px',
        width: '440px',
    },
    featuresWrap: {
        position: 'relative',
        top: '-139px',
        width: '1180px',
        height: '300px',
    },
};

const IntroSection = ({ classes }) => (
    <Section
        innerClassName={classes.sectionInner}
        outerContent={
            <div className={classes.featuresWrap}>
                <Features items={FEATURES} />
            </div>
        }
    >
        <Header />
        <div className={classes.tagLineWrap}>
            <TagLine />
        </div>
        <BigPhones />
    </Section>
);

IntroSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroSection);