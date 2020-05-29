import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { fetchProductsStart } from '../../redux/shop/shop.actions';
import WithSlider from '../../components/with-slider/with-slider.component';
import HistoriesDirectory from '../../components/histories-directory/histories-directory.component';
import SliderItem from '../../components/slider-item/slider-item.component';

import './home-page.styles.scss';

/*const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart('posts')),
});*/

class HomePage extends Component {
    componentDidMount() {
        //const { fetchProductsStart } = this.props;
        //fetchProductsStart();
    }

    render() {
        return (
            <div className='home-page'>
                <div className='home-slider'>
                    <WithSlider
                        desktopItem={1}
                        tabletItem={1}
                        mobileItem={1}>
                        <SliderItem
                            imgNum={1}
                            chatButton
                            sideContent
                            textArray={[
                                'Nuestros canales digitales están disponibles para ti.',
                                'Comunicate con nosotros'.toUpperCase(),
                                'Vía teléfono, correo electrónico o WhatsApp.',
                            ]}
                        />
                        <SliderItem imgNum={2} />
                        <SliderItem imgNum={3} />
                    </WithSlider>
                </div>
                <div className='home-content'>
                    <HistoriesDirectory />
                    <WithSlider
                        desktopItem={3}
                        tabletItem={2}
                        mobileItem={2}>
                        <SliderItem imgNum={1} isLogo />
                        <SliderItem imgNum={2} isLogo />
                        <SliderItem imgNum={3} isLogo />
                        <SliderItem imgNum={4} isLogo />
                        <SliderItem imgNum={5} isLogo />
                    </WithSlider>
                </div>
            </div>
        );
    }
}

export default HomePage;
//export default connect(null, mapDispatchToProps)(HomePage);
