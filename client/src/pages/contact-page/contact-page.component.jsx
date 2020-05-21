import React from 'react';

import ContactForm from '../../components/contact-form/contact-form.component';
import Map from '../../components/contact-map/contact-map.component';
import ContactInfo from '../../components/contact-info/contact-info.component';

import './contact-page.styles.scss';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='contact-desktop'>
                <ContactInfo />
            </div>
            <Map />
            <ContactForm />
        </div>
    );
};

export default ContactPage;
