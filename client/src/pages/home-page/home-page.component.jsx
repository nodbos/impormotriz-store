import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { fetchProductsStart } from '../../redux/shop/shop.actions';
import WithSlider from '../../components/with-slider/with-slider.component';
import imgTest from '../../assets/img/impormotriz_exterior_1.jpg';

import './home-page.styles.scss';

/*const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart('posts')),
});*/

const CustomDiv = ({ link }) => {
    return (
        <div
            className='custom-div'
            style={{
                backgroundImage: `url(${link})`,
            }}
        />
    );
};

class HomePage extends Component {
    componentDidMount() {
        //const { fetchProductsStart } = this.props;
        //fetchProductsStart();
    }

    render() {
        return (
            <div className='home-page'>
                <WithSlider>
                    <CustomDiv link={imgTest} />
                    <CustomDiv link={imgTest} />
                    <CustomDiv link={imgTest} />
                </WithSlider>
            </div>
        );
    }
}

export default HomePage;
//export default connect(null, mapDispatchToProps)(HomePage);
