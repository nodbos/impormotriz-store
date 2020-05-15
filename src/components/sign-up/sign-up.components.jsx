import React, { Component } from 'react';
import FormInput from '../contact-form-input/contact-form-input.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import ButtonSemantic from '../button-semantic/button-semantic.component';

import './sign-up.styles.scss';

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: userCredentials => {
            dispatch(signUpStart(userCredentials));
        },
    };
};

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const {
            displayName,
            email,
            phone,
            password,
            confirmPassword,
        } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords don`t match');
            return;
        }

        signUpStart({ displayName, email, phone, password });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const {
            displayName,
            email,
            phone,
            password,
            confirmPassword,
        } = this.state;
        const { onClickRegistration } = this.props;
        return (
            <div className='sign-up'>
                <div className='container-form'>
                    <div className='info-form'>
                        <h2 className='title'>Aun no tengo cuenta</h2>
                        <span>
                            Registra tu correo, celular y contaseña
                        </span>
                    </div>
                    <form
                        className='sign-up-form'
                        onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            label='Nombre'
                            icon='user'
                            value={displayName}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            label='Correo Electrónico'
                            icon='at'
                            value={email}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='text'
                            name='phone'
                            label='Celular'
                            icon='call'
                            value={phone}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            label='Contraseña'
                            icon='hashtag'
                            value={password}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            label='Repitir Contraseña'
                            icon='hashtag'
                            value={confirmPassword}
                            handleChange={this.handleChange}
                            required
                        />
                        <ButtonSemantic type='submit'>
                            Registrarse
                        </ButtonSemantic>
                        <ButtonSemantic
                            secondColorCombination
                            type='button'
                            onClick={() =>
                                onClickRegistration(false)
                            }>
                            {' '}
                            Volver{' '}
                        </ButtonSemantic>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(SignUp);
