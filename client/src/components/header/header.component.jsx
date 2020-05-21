import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/svg/impormotriz_logo.svg';
import { createStructuredSelector } from 'reselect';
import HeaderMenu from '../header-menu/header-menu.component';
import ContactSocialBadge from '../contact-social-badge/contact-social-badge.component';

import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

//const PHONE_NUMBER = parseInt(process.env.REACT_APP_PHONE_NUMBER);
const PHONE_NUMBER = 573187157368;
const BASE_MESSAGE = '¿Cómo podemos ayudarte?';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header-component'>
            <div className='badges-container'>
                <ContactSocialBadge
                    hasTooltip={false}
                    isWhatsapp={false}
                    linkUrl={
                        'https://www.facebook.com/impormotriz.ltda'
                    }
                />
                <ContactSocialBadge
                    hasTooltip
                    isWhatsapp
                    linkUrl={`https://wa.me/${PHONE_NUMBER}?text=${BASE_MESSAGE}`}
                />
            </div>
            <div className='logo-container'>
                <Logo className='logo' />
                {currentUser ? <CartIcon /> : null}

                <HeaderMenu />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

export default connect(mapStateToProps)(Header);
