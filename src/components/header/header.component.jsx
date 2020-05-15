import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/svg/impormotriz_logo_2.svg';
import { createStructuredSelector } from 'reselect';
import HeaderMenu from '../header-menu/header-menu.component';

import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header-component'>
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
