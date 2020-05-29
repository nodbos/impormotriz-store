import React from 'react';

import './button-semantic.styles.scss';

const ButtonSemantic = ({
    children,
    secondColorCombination,
    backButton,
    productMargin,
    chatButton,
    ...otherProps
}) => {
    return (
        <button
            className={`${backButton ? 'back-button' : ''} ${
                secondColorCombination
                    ? 'second-color'
                    : 'first-color'
            } ${productMargin ? 'product-margin' : ''} ${
                chatButton ? 'chat-button' : ''
            } semantic-button`}
            {...otherProps}>
            {children}
        </button>
    );
};

export default ButtonSemantic;
