import React from 'react';
import ProductItem from '../../components/product-item/product-item.components';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selectors';
//import ButtonBack from '../../components/button-back/button-back.component';

import './product.styles.scss';

/*const DEFAULT_PRODUCT = {
    articulos: [
        {
            cantidad: 18,
            descripcion:
                'Proident cupidatat est amet non irure et deserunt',
            importante: true,
            nombre: 'a',
            nuevo: true,
            obsoleto: false,
            precio: 11000,
            procedencia: 'Colombia',
            referencia: `a${200}`,
            vehiculo_tipo: [`${111}`, `${112}`, `${113}`],
            get id() {
                return `${'Error'}_${this.referencia}`;
            },
            get imageUrl() {
                return `https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=${'Error'}_${
                    this.nombre
                }`;
            },
            get linkUrl() {
                return `catalogo/${'Error'}/${this.id}`;
            },
        },
    ],
    id: 'ERROR',
    imageUrl: 'https://i.ibb.co/yQcjpgm/car-Logo-Kia.jpg',
    linkUrl: 'catalogo/error',
    routeName: 'error',
    size: 'small',
    title: 'error',
};*/

const mapStateToProps = (state, ownProps) => {
    return {
        product: selectProduct(ownProps.match.params.productId)(
            state
        ),
    };
};

const ProductPage = ({ product }) => {
    //= DEFAULT_PRODUCT
    //console.log(product);

    //<ButtonBack />

    if (product !== undefined) {
        const { title, articulos } = product;
        return (
            <div className='product-page'>
                {title === 'Todo' ? null : (
                    <h1 className='title'>{title.toUpperCase()}</h1>
                )}

                <div className='ui equal width grid'>
                    {articulos.map(articulo => (
                        <ProductItem
                            key={articulo.id}
                            item={articulo}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps)(ProductPage);
