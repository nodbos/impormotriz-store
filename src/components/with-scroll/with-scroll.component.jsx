import { Component } from 'react';
import { withRouter } from 'react-router';

class WithScroll extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(WithScroll);
