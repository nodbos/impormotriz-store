import React from 'react';
import ButtonSemantic from '../button-semantic/button-semantic.component';

import './slider-item.styles.scss';

const PHONE_NUMBER = 573187157368;
const imgArray = ['zero', 'one', 'two', 'three', 'four', 'five'];

const SliderItem = ({
    imgNum,
    isLogo,
    chatButton,
    sideContent,
    textArray,
}) => {
    return (
        <div className={`slider-item ${isLogo ? 'logo' : ''}`}>
            <div
                className={`slider-image ${
                    imgNum ? imgArray[imgNum] : ''
                } ${sideContent ? 'small' : 'big'}`}
            />
            {sideContent ? (
                <div className='slider-content'>
                    <h2 className='slider-text'>{textArray[0]}</h2>
                    <h1>{textArray[1]}</h1>
                    <h2>{textArray[2]}</h2>
                    {chatButton ? (
                        <a
                            href={`https://wa.me/${PHONE_NUMBER}?text=¿Cómo podemos ayudarte?`}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <ButtonSemantic
                                secondColorCombination
                                type='button'>
                                Chatea con nosotros
                            </ButtonSemantic>
                        </a>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default SliderItem;
