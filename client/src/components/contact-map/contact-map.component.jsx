import React, { Component } from 'react';
import ReactMapGL, {
    Marker,
    Popup,
    NavigationControl,
} from 'react-map-gl';
import ShopPin from './shop-pin.component';
import ShopInfo from './shop-info.component';

import './contact-map.styles.scss';

const TOKEN =
    process.env.REACT_APP_MAP_TOKEN ||
    'pk.eyJ1IjoiZmVsaXBlYXZlYiIsImEiOiJjazlzeGx4Y3QxYTNjM2dwNzBhOWZ4OWZvIn0.reeGflumNXQ-UFZ4o29GJg';

const SHOP_ADDRESS = {
    shop: 'Impormotriz',
    image: 'https://i.ibb.co/gdbDPD7/prueba.jpg',
    city: 'Palmira',
    latitude: 3.53729,
    longitude: -76.297785,
};

class Map extends Component {
    state = {
        viewport: {
            height: '450px',
            width: '100%',
            latitude: SHOP_ADDRESS.latitude + 0.0003,
            longitude: SHOP_ADDRESS.longitude + 0.0005,
            zoom: 17,
        },
        popupInfo: null, //SHOP_ADDRESS
        mounted: false,
    };

    _renderShopMarker = (city, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                longitude={city.longitude}
                latitude={city.latitude}>
                <ShopPin
                    size={35}
                    onMouseEnter={() => {
                        this.setState({ popupInfo: city });
                    }}
                    onMouseLeave={() => {
                        this.setState({ popupInfo: null });
                    }}
                />
            </Marker>
        );
    };

    _renderPopup() {
        const { popupInfo } = this.state;

        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor='left'
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeButton={false}
                    closeOnClick={true}
                    offsetLeft={20}
                    onClose={() =>
                        this.setState({ popupInfo: null })
                    }>
                    <ShopInfo info={popupInfo} />
                </Popup>
            )
        );
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    render() {
        const { viewport, mounted } = this.state;
        return (
            <div className='contact-map'>
                <ReactMapGL
                    className='contact-map'
                    dragPan
                    mapboxApiAccessToken={TOKEN}
                    mapStyle='mapbox://styles/mapbox/outdoors-v11'
                    scrollZoom={false}
                    touchAction={'pan-y'}
                    {...viewport}
                    onViewportChange={viewport => {
                        if (mounted) {
                            this.setState({ viewport });
                        }
                    }}>
                    {this._renderShopMarker(SHOP_ADDRESS, 0)}
                    {this._renderPopup()}
                    <div className='nav nav-style'>
                        <NavigationControl />
                    </div>
                </ReactMapGL>
            </div>
        );
    }
}

export default Map;
