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
                            name='map marker alternate'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>
                            Calle 41 # 28-26, Palmira, Valle del Cauca
                        </h3>
                        <Icon
                            name='map marker alternate'
                            size='big'
                            className='semantic-more'
                        />
                    </div>
                    <div className='info-item'>
                        <Icon
                            name='call'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>2814924 - 2713111</h3>
                        <Icon
                            name='call'
                            size='big'
                            className='semantic-more'
                        />
                    </div>
                    <div className='info-item'>
                        <Icon
                            name='mobile alternate'
                            size='big'
                            className='semantic-more'
                        />
                        <h3>318 715 6513 - 316 830 8616</h3>
                        <Icon
                            name='mobile alternate'
                            size='big'
                            className='semantic-more'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
