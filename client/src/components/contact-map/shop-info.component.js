import React, { PureComponent } from 'react';
import './contact-map.styles.scss';

export default class ShopInfo extends PureComponent {
    render() {
        const { info } = this.props;
        const { shop, city } = info;
        const displayName = `${shop}, ${city}`;

        return (
            <div>
                <div className='shop-info-title'>{displayName}</div>
                <img
                    width={180}
                    src={info.image}
                    alt='Impormotriz Shop'
                />
            </div>
        );
    }
}
