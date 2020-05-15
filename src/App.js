import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import UsPage from './pages/us-page/us-page.component';
import NotFoundPage from './pages/notfound-page/notfound-page.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup.component';
import CheckOutPage from './pages/checkout-page/checkout.component';
import ContactPage from './pages/contact-page/contact-page.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import WhatsappBadge from 'react-whatsapp-badge';
import WhatsappLogo from './assets/img/whatsapp.png';
import QUERY_MATCHES from './queries.utils';

import PRODUCTO_DATA from './firebase/product.data';
import { addCollectionAndDocuments } from './firebase/firebase.utils';

import './App.css';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
    return {
        checkUserSession: checkUser => {
            dispatch(checkUserSession(checkUser));
        },
    };
};

//const PHONE_NUMBER = parseInt(process.env.REACT_APP_PHONE_NUMBER);
const PHONE_NUMBER = 573187157368;

if (!QUERY_MATCHES['sm']) {
    console.log('cellphone', QUERY_MATCHES);
} else {
    console.log('desktop', QUERY_MATCHES);
}

class App extends Component {
    unsubscribeFromAuth = null;

    //------------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------------//
    _uploadAllCategoriesAndArticles = categoriesAndArticles =>
        categoriesAndArticles
            ? Object.keys(categoriesAndArticles).map(
                  key => categoriesAndArticles[key]
              )
            : [];

    _uploadDataToFirebase = toUpload => {
        //console.log(PRODUCTO_DATA);

        addCollectionAndDocuments(
            'products',
            toUpload(PRODUCTO_DATA)
        );
    };

    //------------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------------//
    //------------------------------------------------------------------------------------//

    componentDidMount() {
        const { checkUserSession } = this.props;

        checkUserSession(true);
        /*this._uploadDataToFirebase(
            this._uploadAllCategoriesAndArticles
        );*/
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    /*{!QUERY_MATCHES['sm'] ? (
                    <div>
                        <div style={{ height: '72px' }} />
                        <HeaderMenu />
                    </div>
                ) : null}*/

    /*{!QUERY_MATCHES['sm'] ? null : <HeaderMenu />}*/

    render() {
        return (
            <div className='App'>
                <div>
                    <div className='space-div' />
                    <Header queryMatches={true} renderLogo={true} />
                </div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/catalogo' component={ShopPage} />
                    <Route
                        exact
                        path='/contacto'
                        component={ContactPage}
                    />
                    <Route
                        exact
                        path='/checkout'
                        component={CheckOutPage}
                    />
                    <Route
                        exact
                        path='/nosotros'
                        component={UsPage}
                    />
                    <Route
                        exact
                        path='/ingresar'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                    <Route component={NotFoundPage} />
                </Switch>
                <WhatsappBadge
                    text='Cómo podemos ayudarte?'
                    phone={PHONE_NUMBER}
                    image={WhatsappLogo}
                    className='whatsapp'
                />

                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
