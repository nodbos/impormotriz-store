import React from 'react';

import './button-semantic.styles.scss';

const ButtonSemantic = ({
    children,
    secondColorCombination,
    backButton,
    productMargin,
    ...otherProps
}) => {
    return (
        <button
            className={`${backButton ? 'back-button' : ''} ${
                secondColorCombination
                    ? 'second-color'
                    : 'first-color'
            } ${
                productMargin ? 'product-margin' : ''
            } semantic-button`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default ButtonSemantic;
