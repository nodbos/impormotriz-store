import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import './contact-social-badge.styles.scss';

const ContactSocialBadge = ({ hasTooltip, isWhatsapp, linkUrl }) => {
    return (
        <a
            className='social-badge'
            href={linkUrl}
            rel='noopener noreferrer'
            style={{
                backgroundColor: isWhatsapp ? '#25d366' : '#3B5998',
            }}
            target='_blank'>
            {isWhatsapp ? (
                <FaWhatsapp className='social-icon' />
            ) : (
                <FaFacebookF className='social-icon' />
            )}

            {hasTooltip ? (
                <span className='tooltip'>
                    <span>
                        <b>Puedes llamarnos a:</b>
                    </span>
                    <br />
                    <span>(+57) 318 715 6513</span>
                    <br />
                    <span>(+57) 316 830 3660</span>
                </span>
            ) : null}
        </a>
    );
};

export default ContactSocialBadge;
