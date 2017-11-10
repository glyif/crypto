import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui';
import iosScreen from './IOS_Chat4.png';
import androidScreen from './Android_Chats.png';

const styles = theme => ({
    root: {
        width: '476px',
        height: '636px',
        position: 'absolute',
        right: '-20px',
        top: '106px',
        zIndex: '0',
    },
    phoneWrap: {
        position: 'absolute',
    },
    iphoneWrap: {
        width: '292px',
        height: '610px',
        left: '0',
        top: '-3px',
        zIndex: '500',
    },
    androidWrap: {
        width: '290px',
        height: '574px',
        left: '186px',
        top: '62px',
        zIndex: '400',
    },
    phone: {
        position: 'absolute',
        // opacity: '0',
        transform: 'translate3d(0, 40px, 0)',
        transition: 'transform .6s ease, opacity .3s ease',
    },
    iphone: {
        width: '292px',
        height: '610px',
        background: '#FFFFFF',
        boxShadow: '11px 15px 39px 0 rgba(31, 35, 61, 0.2), 0 2px 4px 0 rgba(88, 100, 177, 0.01), inset 0 0 4px 4px #dfe1ec',
        borderRadius: '40px',
        zIndex: '600',
    },
    android: {
        width: '290px',
        height: '574px',
        background: '#FFFFFF',
        boxShadow: '11px 15px 39px 0 rgba(31, 35, 61, 0.2), 0 2px 4px 0 rgba(88, 100, 177, 0.01), inset 0 0 4px 4px #dfe1ec',
        borderRadius: '30px',
    },
    iphoneDot: {
        width: '8px',
        height: '8px',
        position: 'absolute',
        left: '50%',
        top: '22px',
        transform: 'translate3d(-50%, 0, 0)',
        borderRadius: '50%',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    androidDot: {
        width: '7px',
        height: '7px',
        position: 'absolute',
        left: '76px',
        top: '25px',
        borderRadius: '50%',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    iphoneLine: {
        width: '44px',
        height: '6px',
        position: 'absolute',
        left: '50%',
        top: '36px',
        transform: 'translate3d(-50%, 0, 0)',
        borderRadius: '5px',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    androidLine: {
        width: '94px',
        height: '6px',
        position: 'absolute',
        left: '50%',
        top: '25px',
        transform: 'translate3d(-50%, 0, 0)',
        borderRadius: '5px',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    iphoneScreen: {
        width: '270px',
        height: '479px',
        border: '1px solid #E7E9F0',
        backgroundColor: '#F3F4F8',
        position: 'absolute',
        left: '50%',
        top: '60px',
        borderRadius: '4px',
        transform: 'translate3d(-50%, 0, 0)',
        backgroundImage: `url(${iosScreen})`,
        backgroundSize: '270px',
    },
    androidScreen: {
        width: '262px',
        height: '466px',
        border: '1px solid #E7E9F0',
        backgroundColor: '#F3F4F8',
        position: 'absolute',
        left: '50%',
        top: '50px',
        borderRadius: '4px',
        transform: 'translate3d(-50%, 0, 0)',
        backgroundImage: `url(${androidScreen})`,
        backgroundSize: '262px',
    },
    iphoneButton: {
        width: '40px',
        height: '40px',
        position: 'absolute',
        left: '50%',
        bottom: '18px',
        transform: 'translate3d(-50%, 0, 0)',
        borderRadius: '50%',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    androidButton: {
        width: '94px',
        height: '6px',
        position: 'absolute',
        left: '50%',
        bottom: '26px',
        transform: 'translate3d(-50%, 0, 0)',
        borderRadius: '5px',
        opacity: '0.5',
        background: '#DAE1EA',
        boxShadow: 'inset 0 1px 2px 0 #B3B8D0',
    },
    headline: {
        paddingBottom: `${theme.spacing.unit}px`,
    },
});

const BigPhones = ({ classes }) => (
    <div className={classes.root}>
        <div
            className={classNames(classes.phoneWrap, classes.iphoneWrap)}
            style={{ transform: 'translate3d(0px, 0px, 0px) scale(1)', opacity: 1 }}
        >
            <div className={classNames(classes.phone, classes.iphone)}>
                <div className={classes.iphoneDot} />
                <div className={classes.iphoneLine} />
                <div className={classes.iphoneScreen} />
                <div className={classes.iphoneButton} />
            </div>
        </div>
        <div
            className={classNames(classes.phoneWrap, classes.androidWrap)}
            style={{ transform: 'translate3d(0px, 0px, 0px) scale(1)', opacity: 1 }}
        >
            <div className={classNames(classes.phone, classes.android)}>
                <div className={classes.androidDot} />
                <div className={classes.androidLine} />
                <div className={classes.androidScreen} />
                <div className={classes.androidButton} />
            </div>
        </div>
    </div>
);

BigPhones.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BigPhones);