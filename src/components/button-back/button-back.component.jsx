import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonSemantic from '../button-semantic/button-semantic.component';

const ButtonBack = () => {
    let history = useHistory();
    return (
        <ButtonSemantic
            backButton
            secondColorCombination
            onClick={() => history.goBack()}>
            Volver
        </ButtonSemantic>
    );
};

export default ButtonBack;
