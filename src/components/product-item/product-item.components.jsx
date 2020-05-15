import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { Card, Icon, Image } from 'semantic-ui-react';
import ButtonSemantic from '../button-semantic/button-semantic.component';

import 'semantic-ui-css/semantic.min.css';
import './product-item.styles.scss';

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch(addItem(item));
        },
    };
};

const ProductItem = ({ item, addItem }) => {
    const {
        id,
        imageUrl,
        nombre,
        precio,
        //cantidad,
        //importante,
        //nuevo,
        //obsoleto,
        //procedencia,
        referencia,
        vehiculo_tipo,
    } = item;

    const nombreCompleto = `${
        id.split('_')[0]
    } ${nombre}`.toUpperCase();

    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    //column

    return (
        <Card className='product-item'>
            <Image src={imageUrl} wrapped ui={false} />
            <Card.Content>
                <div className='product-header'>
                    <div className='left aligned column'>
                        <Card.Header>{nombreCompleto}</Card.Header>
                        <Card.Meta>
                            <span>{referencia.toUpperCase()}</span>
                        </Card.Meta>
                    </div>
                    <div className='right aligned column semantic-price'>
                        <Icon name='dollar sign' />
                        {numberWithCommas(precio)}
                    </div>
                </div>

                <Card.Description>
                    Este repuesto funciona para los siguientes carros:{' '}
                    {id.split('_')[0] + ' ' + vehiculo_tipo[0]},{' '}
                    {id.split('_')[0] + ' ' + vehiculo_tipo[1]},{' '}
                    {id.split('_')[0] + ' ' + vehiculo_tipo[2]}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='center aligned'>
                    <ButtonSemantic
                        productMargin
                        onClick={() => {
                            addItem(item);
                        }}>
                        <Icon
                            name='angle down'
                            size='big'
                            className='semantic-more'
                        />
                    </ButtonSemantic>
                </div>
            </Card.Content>
        </Card>
    );
};

export default connect(null, mapDispatchToProps)(ProductItem);
