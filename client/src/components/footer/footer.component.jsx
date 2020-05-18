import React from 'react';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
} from 'react-icons/io';
import { IconContext } from 'react-icons';
import Map from '../contact-map/contact-map.component';
import ContactInfo from '../contact-info/contact-info.component';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact-desktop'>
                <ContactInfo />
                <Map />
            </div>

            <div className='footer-information'>
                <p className='copyright'>
                    Irure sunt incididunt cillum minim quis Lorem
                    labore nostrud.
                </p>
                <div className='social-container'>
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '2em',
                        }}>
                        <a
                            href='https://www.facebook.com/impormotriz.ltda'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-item'>
                            <IoLogoFacebook size={48} />
                        </a>
                        <a
                            href='http://'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-item'>
                            <IoLogoInstagram size={48} />
                        </a>
                        <a
                            href='http://'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-item'>
                            <IoLogoLinkedin size={48} />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Footer;
