import React from 'react';
import { Icon } from 'semantic-ui-react';

import './contact-info.styles.scss';

const ContactInfo = () => {
    return (
        <div className='contact-container'>
            <div className='container-form'>
                <div className='contact-info'>
                    <h1>Información</h1>
                    <div className='info-item'>
                        <Icon
                            name='address book'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>
                            Calle 41 # 28-26, Palmira, Valle del Cauca
                        </h3>
                    </div>
                    <div className='info-item'>
                        <Icon
                            name='text telephone'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>2814924 - 2713111</h3>
                    </div>
                    <div className='info-item'>
                        <Icon
                            name='call'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>318 715 6513 - 316 830 8616</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
