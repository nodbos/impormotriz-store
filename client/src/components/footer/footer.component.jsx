import React from 'react';
import ContactInfo from '../contact-info/contact-info.component';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact-desktop'>
                <ContactInfo />
            </div>
            <div className='footer-information'>
                <p className='copyright'>
                    Irure sunt incididunt cillum minim quis Lorem
                    labore nostrud.
                </p>
            </div>
        </div>
    );
};

export default Footer;
