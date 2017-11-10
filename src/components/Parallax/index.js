import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Based on:
// https://github.com/Nitive/react-motion-pack/blob/master/modules/Parallax/index.jsx
export default class Parallax extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        max: PropTypes.number,
        speed: PropTypes.number,
    };

    static defaultProps = {
        speed: 1,
        max: 1000,
        initial: 0,
    };

    componentWillMount() {
        this.setState({
            position: this.getPosition(),
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    getPosition = () => {
        const { max, speed } = this.props;
        const position = window.pageYOffset * speed;
        return position > max ? max : position;
    }

    scrollHandler = () => {
        this.setState({
            position: this.getPosition(),
        });
    }

    render() {
        const style = {
            transform: `translateY(${this.state.position}px)`,
        };

        return React.cloneElement(this.props.children, { style });
    }
}