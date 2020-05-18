import React, { Component } from 'react';
import FormInput from '../contact-form-input/contact-form-input.component';
import { connect } from 'react-redux';
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/user.actions';
import ButtonSemantic from '../button-semantic/button-semantic.component';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { googleSignInStart, onClickRegistration } = this.props;
        return (
            <div className='sign-in'>
                <div className='container-form'>
                    <div className='info-form'>
                        <h2>Ya tengo una cuenta</h2>
                        <span>Entra con tu correo y contraseña</span>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type='email'
                            name='email'
                            label='Correo Electrónico'
                            icon='at'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            label='Contraseña'
                            icon='hashtag'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            required
                        />
                        <div className='buttons'>
                            <ButtonSemantic type='submit'>
                                Entrar
                            </ButtonSemantic>
                            <ButtonSemantic
                                secondColorCombination
                                type='button'
                                onClick={googleSignInStart}>
                                {' '}
                                Entrar con Google{' '}
                            </ButtonSemantic>
                            <ButtonSemantic
                                secondColorCombination
                                type='button'
                                onClick={() =>
                                    onClickRegistration(true)
                                }>
                                {' '}
                                Registrar{' '}
                            </ButtonSemantic>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => {
            dispatch(googleSignInStart());
        },
        emailSignInStart: (email, password) =>
            dispatch(emailSignInStart({ email, password })),
    };
};

export default connect(null, mapDispatchToProps)(SignIn);
