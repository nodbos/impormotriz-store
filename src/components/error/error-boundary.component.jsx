import React, { Component } from 'react';
import NotFoundPage from '../../pages/notfound-page/notfound-page.component';

class ErrorBoundary extends Component {
    state = {
        hasErrored: false,
    };

    static getDerivedStateFromError(error) {
        //Process error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasErrored) {
            return <NotFoundPage />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
