import React from 'react';
import ButtonBack from '../../components/button-back/button-back.component';

import './notfound-page.style.scss';

const NotFoundPage = () => (
    <div className='not-found-page'>
        <ButtonBack />
        <div className='contact-container'>
            <div className='container-form'>
                <div className='error' />
                <h3 className='error-title'>Página no encontrada</h3>
                <p className='error-message'>
                    Por favor presiona el botón volver
                </p>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
