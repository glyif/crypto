import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import Cards from '../Cards';
import aragonIcon from './aragon-avatar@2x.png';
import etheriscIcon from './etherisc-avatar@2x.png';
import ethlanceIcon from './ethlance-avatar@2x.png';
import gnosisIcon from './gnosis-avatar@2x.png';
import oasisIcon from './oasis-avatar@2x.png';
import ujoIcon from './ujo-avatar@2x.png';
import uportIcon from './uport-avatar@2x.png';

const TITLE = 'Decentralized Apps at your fingertips';
const DESCRIPTION = 'With Status your mobile device becomes a light client node on the Ethereum Network, enabling you to access Ethereum’s entire ecosystem from anywhere.';

const CARDS = [
    {
        title: 'uPort',
        description: 'Declare digital independence. uPort is a self-sovereign identity system.',
        icon: uportIcon,
    },
    {
        title: 'Gnosis',
        description: 'Crowd sourced wisdom. Make complex predictions on the go with an easy to use prediction market.',
        icon: gnosisIcon,
    },
    {
        title: 'Oasis Exchange',
        description: 'Enjoy a near-instant decentralized digital asset exchange between ETH and ERC20 tokens.',
        icon: oasisIcon,
    },
    {
        title: 'Ethlance',
        description: 'The decentralized jobs marketplace. Hire or work for cryptocurrency, with no fees.',
        icon: ethlanceIcon,
    },
    {
        title: 'Aragon',
        description: 'Create unstoppable companies and organizations, and value without borders.',
        icon: aragonIcon,
    },
    {
        title: 'Etherisc',
        description: 'A decentralized insurance platform. Buy a policy on the go, and be paid claims automatically.',
        icon: etheriscIcon,
    },
    {
        title: 'Ujo',
        description: 'Ujo is a home for artists. Create and control your creative content, and share it with the world.',
        icon: ujoIcon,
    },
];

const styles = {
    root: {
        margin: '40px 0 ',
    },
    cardsWrap: {
        width: '880px',
        margin: '50px auto 30px',
    },
};

const EcosystemSection = ({ classes }) => (
    <Section
        className={classes.root}
    >
        <SectionHeader
            title={TITLE}
            description={DESCRIPTION}
        />
        <div className={classes.cardsWrap}>
            <Cards items={CARDS} />
        </div>
    </Section>
);

EcosystemSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EcosystemSection);