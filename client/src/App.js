import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import NotFoundPage from './pages/notfound-page/notfound-page.component';
import ErrorBoundary from './components/error/error-boundary.component';
import Spinner from './components/spinner/spinner.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

//import QUERY_MATCHES from './queries.utils';

import PRODUCTO_DATA from './firebase/product.data';
import { addCollectionAndDocuments } from './firebase/firebase.utils';

import './App.scss';

const HomePage = lazy(() =>
    import('./pages/home-page/home-page.component')
);
const ShopPage = lazy(() =>
    import('./pages/shop-page/shop-page.component')
);
const UsPage = lazy(() =>
    import('./pages/us-page/us-page.component')
);
const SignInAndSignUp = lazy(() =>
    import(
        './pages/signin-and-signup-page/signin-and-signup.component'
    )
);
const CheckOutPage = lazy(() =>
    import('./pages/checkout-page/checkout.component')
);
const ContactPage = lazy(() =>
    import('./pages/contact-page/contact-page.component')
);

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

/*if (!QUERY_MATCHES['sm']) {
    console.log('cellphone', QUERY_MATCHES);
} else {
    console.log('desktop', QUERY_MATCHES);
}*/

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

    // fake authentication Promise
    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds
    }

    componentDidMount() {
        const { checkUserSession } = this.props;

        checkUserSession(true);
        /*this._uploadDataToFirebase(
            this._uploadAllCategoriesAndArticles
        );*/

        this.authenticate().then(() => {
            const ele = document.getElementById(
                'ipl-progress-indicator'
            );
            if (ele) {
                // fade out
                ele.classList.add('available');
                setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = '';
                }, 2000);
            }
        });
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

    //<div className='space-div' />

    render() {
        return (
            <div className='App'>
                <div>
                    <Header queryMatches={true} renderLogo={true} />
                </div>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route
                                exact
                                path='/'
                                component={HomePage}
                            />
                            <Route
                                path='/catalogo'
                                component={ShopPage}
                            />
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
                    </Suspense>
                </ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Footer />
                </Suspense>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
