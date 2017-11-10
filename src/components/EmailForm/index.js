import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button, withStyles } from 'material-ui';
import isEmail from '../../utils/isEmail';

const styles = theme => ({
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
    },
    inputRoot: {
        padding: 0,
        '&:before': {
            content: 'none',
        },
        '&:after': {
            content: 'none',
        },
    },
    input: {
        border: 'none',
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.12)',
        color: theme.palette.common.white,
        fontSize: 16,
        padding: '10px 15px',
        transition: 'background-color .2s ease',
        '&:focus': {
            background: 'rgba(255, 255, 255, 0.2)',
        },
    },
    button: {
        backgroundColor: '#68c0f8',
        borderRadius: 8,
    },
    error: {
        color: theme.palette.common.white,
        opacity: 0.5,
    },
});

class EmailForm extends Component {
    state = {
        email: '',
        invalid: null,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;

        if (!isEmail(email)) {
            this.setState({
                invalid: true,
            });

            return;
        }

        alert('We\'ll get in touch soon. Thanks!'); // eslint-disable-line no-alert
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { invalid } = this.state;
        const nextInvalid = isEmail(value) ? false : invalid;

        this.setState({
            email: value,
            invalid: nextInvalid,
        });
    }

    render() {
        const { classes } = this.props;
        const { email, invalid } = this.state;

        return (
            <Grid
                container
                justify="center"
                component="form"
                onSubmit={this.handleSubmit}
            >
                <Grid item>
                    <TextField
                        placeholder="Enter your email"
                        InputProps={{
                            classes: {
                                root: classes.inputRoot,
                                input: classes.input,
                            },
                        }}
                        value={email}
                        onChange={this.handleChange}
                        helperText={invalid &&
                        <span className={classes.error}>Please enter a valid email address.</span>
                        }
                    />
                </Grid>
                <Grid item>
                    <Button
                        color="contrast"
                        className={classes.button}
                        type="submit"
                    >
                        Get Early Access
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

EmailForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);