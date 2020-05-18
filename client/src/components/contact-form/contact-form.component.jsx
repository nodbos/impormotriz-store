import React, { Component } from 'react';
import FormInput from '../contact-form-input/contact-form-input.component';
import ButtonSemantic from '../button-semantic/button-semantic.component';

import './contact-form.styles.scss';

class ContactForm extends Component {
    state = {
        adminEmail: 'USE_ADMIN_EMAIL@gmail.com', //process.env.REACT_APP_EMAIL
        name: '',
        email: '',
        message: '',
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { name, adminEmail, email, message } = this.state;

        window.open(
            `mailto:${adminEmail}?subject=${
                'Question - ' + name
            }&body=${email + ' - ' + message}`
        );
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    /*action={`mailto:${this.state.adminEmail}`}
    method='post'
    encType='text/plain'*/

    render() {
        return (
            <div className='contact-form'>
                <div className='container-form'>
                    <div className='info-form'>
                        <h2>Contactanos</h2>
                        <span>Pregúntenos cualquier cosa</span>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='name'
                            label='Nombre'
                            icon='user'
                            value={this.state.name}
                            handleChange={this.handleChange}
                            required
                        />
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
                            type='text'
                            name='message'
                            label='Mensaje'
                            icon='file alternate outline'
                            value={this.state.message}
                            handleChange={this.handleChange}
                            required
                        />

                        <ButtonSemantic type='submit'>
                            Enviar
                        </ButtonSemantic>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;
