import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

import './signin-and-signup.styles.scss';

class SignInAndSignUp extends Component {
    state = {
        registration: false,
    };

    _handleRegistration = regisValue => {
        this.setState({ registration: regisValue });
    };

    render() {
        const { registration } = this.state;

        return (
            <div className='sign-in-and-sign-up'>
                {registration ? (
                    <SignUp
                        onClickRegistration={this._handleRegistration}
                    />
                ) : (
                    <SignIn
                        onClickRegistration={this._handleRegistration}
                    />
                )}
            </div>
        );
    }
}

export default SignInAndSignUp;
